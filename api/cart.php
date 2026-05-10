<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();
$user = current_user();

function session_cart(): array
{
    if (!isset($_SESSION['cart']) || !is_array($_SESSION['cart'])) $_SESSION['cart'] = [];
    return $_SESSION['cart'];
}

function save_session_cart(array $cart): void
{
    $_SESSION['cart'] = array_values($cart);
}

function db_cart_items(int $userId): array
{
    $stmt = db()->prepare('SELECT product_id AS productId, quantity FROM cart_items WHERE user_id = ? ORDER BY created_at DESC');
    $stmt->execute([$userId]);
    return array_map(function($row) {
        return ['productId' => (string)$row['productId'], 'quantity' => (int)$row['quantity']];
    }, $stmt->fetchAll());
}

if ($action === 'list') {
    $cart = $user ? db_cart_items((int)$user['id']) : session_cart();
    ok(['cart' => $cart]);
}

if ($action === 'add') {
    require_method(['POST']);
    $productId = (int)($data['product_id'] ?? $data['productId'] ?? 0);
    $qty = max(1, (int)($data['quantity'] ?? 1));
    if ($productId <= 0) fail('Product ID is required.');
    $stmt = db()->prepare('SELECT id, stock FROM products WHERE id = ? AND status = "active"');
    $stmt->execute([$productId]);
    $product = $stmt->fetch();
    if (!$product) fail('Product not available.', 404);
    if ((int)$product['stock'] < $qty) fail('Not enough stock available.');

    if ($user) {
        $stmt = db()->prepare('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = LEAST(quantity + VALUES(quantity), ?)');
        $stmt->execute([(int)$user['id'], $productId, $qty, (int)$product['stock']]);
        ok(['cart' => db_cart_items((int)$user['id'])], 'Added to cart.');
    }

    $cart = session_cart();
    $found = false;
    foreach ($cart as &$item) {
        if ((int)$item['productId'] === $productId) {
            $item['quantity'] = min((int)$product['stock'], (int)$item['quantity'] + $qty);
            $found = true;
            break;
        }
    }
    unset($item);
    if (!$found) $cart[] = ['productId' => (string)$productId, 'quantity' => $qty];
    save_session_cart($cart);
    ok(['cart' => $cart], 'Added to cart.');
}

if ($action === 'update') {
    require_method(['POST']);
    $productId = (int)($data['product_id'] ?? $data['productId'] ?? 0);
    $qty = (int)($data['quantity'] ?? 1);
    if ($productId <= 0) fail('Product ID is required.');

    if ($qty < 1) {
        $data['action'] = 'remove';
        $action = 'remove';
    } else {
        $stmt = db()->prepare('SELECT stock FROM products WHERE id = ?');
        $stmt->execute([$productId]);
        $stock = (int)$stmt->fetchColumn();
        if ($qty > $stock) fail('Not enough stock available.');
        if ($user) {
            $stmt = db()->prepare('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = VALUES(quantity)');
            $stmt->execute([(int)$user['id'], $productId, $qty]);
            ok(['cart' => db_cart_items((int)$user['id'])], 'Cart updated.');
        }
        $cart = session_cart();
        foreach ($cart as &$item) {
            if ((int)$item['productId'] === $productId) $item['quantity'] = $qty;
        }
        unset($item);
        save_session_cart($cart);
        ok(['cart' => $cart], 'Cart updated.');
    }
}

if ($action === 'remove') {
    require_method(['POST']);
    $productId = (int)($data['product_id'] ?? $data['productId'] ?? 0);
    if ($productId <= 0) fail('Product ID is required.');
    if ($user) {
        $stmt = db()->prepare('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?');
        $stmt->execute([(int)$user['id'], $productId]);
        ok(['cart' => db_cart_items((int)$user['id'])], 'Removed from cart.');
    }
    $cart = array_values(array_filter(session_cart(), fn($item) => (int)$item['productId'] !== $productId));
    save_session_cart($cart);
    ok(['cart' => $cart], 'Removed from cart.');
}

if ($action === 'clear') {
    require_method(['POST']);
    if ($user) {
        $stmt = db()->prepare('DELETE FROM cart_items WHERE user_id = ?');
        $stmt->execute([(int)$user['id']]);
    }
    save_session_cart([]);
    ok(['cart' => []], 'Cart cleared.');
}

fail('Unknown cart action.', 404);
