<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

function conversation_array(array $row, bool $withMessages = false): array
{
    $conv = [
        'id' => (int)$row['id'],
        'subject' => $row['subject'],
        'orderId' => $row['order_number'] ?? null,
        'status' => $row['status'],
        'unreadByAdmin' => (int)($row['unread_by_admin'] ?? 0),
        'unreadByUser' => (int)($row['unread_by_user'] ?? 0),
        'customer' => [
            'id' => (int)$row['user_id'],
            'name' => $row['customer_name'] ?? $row['user_name'] ?? 'Customer',
            'email' => $row['customer_email'] ?? $row['email'] ?? ''
        ],
        'lastMessage' => $row['last_message'] ?? '',
        'date' => $row['updated_at'] ?? $row['created_at']
    ];
    if ($withMessages) $conv['messages'] = conversation_messages((int)$row['id']);
    return $conv;
}

function conversation_messages(int $conversationId): array
{
    $stmt = db()->prepare('SELECT m.*, u.name AS sender_name FROM messages m LEFT JOIN users u ON u.id=m.sender_id WHERE conversation_id = ? ORDER BY created_at ASC');
    $stmt->execute([$conversationId]);
    return array_map(function($m) {
        return [
            'id' => (int)$m['id'],
            'sender' => $m['sender_type'],
            'senderName' => $m['sender_name'] ?? ucfirst($m['sender_type']),
            'text' => $m['body'],
            'timestamp' => $m['created_at']
        ];
    }, $stmt->fetchAll());
}

if ($action === 'list') {
    $user = require_login();
    if ($user['role'] === 'admin' && !empty($_GET['admin'])) {
        $sql = 'SELECT c.*, u.name AS customer_name, u.email AS customer_email, o.order_number,
                (SELECT body FROM messages m WHERE m.conversation_id=c.id ORDER BY m.created_at DESC LIMIT 1) AS last_message
                FROM conversations c LEFT JOIN users u ON u.id=c.user_id LEFT JOIN orders o ON o.id=c.order_id ORDER BY c.updated_at DESC';
        $stmt = db()->query($sql);
    } else {
        $stmt = db()->prepare('SELECT c.*, u.name AS customer_name, u.email AS customer_email, o.order_number,
                (SELECT body FROM messages m WHERE m.conversation_id=c.id ORDER BY m.created_at DESC LIMIT 1) AS last_message
                FROM conversations c LEFT JOIN users u ON u.id=c.user_id LEFT JOIN orders o ON o.id=c.order_id WHERE c.user_id=? ORDER BY c.updated_at DESC');
        $stmt->execute([(int)$user['id']]);
    }
    $rows = $stmt->fetchAll();
    ok(['conversations' => array_map('conversation_array', $rows)]);
}

if ($action === 'thread') {
    $user = require_login();
    $id = (int)($data['id'] ?? $_GET['id'] ?? 0);
    $where = $user['role'] === 'admin' ? 'c.id = ?' : 'c.id = ? AND c.user_id = ?';
    $params = $user['role'] === 'admin' ? [$id] : [$id, (int)$user['id']];
    $stmt = db()->prepare('SELECT c.*, u.name AS customer_name, u.email AS customer_email, o.order_number FROM conversations c LEFT JOIN users u ON u.id=c.user_id LEFT JOIN orders o ON o.id=c.order_id WHERE ' . $where . ' LIMIT 1');
    $stmt->execute($params);
    $row = $stmt->fetch();
    if (!$row) fail('Conversation not found.', 404);
    if ($user['role'] === 'admin') db()->prepare('UPDATE conversations SET unread_by_admin = 0 WHERE id=?')->execute([$id]);
    else db()->prepare('UPDATE conversations SET unread_by_user = 0 WHERE id=?')->execute([$id]);
    ok(['conversation' => conversation_array($row, true)]);
}

if ($action === 'send') {
    require_method(['POST']);
    $user = require_login();
    $conversationId = (int)($data['conversation_id'] ?? 0);
    $subject = clean_string($data['subject'] ?? 'Customer Support', 180);
    $body = trim((string)($data['message'] ?? $data['body'] ?? ''));
    $orderId = !empty($data['order_id']) ? (int)$data['order_id'] : null;
    if ($body === '') fail('Message cannot be empty.');

    $pdo = db();
    $pdo->beginTransaction();
    try {
        if ($conversationId <= 0) {
            $stmt = $pdo->prepare('INSERT INTO conversations (user_id, order_id, subject, status, unread_by_admin) VALUES (?, ?, ?, "open", 1)');
            $stmt->execute([(int)$user['id'], $orderId, $subject]);
            $conversationId = (int)$pdo->lastInsertId();
        } else {
            $where = $user['role'] === 'admin' ? 'id=?' : 'id=? AND user_id=?';
            $params = $user['role'] === 'admin' ? [$conversationId] : [$conversationId, (int)$user['id']];
            $stmt = $pdo->prepare('SELECT id FROM conversations WHERE ' . $where);
            $stmt->execute($params);
            if (!$stmt->fetchColumn()) throw new RuntimeException('Conversation not found.');
        }
        $senderType = $user['role'] === 'admin' ? 'admin' : 'customer';
        $stmt = $pdo->prepare('INSERT INTO messages (conversation_id, sender_id, sender_type, body) VALUES (?, ?, ?, ?)');
        $stmt->execute([$conversationId, (int)$user['id'], $senderType, $body]);
        $unreadField = $senderType === 'admin' ? 'unread_by_user' : 'unread_by_admin';
        $stmt = $pdo->prepare("UPDATE conversations SET updated_at=NOW(), $unreadField = $unreadField + 1 WHERE id=?");
        $stmt->execute([$conversationId]);
        $pdo->commit();
        ok(['conversationId' => $conversationId, 'messages' => conversation_messages($conversationId)], 'Message sent.');
    } catch (Throwable $e) {
        $pdo->rollBack();
        fail($e->getMessage(), 400);
    }
}

fail('Unknown messages action.', 404);
