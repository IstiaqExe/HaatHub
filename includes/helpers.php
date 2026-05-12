<?php
require_once __DIR__ . '/../config/database.php';

function clean_string(?string $value, int $max = 255): string
{
    $value = trim((string)$value);
    $value = preg_replace('/\s+/', ' ', $value);
    return mb_substr($value, 0, $max);
}

function slugify(string $text): string
{
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9]+/i', '-', $text);
    return trim($text, '-') ?: uniqid('item-');
}

function unique_slug(string $table, string $base, int $ignoreId = 0): string
{
    $slug = slugify($base);
    $candidate = $slug;
    $i = 2;
    while (true) {
        $sql = "SELECT id FROM {$table} WHERE slug = ?" . ($ignoreId > 0 ? ' AND id != ?' : '') . ' LIMIT 1';
        $stmt = db()->prepare($sql);
        $params = $ignoreId > 0 ? [$candidate, $ignoreId] : [$candidate];
        $stmt->execute($params);
        if (!$stmt->fetchColumn()) return $candidate;
        $candidate = $slug . '-' . $i++;
    }
}

function normalize_datetime($value): ?string
{
    $value = trim((string)$value);
    if ($value === '') return null;
    $value = str_replace('T', ' ', $value);
    try {
        $dt = new DateTime($value);
        return $dt->format('Y-m-d H:i:s');
    } catch (Throwable $e) {
        return null;
    }
}

function product_row_to_frontend(array $row): array
{
    $specs = [];
    if (!empty($row['specs'])) {
        $decoded = json_decode($row['specs'], true);
        $specs = is_array($decoded) ? $decoded : array_filter(array_map('trim', explode(',', $row['specs'])));
    }

    $basePrice = isset($row['price']) ? (float)$row['price'] : 0;
    $storedOldPrice = isset($row['old_price']) ? (float)$row['old_price'] : 0;
    $salePrice = isset($row['sale_price']) && $row['sale_price'] !== null ? (float)$row['sale_price'] : null;
    $activeSaleDiscount = isset($row['active_sale_discount']) && $row['active_sale_discount'] !== null ? (int)$row['active_sale_discount'] : null;
    $activeSaleEnd = $row['active_sale_end_time'] ?? null;
    $hasActiveSale = $salePrice !== null && $activeSaleEnd !== null;

    $effectivePrice = $hasActiveSale ? $salePrice : $basePrice;
    $effectiveOldPrice = $hasActiveSale ? $basePrice : $storedOldPrice;
    $effectiveDiscount = $hasActiveSale ? (int)$activeSaleDiscount : (isset($row['discount_percent']) ? (int)$row['discount_percent'] : 0);

    return [
        'id' => (string)$row['id'],
        'name' => $row['name'],
        'slug' => $row['slug'] ?? '',
        'category' => $row['category_name'] ?? $row['category'] ?? 'Uncategorized',
        'categoryId' => isset($row['category_id']) ? (int)$row['category_id'] : null,
        'price' => $effectivePrice,
        'basePrice' => $basePrice,
        'oldPrice' => $effectiveOldPrice,
        'discount' => $effectiveDiscount,
        'salePrice' => $salePrice,
        'image' => $row['image_url'] ?: 'assets/haathub-logo.png',
        'rating' => isset($row['rating']) ? (float)$row['rating'] : 0,
        'reviews' => isset($row['reviews_count']) ? (int)$row['reviews_count'] : 0,
        'stock' => isset($row['stock']) ? (int)$row['stock'] : 0,
        'description' => $row['description'] ?? '',
        'specs' => array_values($specs),
        'isFlashSale' => $hasActiveSale || !empty($row['is_flash_sale']),
        'flashSaleEndTime' => $activeSaleEnd ?: ($row['flash_sale_end_time'] ?? null),
        'status' => $row['status'] ?? 'active'
    ];
}

function active_sale_join_sql(): string
{
    return ' LEFT JOIN (
        SELECT fsp.product_id, MIN(fsp.sale_price) AS sale_price, MAX(fs.discount_percent) AS active_sale_discount, MAX(fs.end_time) AS active_sale_end_time, MAX(fs.id) AS active_flash_sale_id
        FROM flash_sale_products fsp
        JOIN flash_sales fs ON fs.id = fsp.flash_sale_id
        WHERE fs.status = "active" AND fs.start_time <= NOW() AND fs.end_time >= NOW()
        GROUP BY fsp.product_id
    ) active_sale ON active_sale.product_id = p.id ';
}

function get_setting(string $key, $default = null)
{
    $stmt = db()->prepare('SELECT setting_value, setting_type FROM settings WHERE setting_key = ? LIMIT 1');
    $stmt->execute([$key]);
    $row = $stmt->fetch();
    if (!$row) return $default;
    if ($row['setting_type'] === 'json') {
        $decoded = json_decode($row['setting_value'], true);
        return $decoded === null ? $default : $decoded;
    }
    if ($row['setting_type'] === 'number') return (float)$row['setting_value'];
    if ($row['setting_type'] === 'boolean') return in_array($row['setting_value'], ['1', 'true', 'yes'], true);
    return $row['setting_value'];
}

function set_setting(string $key, $value, string $type = 'string'): void
{
    if ($type === 'json') $value = json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($type === 'boolean') $value = $value ? '1' : '0';
    $stmt = db()->prepare('INSERT INTO settings (setting_key, setting_value, setting_type) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), setting_type = VALUES(setting_type)');
    $stmt->execute([$key, (string)$value, $type]);
}

function next_order_number(): string
{
    return 'ORD-' . date('Y') . '-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 8));
}

function category_id_by_name(string $name): ?int
{
    $stmt = db()->prepare('SELECT id FROM categories WHERE name = ? LIMIT 1');
    $stmt->execute([$name]);
    $id = $stmt->fetchColumn();
    if ($id) return (int)$id;
    $stmt = db()->prepare('INSERT INTO categories (name, slug) VALUES (?, ?)');
    $stmt->execute([$name, unique_slug('categories', $name)]);
    return (int)db()->lastInsertId();
}

function refresh_product_flash_flags(?PDO $pdo = null): void
{
    $pdo = $pdo ?: db();
    $pdo->exec('UPDATE products SET is_flash_sale = 0, flash_sale_end_time = NULL');
    $pdo->exec('UPDATE products p
        JOIN flash_sale_products fsp ON fsp.product_id = p.id
        JOIN flash_sales fs ON fs.id = fsp.flash_sale_id
        SET p.is_flash_sale = 1, p.flash_sale_end_time = fs.end_time
        WHERE fs.status = "active" AND fs.start_time <= NOW() AND fs.end_time >= NOW()');
}
