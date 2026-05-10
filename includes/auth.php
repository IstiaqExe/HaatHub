<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/response.php';

function current_user(): ?array
{
    if (empty($_SESSION['user_id'])) return null;
    static $cached = null;
    if ($cached !== null && (int)$cached['id'] === (int)$_SESSION['user_id']) return $cached;

    $stmt = db()->prepare('SELECT id, name, email, phone, role, status, created_at FROM users WHERE id = ? LIMIT 1');
    $stmt->execute([(int)$_SESSION['user_id']]);
    $user = $stmt->fetch();
    if (!$user || $user['status'] !== 'active') {
        unset($_SESSION['user_id']);
        return null;
    }
    $cached = $user;
    return $user;
}

function require_login(): array
{
    $user = current_user();
    if (!$user) fail('Login required.', 401);
    return $user;
}

function require_admin(): array
{
    $user = require_login();
    if (($user['role'] ?? '') !== 'admin') fail('Admin access required.', 403);
    return $user;
}

function login_user(array $user): void
{
    session_regenerate_id(true);
    $_SESSION['user_id'] = (int)$user['id'];
}

function logout_user(): void
{
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', $params['secure'] ?? false, $params['httponly'] ?? true);
    }
    session_destroy();
}
