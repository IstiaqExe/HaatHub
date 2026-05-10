<?php
require_once __DIR__ . '/config/config.php';

$message = '';
$success = false;
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $host = $_POST['host'] ?? DB_HOST;
    $port = $_POST['port'] ?? DB_PORT;
    $user = $_POST['user'] ?? DB_USER;
    $pass = $_POST['pass'] ?? DB_PASS;
    $sqlFile = __DIR__ . '/database/haathub.sql';

    try {
        if (!is_file($sqlFile)) throw new RuntimeException('SQL file not found: database/haathub.sql');
        $pdo = new PDO("mysql:host={$host};port={$port};charset=utf8mb4", $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);

        $sql = file_get_contents($sqlFile);
        $sql = preg_replace('/^\s*--.*$/m', '', $sql);
        $statements = array_filter(array_map('trim', preg_split('/;\s*\n/', $sql)));
        foreach ($statements as $statement) {
            if ($statement === '') continue;
            $pdo->exec($statement);
        }
        $success = true;
        $message = 'Database installed successfully. You can now open the website.';
    } catch (Throwable $e) {
        $errors[] = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Install HaatHub</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" type="image/png" href="assets/haathub-logo.png">
    <style>
        body{background:#0f1b2d;color:#0f172a;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
        .install-card{width:min(720px,100%);background:white;border-radius:24px;box-shadow:0 25px 50px rgba(0,0,0,.25);padding:32px}
        .install-logo{height:72px;width:auto;margin-bottom:12px}.install-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.install-grid .form-group{margin-bottom:0}.install-actions{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}.install-alert{border-radius:14px;padding:14px 16px;margin:18px 0}.install-ok{background:#ecfdf5;color:#047857;border:1px solid #a7f3d0}.install-error{background:#fef2f2;color:#b91c1c;border:1px solid #fecaca}.install-code{background:#f1f5f9;border-radius:10px;padding:12px;font-family:monospace;font-size:13px;overflow:auto}@media(max-width:640px){.install-grid{grid-template-columns:1fr}}
    </style>
</head>
<body>
    <main class="install-card">
        <img src="assets/haathub-logo.png" alt="HaatHub" class="install-logo">
        <h1>Install HaatHub Database</h1>
        <p>This installer creates <strong>haathub_db</strong>, all tables, demo products, users, orders, messages, flash sales and settings.</p>
        <?php if ($success): ?>
            <div class="install-alert install-ok"><?= htmlspecialchars($message) ?></div>
            <div class="install-code">
                Admin: admin@haathub.com / admin123<br>
                User: ahmed@example.com / user123
            </div>
            <div class="install-actions">
                <a class="btn btn-primary" href="index.php">Open Website</a>
                <a class="btn btn-outline" href="database/haathub.sql">View SQL</a>
            </div>
        <?php else: ?>
            <?php foreach ($errors as $error): ?><div class="install-alert install-error"><?= htmlspecialchars($error) ?></div><?php endforeach; ?>
            <form method="post">
                <div class="install-grid">
                    <div class="form-group"><label>MySQL Host</label><input name="host" value="<?= htmlspecialchars(DB_HOST) ?>" required></div>
                    <div class="form-group"><label>MySQL Port</label><input name="port" value="<?= htmlspecialchars(DB_PORT) ?>" required></div>
                    <div class="form-group"><label>MySQL User</label><input name="user" value="<?= htmlspecialchars(DB_USER) ?>" required></div>
                    <div class="form-group"><label>MySQL Password</label><input name="pass" type="password" value="<?= htmlspecialchars(DB_PASS) ?>"></div>
                </div>
                <div class="install-actions">
                    <button class="btn btn-primary" type="submit">Create Database & Seed Data</button>
                    <a class="btn btn-outline" href="index.php">Open Website</a>
                </div>
            </form>
            <p style="margin-top:18px;color:#64748b">Default XAMPP MySQL is usually <strong>root</strong> with a blank password.</p>
        <?php endif; ?>
    </main>
</body>
</html>
