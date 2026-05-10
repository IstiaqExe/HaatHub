<?php
require_once __DIR__ . '/../includes/response.php';
require_once __DIR__ . '/../includes/helpers.php';
require_once __DIR__ . '/../includes/auth.php';

header('X-Content-Type-Options: nosniff');

set_exception_handler(function (Throwable $e) {
    error_log('[HaatHub API] ' . $e->getMessage() . "\n" . $e->getTraceAsString());
    fail('Server error. Check database connection/import and PHP error logs.', 500, ['detail' => $e->getMessage()]);
});

function action_name(): string
{
    $data = request_data();
    return $data['action'] ?? $_GET['action'] ?? 'list';
}
