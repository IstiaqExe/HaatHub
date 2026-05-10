<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
require_admin();

if ($action === 'dashboard' || $action === 'analytics') {
    $pdo = db();
    $totalOrders = (int)$pdo->query('SELECT COUNT(*) FROM orders')->fetchColumn();
    $totalRevenue = (float)$pdo->query('SELECT COALESCE(SUM(total_amount),0) FROM orders WHERE status != "cancelled"')->fetchColumn();
    $totalProducts = (int)$pdo->query('SELECT COUNT(*) FROM products WHERE status != "deleted"')->fetchColumn();
    $pendingOrders = (int)$pdo->query('SELECT COUNT(*) FROM orders WHERE status = "pending"')->fetchColumn();
    $lowStock = $pdo->query('SELECT id, name, stock FROM products WHERE stock <= 12 AND status="active" ORDER BY stock ASC LIMIT 5')->fetchAll();
    $recentOrdersStmt = $pdo->query('SELECT * FROM orders ORDER BY created_at DESC LIMIT 5');
    $recentOrders = array_map('order_to_admin_metric', $recentOrdersStmt->fetchAll());
    $statusRows = $pdo->query('SELECT status, COUNT(*) AS count FROM orders GROUP BY status')->fetchAll();
    $statusCounts = [];
    foreach ($statusRows as $row) $statusCounts[$row['status']] = (int)$row['count'];
    $categoryRows = $pdo->query('SELECT c.name, COALESCE(SUM(oi.total_price),0) AS revenue FROM categories c LEFT JOIN products p ON p.category_id=c.id LEFT JOIN order_items oi ON oi.product_id=p.id GROUP BY c.id, c.name ORDER BY revenue DESC')->fetchAll();
    ok([
        'stats' => [
            'totalOrders' => $totalOrders,
            'totalRevenue' => $totalRevenue,
            'totalProducts' => $totalProducts,
            'pendingOrders' => $pendingOrders,
            'averageOrderValue' => $totalOrders ? round($totalRevenue / $totalOrders, 2) : 0,
            'conversionRate' => 3.2,
            'unreadMessages' => (int)$pdo->query('SELECT COALESCE(SUM(unread_by_admin),0) FROM conversations')->fetchColumn()
        ],
        'statusCounts' => $statusCounts,
        'lowStock' => $lowStock,
        'recentOrders' => $recentOrders,
        'categoryPerformance' => $categoryRows,
        'weeklySales' => [12000, 19000, 15000, 22000, 28000, 32000, 24000],
        'monthlyRevenue' => [145000, 165000, 190000, 177000, 215000, 245000],
        'customerAcquisition' => [
            'new' => [45, 52, 61, 58, 67, 74],
            'returning' => [75, 91, 103, 95, 122, 137]
        ]
    ]);
}

if ($action === 'summary') {
    ok([]);
}

fail('Unknown admin action.', 404);

function order_to_admin_metric(array $o): array
{
    return [
        'id' => $o['order_number'],
        'dbId' => (int)$o['id'],
        'customer' => ['name' => $o['customer_name'], 'email' => $o['customer_email'], 'phone' => $o['customer_phone']],
        'total' => (float)$o['total_amount'],
        'status' => $o['status'],
        'paymentMethod' => $o['payment_method'],
        'date' => $o['created_at']
    ];
}
