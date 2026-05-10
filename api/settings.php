<?php
require_once __DIR__ . '/bootstrap.php';

$action = action_name();
$data = request_data();

if ($action === 'public') {
    ok(['settings' => [
        'storeName' => get_setting('store_name', 'HaatHub'),
        'currency' => get_setting('currency', 'BDT'),
        'freeShippingThreshold' => get_setting('free_shipping_threshold', 1000),
        'standardShippingCost' => get_setting('standard_shipping_cost', 60),
    ]]);
}

require_admin();

if ($action === 'get') {
    $rows = db()->query('SELECT setting_key, setting_value, setting_type FROM settings ORDER BY setting_key')->fetchAll();
    $settings = [];
    foreach ($rows as $row) {
        $value = $row['setting_value'];
        if ($row['setting_type'] === 'json') $value = json_decode($value, true);
        if ($row['setting_type'] === 'number') $value = (float)$value;
        if ($row['setting_type'] === 'boolean') $value = in_array($value, ['1','true','yes'], true);
        $settings[$row['setting_key']] = $value;
    }
    ok(['settings' => $settings]);
}

if ($action === 'update') {
    require_method(['POST']);
    $settings = $data['settings'] ?? $data;
    foreach ($settings as $key => $value) {
        if ($key === 'action') continue;
        $type = is_array($value) ? 'json' : (is_bool($value) ? 'boolean' : (is_numeric($value) ? 'number' : 'string'));
        set_setting($key, $value, $type);
    }
    ok([], 'Settings saved.');
}

fail('Unknown settings action.', 404);
