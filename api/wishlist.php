<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();
$user = require_login();

function wishlist_ids(int $userId): array
{
    $stmt = db()->prepare('SELECT product_id FROM wishlist_items WHERE user_id = ? ORDER BY created_at DESC');
    $stmt->execute([$userId]);
    return array_map('strval', $stmt->fetchAll(PDO::FETCH_COLUMN));
}

if ($action === 'list') {
    $ids = wishlist_ids((int)$user['id']);
    ok(['wishlist' => $ids]);
}

if ($action === 'toggle') {
    require_method(['POST']);
    $productId = (int)($data['product_id'] ?? $data['productId'] ?? 0);
    if ($productId <= 0) fail('Product ID is required.');
    $stmt = db()->prepare('SELECT id FROM wishlist_items WHERE user_id = ? AND product_id = ?');
    $stmt->execute([(int)$user['id'], $productId]);
    if ($stmt->fetchColumn()) {
        $stmt = db()->prepare('DELETE FROM wishlist_items WHERE user_id = ? AND product_id = ?');
        $stmt->execute([(int)$user['id'], $productId]);
        ok(['wishlist' => wishlist_ids((int)$user['id']), 'active' => false], 'Removed from wishlist.');
    } else {
        $stmt = db()->prepare('INSERT IGNORE INTO wishlist_items (user_id, product_id) VALUES (?, ?)');
        $stmt->execute([(int)$user['id'], $productId]);
        ok(['wishlist' => wishlist_ids((int)$user['id']), 'active' => true], 'Added to wishlist.');
    }
}

fail('Unknown wishlist action.', 404);
