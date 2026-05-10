<?php
function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function ok(array $data = [], string $message = 'OK'): void
{
    json_response(['success' => true, 'message' => $message, 'data' => $data]);
}

function fail(string $message, int $status = 400, array $errors = []): void
{
    json_response(['success' => false, 'message' => $message, 'errors' => $errors], $status);
}

function request_data(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($contentType, 'application/json') !== false) {
        $raw = file_get_contents('php://input');
        $json = json_decode($raw, true);
        return is_array($json) ? $json : [];
    }
    return array_merge($_GET, $_POST);
}

function method_is(string $method): bool
{
    return strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') === strtoupper($method);
}

function require_method(array $allowed): void
{
    $current = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
    $allowed = array_map('strtoupper', $allowed);
    if (!in_array($current, $allowed, true)) {
        fail('Method not allowed.', 405);
    }
}
