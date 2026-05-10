<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

function order_to_array(array $row): array
{
    return [
        'id' => $row['order_number'],
        'dbId' => (int)$row['id'],
        'customer' => [
            'name' => $row['customer_name'],
            'email' => $row['customer_email'],
            'phone' => $row['customer_phone'],
            'address' => $row['shipping_address'] ?? ''
        ],
        'total' => (float)$row['total_amount'],
        'subtotal' => (float)$row['subtotal'],
        'deliveryFee' => (float)$row['delivery_fee'],
        'status' => $row['status'],
        'paymentMethod' => $row['payment_method'],
        'paymentStatus' => $row['payment_status'],
        'date' => $row['created_at'],
        'deliveryDate' => $row['delivered_at'] ?? null
    ];
}

function read_order_items(int $orderId): array
{
    $stmt = db()->prepare('SELECT oi.*, p.name, p.image_url FROM order_items oi LEFT JOIN products p ON p.id = oi.product_id WHERE oi.order_id = ?');
    $stmt->execute([$orderId]);
    return array_map(function($item) {
        return [
            'productId' => (string)$item['product_id'],
            'name' => $item['product_name'] ?: $item['name'],
            'price' => (float)$item['unit_price'],
            'quantity' => (int)$item['quantity'],
            'image' => $item['image_url'] ?? ''
        ];
    }, $stmt->fetchAll());
}

if ($action === 'list') {
    $user = require_login();
    $params = [];
    if ($user['role'] === 'admin' && !empty($_GET['admin'])) {
        $sql = 'SELECT o.*, u.name AS user_name FROM orders o LEFT JOIN users u ON u.id=o.user_id ORDER BY o.created_at DESC';
    } else {
        $sql = 'SELECT o.* FROM orders o WHERE o.user_id = ? ORDER BY o.created_at DESC';
        $params[] = (int)$user['id'];
    }
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    $orders = array_map('order_to_array', $stmt->fetchAll());
    ok(['orders' => $orders]);
}

if ($action === 'get') {
    $user = require_login();
    $id = (int)($data['id'] ?? $_GET['id'] ?? 0);
    $where = $user['role'] === 'admin' ? 'id = ?' : 'id = ? AND user_id = ?';
    $params = $user['role'] === 'admin' ? [$id] : [$id, (int)$user['id']];
    $stmt = db()->prepare("SELECT * FROM orders WHERE $where LIMIT 1");
    $stmt->execute($params);
    $row = $stmt->fetch();
    if (!$row) fail('Order not found.', 404);
    $order = order_to_array($row);
    $order['items'] = read_order_items((int)$row['id']);
    ok(['order' => $order]);
}

if ($action === 'create') {
    require_method(['POST']);
    $user = require_login();
    $items = $data['items'] ?? [];
    if (!is_array($items) || count($items) === 0) fail('Cart is empty.');

    $customerName = clean_string($data['fullName'] ?? $data['customer']['name'] ?? $user['name'], 120);
    $phone = clean_string($data['phone'] ?? $data['customer']['phone'] ?? $user['phone'] ?? '', 40);
    $address = trim((string)($data['address'] ?? $data['shipping_address'] ?? ''));
    $city = clean_string($data['city'] ?? '', 80);
    $note = trim((string)($data['note'] ?? ''));
    $paymentMethod = clean_string($data['paymentMethod'] ?? 'COD', 30);

    if ($customerName === '' || $phone === '' || $address === '') fail('Name, phone and address are required.');

    $pdo = db();
    $pdo->beginTransaction();
    try {
        $subtotal = 0;
        $orderItems = [];
        foreach ($items as $item) {
            $productId = (int)($item['productId'] ?? $item['product_id'] ?? 0);
            $qty = max(1, (int)($item['quantity'] ?? 1));
            $stmt = $pdo->prepare('SELECT id, name, price, stock FROM products WHERE id = ? AND status = "active" FOR UPDATE');
            $stmt->execute([$productId]);
            $product = $stmt->fetch();
            if (!$product) throw new RuntimeException('Product not available.');
            if ((int)$product['stock'] < $qty) throw new RuntimeException('Not enough stock for ' . $product['name']);
            $lineTotal = (float)$product['price'] * $qty;
            $subtotal += $lineTotal;
            $orderItems[] = ['product' => $product, 'qty' => $qty, 'lineTotal' => $lineTotal];
        }

        $freeThreshold = (float)get_setting('free_shipping_threshold', 1000);
        $standardShipping = (float)get_setting('standard_shipping_cost', 60);
        $deliveryFee = $subtotal >= $freeThreshold ? 0 : $standardShipping;
        $total = $subtotal + $deliveryFee;
        $orderNumber = next_order_number();
        $stmt = $pdo->prepare('INSERT INTO orders (order_number, user_id, customer_name, customer_email, customer_phone, shipping_address, city, subtotal, delivery_fee, total_amount, payment_method, payment_status, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "pending", "pending", ?)');
        $stmt->execute([$orderNumber, (int)$user['id'], $customerName, $user['email'], $phone, $address, $city, $subtotal, $deliveryFee, $total, $paymentMethod, $note]);
        $orderId = (int)$pdo->lastInsertId();

        foreach ($orderItems as $oi) {
            $p = $oi['product'];
            $stmt = $pdo->prepare('INSERT INTO order_items (order_id, product_id, product_name, unit_price, quantity, total_price) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->execute([$orderId, (int)$p['id'], $p['name'], (float)$p['price'], $oi['qty'], $oi['lineTotal']]);
            $stmt = $pdo->prepare('UPDATE products SET stock = stock - ? WHERE id = ?');
            $stmt->execute([$oi['qty'], (int)$p['id']]);
        }
        $stmt = $pdo->prepare('DELETE FROM cart_items WHERE user_id = ?');
        $stmt->execute([(int)$user['id']]);
        $_SESSION['cart'] = [];
        $pdo->commit();

        $stmt = $pdo->prepare('SELECT * FROM orders WHERE id = ?');
        $stmt->execute([$orderId]);
        $order = order_to_array($stmt->fetch());
        $order['items'] = read_order_items($orderId);
        ok(['order' => $order], 'Order placed successfully.');
    } catch (Throwable $e) {
        $pdo->rollBack();
        fail($e->getMessage(), 400);
    }
}

if ($action === 'update_status') {
    require_method(['POST']);
    require_admin();
    $id = (int)($data['id'] ?? 0);
    $status = clean_string($data['status'] ?? '', 30);
    $allowed = ['pending','confirmed','packed','shipped','delivered','cancelled'];
    if (!in_array($status, $allowed, true)) fail('Invalid status.');
    $deliveredSql = $status === 'delivered' ? ', delivered_at = NOW()' : '';
    $stmt = db()->prepare("UPDATE orders SET status = ? $deliveredSql WHERE id = ?");
    $stmt->execute([$status, $id]);
    ok([], 'Order status updated.');
}

fail('Unknown orders action.', 404);
