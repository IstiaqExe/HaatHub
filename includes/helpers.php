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

function product_row_to_frontend(array $row): array
{
    $specs = [];
    if (!empty($row['specs'])) {
        $decoded = json_decode($row['specs'], true);
        $specs = is_array($decoded) ? $decoded : array_filter(array_map('trim', explode(',', $row['specs'])));
    }

    return [
        'id' => (string)$row['id'],
        'name' => $row['name'],
        'slug' => $row['slug'] ?? '',
        'category' => $row['category_name'] ?? $row['category'] ?? 'Uncategorized',
        'categoryId' => isset($row['category_id']) ? (int)$row['category_id'] : null,
        'price' => (float)$row['price'],
        'oldPrice' => isset($row['old_price']) ? (float)$row['old_price'] : 0,
        'discount' => isset($row['discount_percent']) ? (int)$row['discount_percent'] : 0,
        'image' => $row['image_url'] ?: 'assets/haathub-logo.png',
        'rating' => isset($row['rating']) ? (float)$row['rating'] : 0,
        'reviews' => isset($row['reviews_count']) ? (int)$row['reviews_count'] : 0,
        'stock' => isset($row['stock']) ? (int)$row['stock'] : 0,
        'description' => $row['description'] ?? '',
        'specs' => array_values($specs),
        'isFlashSale' => !empty($row['is_flash_sale']),
        'flashSaleEndTime' => $row['flash_sale_end_time'] ?? null,
        'status' => $row['status'] ?? 'active'
    ];
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
    $stmt->execute([$name, slugify($name)]);
    return (int)db()->lastInsertId();
}
