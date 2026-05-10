<?php
// HaatHub configuration for XAMPP / localhost.
// Update these values only if your MySQL username/password/database name is different.

define('APP_NAME', 'HaatHub');
define('APP_URL', 'http://localhost/haathub_php_mysql_xampp');
define('DB_HOST', '127.0.0.1');
define('DB_PORT', '3306');
define('DB_NAME', 'haathub_db');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

define('UPLOAD_DIR', __DIR__ . '/../assets/uploads');
define('UPLOAD_URL', 'assets/uploads');

if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.use_strict_mode', '1');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');
