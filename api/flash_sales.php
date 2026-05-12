<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

function computed_flash_status(array $row): string
{
    if (in_array($row['status'], ['paused','deleted'], true)) return $row['status'];
    $now = time();
    $start = strtotime($row['start_time']);
    $end = strtotime($row['end_time']);
    if ($end < $now) return 'ended';
    if ($start > $now) return 'scheduled';
    return 'active';
}

function flash_sale_products(int $saleId): array
{
    $stmt = db()->prepare('SELECT p.*, c.name AS category_name, fsp.sale_price, fs.discount_percent AS active_sale_discount, fs.end_time AS active_sale_end_time
        FROM flash_sale_products fsp
        JOIN flash_sales fs ON fs.id=fsp.flash_sale_id
        JOIN products p ON p.id=fsp.product_id
        LEFT JOIN categories c ON c.id=p.category_id
        WHERE fsp.flash_sale_id=? AND p.status != "deleted"
        ORDER BY p.name');
    $stmt->execute([$saleId]);
    return array_map('product_row_to_frontend', $stmt->fetchAll());
}

function sale_to_array(array $row): array
{
    $products = flash_sale_products((int)$row['id']);
    return [
        'id' => (int)$row['id'],
        'name' => $row['name'],
        'discount' => (int)$row['discount_percent'],
        'startTime' => $row['start_time'],
        'endTime' => $row['end_time'],
        'status' => computed_flash_status($row),
        'storedStatus' => $row['status'],
        'productCount' => count($products),
        'products' => $products
    ];
}

if ($action === 'list') {
    refresh_product_flash_flags();
    $rows = db()->query('SELECT * FROM flash_sales WHERE status != "deleted" ORDER BY start_time DESC, id DESC')->fetchAll();
    ok(['flashSales' => array_map('sale_to_array', $rows)]);
}

if ($action === 'get') {
    $id = (int)($data['id'] ?? $_GET['id'] ?? 0);
    $stmt = db()->prepare('SELECT * FROM flash_sales WHERE id=? AND status != "deleted" LIMIT 1');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) fail('Flash sale not found.', 404);
    ok(['flashSale' => sale_to_array($row)]);
}

if (in_array($action, ['create','update','delete','toggle'], true)) require_admin();

if ($action === 'create' || $action === 'update') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $name = clean_string($data['name'] ?? '', 180);
    $discount = (int)($data['discount'] ?? $data['discount_percent'] ?? 0);
    $start = normalize_datetime($data['startTime'] ?? $data['start_time'] ?? null);
    $end = normalize_datetime($data['endTime'] ?? $data['end_time'] ?? null);
    $productIds = $data['productIds'] ?? $data['product_ids'] ?? [];
    if (!is_array($productIds)) $productIds = array_filter(array_map('intval', explode(',', (string)$productIds)));
    $productIds = array_values(array_unique(array_filter(array_map('intval', $productIds))));

    if ($name === '' || $discount <= 0 || $discount > 90 || !$start || !$end) fail('Sale name, discount, start and end time are required.');
    if (strtotime($end) <= strtotime($start)) fail('End time must be after start time.');
    if (count($productIds) === 0) fail('Select at least one product for this flash sale.');

    $status = strtotime($start) <= time() && strtotime($end) >= time() ? 'active' : 'scheduled';
    $pdo = db();
    $pdo->beginTransaction();
    try {
        if ($action === 'create') {
            $stmt = $pdo->prepare('INSERT INTO flash_sales (name, discount_percent, start_time, end_time, status) VALUES (?, ?, ?, ?, ?)');
            $stmt->execute([$name, $discount, $start, $end, $status]);
            $id = (int)$pdo->lastInsertId();
        } else {
            if ($id <= 0) throw new RuntimeException('Flash sale ID is required.');
            $stmt = $pdo->prepare('UPDATE flash_sales SET name=?, discount_percent=?, start_time=?, end_time=?, status=? WHERE id=? AND status != "deleted"');
            $stmt->execute([$name, $discount, $start, $end, $status, $id]);
            $pdo->prepare('DELETE FROM flash_sale_products WHERE flash_sale_id=?')->execute([$id]);
        }

        $productStmt = $pdo->prepare('SELECT id, price FROM products WHERE id=? AND status != "deleted"');
        $insertStmt = $pdo->prepare('INSERT INTO flash_sale_products (flash_sale_id, product_id, sale_price) VALUES (?, ?, ?)');
        foreach ($productIds as $pid) {
            $productStmt->execute([$pid]);
            $product = $productStmt->fetch();
            if (!$product) continue;
            $salePrice = round(((float)$product['price']) * (100 - $discount) / 100, 2);
            $insertStmt->execute([$id, (int)$product['id'], $salePrice]);
        }
        refresh_product_flash_flags($pdo);
        $pdo->commit();
        $stmt = db()->prepare('SELECT * FROM flash_sales WHERE id=?');
        $stmt->execute([$id]);
        ok(['flashSale' => sale_to_array($stmt->fetch())], $action === 'create' ? 'Flash sale created.' : 'Flash sale updated.');
    } catch (Throwable $e) {
        $pdo->rollBack();
        fail($e->getMessage(), 400);
    }
}

if ($action === 'toggle') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $status = clean_string($data['status'] ?? '', 30);
    $allowed = ['active','paused','scheduled','ended'];
    if ($id <= 0) fail('Flash sale ID is required.');
    if (!in_array($status, $allowed, true)) fail('Invalid flash sale status.');
    $stmt = db()->prepare('UPDATE flash_sales SET status=? WHERE id=? AND status != "deleted"');
    $stmt->execute([$status, $id]);
    refresh_product_flash_flags();
    ok([], 'Flash sale status updated.');
}

if ($action === 'delete') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    if ($id <= 0) fail('Flash sale ID is required.');
    $stmt = db()->prepare('UPDATE flash_sales SET status="deleted" WHERE id=?');
    $stmt->execute([$id]);
    refresh_product_flash_flags();
    ok([], 'Flash sale deleted.');
}

fail('Unknown flash sale action.', 404);
