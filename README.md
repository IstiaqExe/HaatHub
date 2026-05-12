# HaatHub PHP + MySQL Backend for XAMPP

This package converts HaatHub into a PHP/MySQL website that runs on XAMPP.

## Folder structure

```text
haathub_php_mysql_xampp/
├── api/                  # PHP API endpoints
├── assets/               # Logo and upload folder
├── config/               # Database/app configuration
├── css/                  # Website styling
├── database/             # MySQL schema and seed data
├── includes/             # Shared PHP helpers/auth/response files
├── js/                   # Frontend JavaScript
├── index.php             # Main website
└── install.php           # Browser database installer
```

## Fast setup with XAMPP

1. Start **Apache** and **MySQL** from XAMPP Control Panel.
2. Copy the folder `haathub_php_mysql_xampp` into your XAMPP `htdocs` folder.
3. Open this URL in your browser:
   `http://localhost/haathub_php_mysql_xampp/install.php`
4. Keep default credentials unless you changed MySQL:
   - Host: `127.0.0.1`
   - Port: `3306`
   - User: `root`
   - Password: blank
5. Click **Create Database & Seed Data**.
6. Open:
   `http://localhost/haathub_php_mysql_xampp/index.php`

## Manual database setup

You can also import this file in phpMyAdmin:

```text
database/haathub.sql
```

The SQL creates the database named:

```text
haathub_db
```

## Demo accounts

Admin panel:

```text
Email: admin@haathub.com
Password: admin123
```

Customer account:

```text
Email: ahmed@example.com
Password: user123
```

Other seeded users also use `user123`.

## Backend endpoints

- `api/auth.php` — login, register, logout, session user
- `api/products.php` — product/category list plus admin CRUD
- `api/cart.php` — cart list/add/update/remove/clear
- `api/wishlist.php` — wishlist toggle/list
- `api/orders.php` — create orders and admin order status updates
- `api/messages.php` — customer/admin conversations
- `api/admin.php` — dashboard and analytics metrics
- `api/flash_sales.php` — flash sale campaign management
- `api/settings.php` — store/payment/shipping/security settings

## Editing database settings

Open:

```text
config/config.php
```

Change these only if your XAMPP MySQL credentials differ:

```php
define('DB_HOST', '127.0.0.1');
define('DB_PORT', '3306');
define('DB_NAME', 'haathub_db');
define('DB_USER', 'root');
define('DB_PASS', '');
```

## Notes

- This project uses PDO prepared statements for database access.
- Passwords are stored with PHP `password_hash()`.
- Admin-only API actions require an authenticated admin session.
- The frontend has local fallback behavior, but live data comes from MySQL once the database is installed.

## Latest functionality audit/fixes

This ZIP includes a second-pass backend and admin-panel completion audit. The following areas were fixed or completed:

- Fixed SQL seed import issue caused by a duplicate seeded user email.
- Admin order details now open in a full modal with customer, phone, email, address, payment, item list, totals, timeline, notes and status update control.
- Admin can update order status directly from the order details modal.
- Flash sales now use real MySQL campaigns instead of demo-only cards.
- Admin can create, edit, pause/resume and delete flash-sale campaigns.
- Flash-sale product selection is saved in `flash_sale_products` and reflected in storefront pricing.
- Product management now supports add, edit and soft-delete from the admin panel.
- Settings tabs now save to the `settings` table instead of showing demo-only toast messages.
- Admin/customer message sending uses the backend API.
- Storefront message widget was fixed to prevent duplicate message API submissions.
- Product listing now respects active flash-sale pricing based on campaign start/end time.

If you installed an older version before this update, run `install.php` again or import `database/haathub.sql` again so the corrected schema/seed data is applied cleanly.
