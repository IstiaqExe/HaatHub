<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

function flash_sale_products(int $saleId): array
{
    $stmt = db()->prepare('SELECT p.*, c.name AS category_name, fsp.sale_price FROM flash_sale_products fsp JOIN products p ON p.id=fsp.product_id LEFT JOIN categories c ON c.id=p.category_id WHERE fsp.flash_sale_id=? ORDER BY p.name');
    $stmt->execute([$saleId]);
    return array_map('product_row_to_frontend', $stmt->fetchAll());
}

if ($action === 'list') {
    $rows = db()->query('SELECT * FROM flash_sales WHERE status != "deleted" ORDER BY start_time DESC')->fetchAll();
    $sales = [];
    foreach ($rows as $row) {
        $sales[] = [
            'id' => (int)$row['id'],
            'name' => $row['name'],
            'discount' => (int)$row['discount_percent'],
            'startTime' => $row['start_time'],
            'endTime' => $row['end_time'],
            'status' => $row['status'],
            'products' => flash_sale_products((int)$row['id'])
        ];
    }
    ok(['flashSales' => $sales]);
}

if (in_array($action, ['create','update','delete','toggle'], true)) require_admin();

if ($action === 'create' || $action === 'update') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $name = clean_string($data['name'] ?? '', 180);
    $discount = (int)($data['discount'] ?? $data['discount_percent'] ?? 0);
    $start = $data['startTime'] ?? $data['start_time'] ?? null;
    $end = $data['endTime'] ?? $data['end_time'] ?? null;
    $productIds = $data['productIds'] ?? $data['product_ids'] ?? [];
    if (!is_array($productIds)) $productIds = array_filter(array_map('intval', explode(',', (string)$productIds)));
    if ($name === '' || $discount <= 0 || !$start || !$end) fail('Sale name, discount, start and end time are required.');
    $pdo = db();
    $pdo->beginTransaction();
    try {
        if ($action === 'create') {
            $stmt = $pdo->prepare('INSERT INTO flash_sales (name, discount_percent, start_time, end_time, status) VALUES (?, ?, ?, ?, "scheduled")');
            $stmt->execute([$name, $discount, $start, $end]);
            $id = (int)$pdo->lastInsertId();
        } else {
            if ($id <= 0) throw new RuntimeException('Flash sale ID is required.');
            $stmt = $pdo->prepare('UPDATE flash_sales SET name=?, discount_percent=?, start_time=?, end_time=? WHERE id=?');
            $stmt->execute([$name, $discount, $start, $end, $id]);
            $pdo->prepare('DELETE FROM flash_sale_products WHERE flash_sale_id=?')->execute([$id]);
        }
        foreach ($productIds as $pid) {
            $pid = (int)$pid;
            if ($pid <= 0) continue;
            $stmt = $pdo->prepare('SELECT price FROM products WHERE id=?');
            $stmt->execute([$pid]);
            $price = (float)$stmt->fetchColumn();
            $salePrice = round($price * (100 - $discount) / 100, 2);
            $stmt = $pdo->prepare('INSERT IGNORE INTO flash_sale_products (flash_sale_id, product_id, sale_price) VALUES (?, ?, ?)');
            $stmt->execute([$id, $pid, $salePrice]);
            $stmt = $pdo->prepare('UPDATE products SET is_flash_sale=1, discount_percent=?, flash_sale_end_time=? WHERE id=?');
            $stmt->execute([$discount, $end, $pid]);
        }
        $pdo->commit();
        ok(['id' => $id], $action === 'create' ? 'Flash sale created.' : 'Flash sale updated.');
    } catch (Throwable $e) {
        $pdo->rollBack();
        fail($e->getMessage(), 400);
    }
}

if ($action === 'toggle') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $status = clean_string($data['status'] ?? 'active', 30);
    $stmt = db()->prepare('UPDATE flash_sales SET status=? WHERE id=?');
    $stmt->execute([$status, $id]);
    ok([], 'Flash sale status updated.');
}

if ($action === 'delete') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $stmt = db()->prepare('UPDATE flash_sales SET status="deleted" WHERE id=?');
    $stmt->execute([$id]);
    ok([], 'Flash sale deleted.');
}

fail('Unknown flash sale action.', 404);
