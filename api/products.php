<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

if ($action === 'categories') {
    $rows = db()->query('SELECT id, name, slug FROM categories WHERE status = "active" ORDER BY sort_order, name')->fetchAll();
    ok(['categories' => $rows]);
}

if ($action === 'list') {
    $where = ['p.status != "deleted"'];
    $params = [];
    if (!empty($_GET['category']) && $_GET['category'] !== 'all') {
        $where[] = 'c.name = ?';
        $params[] = $_GET['category'];
    }
    if (!empty($_GET['q'])) {
        $where[] = '(p.name LIKE ? OR p.description LIKE ? OR c.name LIKE ?)';
        $term = '%' . $_GET['q'] . '%';
        $params[] = $term; $params[] = $term; $params[] = $term;
    }
    if (isset($_GET['flash_sale']) && $_GET['flash_sale'] === '1') {
        $where[] = 'p.is_flash_sale = 1';
    }
    $sql = 'SELECT p.*, c.name AS category_name FROM products p LEFT JOIN categories c ON c.id = p.category_id WHERE ' . implode(' AND ', $where);
    $sort = $_GET['sort'] ?? 'popularity';
    $sql .= match ($sort) {
        'price-low' => ' ORDER BY p.price ASC',
        'price-high' => ' ORDER BY p.price DESC',
        'rating' => ' ORDER BY p.rating DESC',
        'discount' => ' ORDER BY p.discount_percent DESC',
        default => ' ORDER BY p.reviews_count DESC, p.created_at DESC',
    };
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    $products = array_map('product_row_to_frontend', $stmt->fetchAll());
    ok(['products' => $products]);
}

if ($action === 'get') {
    $id = (int)($data['id'] ?? $_GET['id'] ?? 0);
    $stmt = db()->prepare('SELECT p.*, c.name AS category_name FROM products p LEFT JOIN categories c ON c.id = p.category_id WHERE p.id = ? AND p.status != "deleted" LIMIT 1');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) fail('Product not found.', 404);
    ok(['product' => product_row_to_frontend($row)]);
}

if (in_array($action, ['create', 'update', 'delete'], true)) {
    require_admin();
}

if ($action === 'create' || $action === 'update') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    $name = clean_string($data['name'] ?? '', 180);
    $categoryId = (int)($data['category_id'] ?? 0);
    if (!$categoryId && !empty($data['category'])) $categoryId = category_id_by_name($data['category']);
    $price = (float)($data['price'] ?? 0);
    $oldPrice = (float)($data['old_price'] ?? $data['oldPrice'] ?? 0);
    $discount = (int)($data['discount_percent'] ?? $data['discount'] ?? 0);
    $stock = (int)($data['stock'] ?? 0);
    $imageUrl = clean_string($data['image_url'] ?? $data['image'] ?? '', 500);
    $description = trim((string)($data['description'] ?? ''));
    $specs = $data['specs'] ?? [];
    if (is_string($specs)) $specs = array_filter(array_map('trim', explode(',', $specs)));
    $specsJson = json_encode(array_values($specs), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $rating = (float)($data['rating'] ?? 4.5);
    $reviews = (int)($data['reviews_count'] ?? $data['reviews'] ?? 0);
    $isFlash = !empty($data['is_flash_sale']) || !empty($data['isFlashSale']);
    $flashEnd = $data['flash_sale_end_time'] ?? $data['flashSaleEndTime'] ?? null;
    $status = clean_string($data['status'] ?? 'active', 30);

    if ($name === '' || !$categoryId || $price <= 0) fail('Product name, category and price are required.');

    if ($action === 'create') {
        $stmt = db()->prepare('INSERT INTO products (category_id, name, slug, description, specs, price, old_price, discount_percent, stock, image_url, rating, reviews_count, is_flash_sale, flash_sale_end_time, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([$categoryId, $name, slugify($name), $description, $specsJson, $price, $oldPrice, $discount, $stock, $imageUrl, $rating, $reviews, $isFlash ? 1 : 0, $flashEnd, $status]);
        $id = (int)db()->lastInsertId();
    } else {
        if ($id <= 0) fail('Product ID is required.');
        $stmt = db()->prepare('UPDATE products SET category_id=?, name=?, slug=?, description=?, specs=?, price=?, old_price=?, discount_percent=?, stock=?, image_url=?, rating=?, reviews_count=?, is_flash_sale=?, flash_sale_end_time=?, status=? WHERE id=?');
        $stmt->execute([$categoryId, $name, slugify($name), $description, $specsJson, $price, $oldPrice, $discount, $stock, $imageUrl, $rating, $reviews, $isFlash ? 1 : 0, $flashEnd, $status, $id]);
    }

    $stmt = db()->prepare('SELECT p.*, c.name AS category_name FROM products p LEFT JOIN categories c ON c.id=p.category_id WHERE p.id=?');
    $stmt->execute([$id]);
    ok(['product' => product_row_to_frontend($stmt->fetch())], $action === 'create' ? 'Product created.' : 'Product updated.');
}

if ($action === 'delete') {
    require_method(['POST']);
    $id = (int)($data['id'] ?? 0);
    if ($id <= 0) fail('Product ID is required.');
    $stmt = db()->prepare('UPDATE products SET status="deleted" WHERE id=?');
    $stmt->execute([$id]);
    ok([], 'Product deleted.');
}

fail('Unknown products action.', 404);
