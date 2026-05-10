<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

if ($action === 'me') {
    $user = current_user();
    ok(['user' => $user, 'isLoggedIn' => (bool)$user]);
}

if ($action === 'logout') {
    require_method(['POST']);
    logout_user();
    ok([], 'Logged out successfully.');
}

if ($action === 'register') {
    require_method(['POST']);
    $name = clean_string($data['name'] ?? 'Customer', 120);
    $email = strtolower(clean_string($data['email'] ?? '', 190));
    $password = (string)($data['password'] ?? '');
    $phone = clean_string($data['phone'] ?? '', 30);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) fail('Valid email is required.');
    if (strlen($password) < 6) fail('Password must be at least 6 characters.');

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = db()->prepare('INSERT INTO users (name, email, password_hash, phone, role) VALUES (?, ?, ?, ?, "user")');
    try {
        $stmt->execute([$name, $email, $hash, $phone]);
    } catch (PDOException $e) {
        if ($e->getCode() === '23000') fail('Email is already registered.');
        throw $e;
    }
    $id = db()->lastInsertId();
    $stmt = db()->prepare('SELECT id, name, email, phone, role, status, created_at FROM users WHERE id = ?');
    $stmt->execute([$id]);
    $user = $stmt->fetch();
    login_user($user);
    ok(['user' => $user], 'Account created successfully.');
}

if ($action === 'login') {
    require_method(['POST']);
    $email = strtolower(clean_string($data['email'] ?? '', 190));
    $password = (string)($data['password'] ?? '');
    $role = clean_string($data['role'] ?? '', 20);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') fail('Email and password are required.');

    $stmt = db()->prepare('SELECT * FROM users WHERE email = ? AND status = "active" LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if (!$user || !password_verify($password, $user['password_hash'])) {
        fail('Invalid login credentials.', 401);
    }
    if ($role === 'admin' && $user['role'] !== 'admin') {
        fail('This account does not have admin access.', 403);
    }

    login_user($user);
    unset($user['password_hash']);
    ok(['user' => $user], 'Login successful.');
}

fail('Unknown auth action.', 404);
