-- HaatHub MySQL database for XAMPP
-- Import this file in phpMyAdmin, or visit install.php from your browser.

DROP DATABASE IF EXISTS haathub_db;
CREATE DATABASE haathub_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE haathub_db;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(40) NULL,
  address TEXT NULL,
  role ENUM('admin','user') NOT NULL DEFAULT 'user',
  status ENUM('active','inactive','blocked') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE categories (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL UNIQUE,
  slug VARCHAR(140) NOT NULL UNIQUE,
  sort_order INT NOT NULL DEFAULT 0,
  status ENUM('active','inactive') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE products (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category_id INT UNSIGNED NOT NULL,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  description TEXT NULL,
  specs JSON NULL,
  price DECIMAL(12,2) NOT NULL DEFAULT 0,
  old_price DECIMAL(12,2) NOT NULL DEFAULT 0,
  discount_percent INT NOT NULL DEFAULT 0,
  stock INT NOT NULL DEFAULT 0,
  image_url VARCHAR(700) NULL,
  rating DECIMAL(3,2) NOT NULL DEFAULT 0,
  reviews_count INT NOT NULL DEFAULT 0,
  is_flash_sale TINYINT(1) NOT NULL DEFAULT 0,
  flash_sale_end_time DATETIME NULL,
  status ENUM('active','inactive','deleted') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_products_category (category_id),
  INDEX idx_products_flash (is_flash_sale),
  INDEX idx_products_status (status),
  CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE cart_items (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_cart_user_product (user_id, product_id),
  CONSTRAINT fk_cart_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_cart_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE wishlist_items (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_wishlist_user_product (user_id, product_id),
  CONSTRAINT fk_wishlist_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_wishlist_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE orders (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(40) NOT NULL UNIQUE,
  user_id INT UNSIGNED NULL,
  customer_name VARCHAR(120) NOT NULL,
  customer_email VARCHAR(190) NOT NULL,
  customer_phone VARCHAR(40) NOT NULL,
  shipping_address TEXT NOT NULL,
  city VARCHAR(80) NULL,
  subtotal DECIMAL(12,2) NOT NULL DEFAULT 0,
  delivery_fee DECIMAL(12,2) NOT NULL DEFAULT 0,
  total_amount DECIMAL(12,2) NOT NULL DEFAULT 0,
  payment_method VARCHAR(40) NOT NULL DEFAULT 'COD',
  payment_status ENUM('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending',
  status ENUM('pending','confirmed','packed','shipped','delivered','cancelled') NOT NULL DEFAULT 'pending',
  notes TEXT NULL,
  delivered_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_orders_user (user_id),
  INDEX idx_orders_status (status),
  CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE order_items (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NULL,
  product_name VARCHAR(180) NOT NULL,
  unit_price DECIMAL(12,2) NOT NULL,
  quantity INT NOT NULL,
  total_price DECIMAL(12,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_order_items_order (order_id),
  CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE conversations (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  order_id INT UNSIGNED NULL,
  subject VARCHAR(180) NOT NULL,
  status ENUM('open','resolved','closed') NOT NULL DEFAULT 'open',
  unread_by_admin INT NOT NULL DEFAULT 0,
  unread_by_user INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_conversations_user (user_id),
  CONSTRAINT fk_conversations_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_conversations_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE messages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  conversation_id INT UNSIGNED NOT NULL,
  sender_id INT UNSIGNED NULL,
  sender_type ENUM('customer','admin','system') NOT NULL DEFAULT 'customer',
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_messages_conversation (conversation_id),
  CONSTRAINT fk_messages_conversation FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
  CONSTRAINT fk_messages_sender FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE flash_sales (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  discount_percent INT NOT NULL DEFAULT 0,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  status ENUM('scheduled','active','paused','ended','deleted') NOT NULL DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE flash_sale_products (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  flash_sale_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  sale_price DECIMAL(12,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_flash_product (flash_sale_id, product_id),
  CONSTRAINT fk_flash_sale_products_sale FOREIGN KEY (flash_sale_id) REFERENCES flash_sales(id) ON DELETE CASCADE,
  CONSTRAINT fk_flash_sale_products_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE settings (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(120) NOT NULL UNIQUE,
  setting_value TEXT NULL,
  setting_type ENUM('string','number','boolean','json') NOT NULL DEFAULT 'string',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users (name, email, password_hash, phone, address, role) VALUES
('HaatHub Admin', 'admin@haathub.com', '$2y$12$tconTQnPiEvQFw.G/duQQu7Li9lPH/BMQS2cpwMJGLifdE9NRAw6C', '+880 1711-123456', '123 Digital Bazar, Dhaka 1212, Bangladesh', 'admin'),
('Ahmed Khan', 'ahmed@example.com', '$2y$12$ahaiZqt0Gu0.cYuBgy7dr.cP3a.7hoFZ6DNG4wpoVu3B8YCW5Fgxm', '+880 1712-345678', 'Mirpur, Dhaka', 'user'),
('Fatima Rahman', 'fatima@example.com', '$2y$12$ahaiZqt0Gu0.cYuBgy7dr.cP3a.7hoFZ6DNG4wpoVu3B8YCW5Fgxm', '+880 1823-456789', 'Dhanmondi, Dhaka', 'user'),
('Kamal Hossain', 'kamal@example.com', '$2y$12$ahaiZqt0Gu0.cYuBgy7dr.cP3a.7hoFZ6DNG4wpoVu3B8YCW5Fgxm', '+880 1934-567890', 'Uttara, Dhaka', 'user'),
('Nazia Sultana', 'nazia@example.com', '$2y$12$ahaiZqt0Gu0.cYuBgy7dr.cP3a.7hoFZ6DNG4wpoVu3B8YCW5Fgxm', '+880 1745-678901', 'Banani, Dhaka', 'user'),
('Rifat Ahmed', 'rifat@example.com', '$2y$12$ahaiZqt0Gu0.cYuBgy7dr.cP3a.7hoFZ6DNG4wpoVu3B8YCW5Fgxm', '+880 1856-789012', 'Chattogram', 'user');

INSERT INTO categories (name, slug, sort_order) VALUES
('Electronics', 'electronics', 1),
('Fashion', 'fashion', 2),
('Home & Living', 'home-living', 3),
('Beauty', 'beauty', 4),
('Sports', 'sports', 5),
('Books', 'books', 6);

INSERT INTO products (category_id, name, slug, description, specs, price, old_price, discount_percent, stock, image_url, rating, reviews_count, is_flash_sale, flash_sale_end_time) VALUES
(1, 'Premium Wireless Headphones', 'premium-wireless-headphones', 'Crystal-clear wireless headphones with deep bass, soft ear cups and long battery life.', JSON_ARRAY('Active noise reduction','30-hour battery life','Bluetooth 5.3','Fast charging','Soft cushions'), 7999, 12999, 38, 45, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&h=700&fit=crop', 4.8, 2808, 1, DATE_ADD(NOW(), INTERVAL 2 DAY)),
(1, 'Smart Watch Series 7', 'smart-watch-series-7', 'Modern smartwatch with health tracking, notifications and water resistance.', JSON_ARRAY('Heart-rate tracking','Sleep monitoring','Water resistant','7-day battery','Bluetooth calling'), 15999, 22999, 30, 23, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=700&fit=crop', 4.7, 6804, 1, DATE_ADD(NOW(), INTERVAL 2 DAY)),
(2, 'Designer Leather Bag', 'designer-leather-bag', 'Elegant designer leather bag with spacious compartments and premium finish.', JSON_ARRAY('Premium leather','Adjustable strap','Multiple compartments','Dust bag included'), 8999, 0, 0, 67, 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&h=700&fit=crop', 4.6, 1420, 0, NULL),
(5, 'Minimalist Running Shoes', 'minimalist-running-shoes', 'Lightweight sports shoes built for comfort, grip and everyday use.', JSON_ARRAY('Breathable mesh','Cushioned sole','Anti-slip outsole','Lightweight design'), 4999, 7999, 38, 12, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&h=700&fit=crop', 4.7, 5184, 0, NULL),
(4, 'Luxury Skincare Set', 'luxury-skincare-set', 'Complete skincare set for daily glow and nourishment.', JSON_ARRAY('Cleanser','Serum','Moisturizer','Travel friendly'), 3499, 5999, 42, 38, 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&h=700&fit=crop', 4.5, 830, 1, DATE_ADD(NOW(), INTERVAL 2 DAY)),
(1, 'Digital Camera 4K', 'digital-camera-4k', 'High-resolution 4K camera for creators and travel photography.', JSON_ARRAY('4K video','24MP sensor','WiFi transfer','Two lenses supported'), 45999, 59999, 23, 8, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&h=700&fit=crop', 4.9, 940, 1, DATE_ADD(NOW(), INTERVAL 2 DAY)),
(3, 'Yoga Mat Premium', 'yoga-mat-premium', 'Non-slip premium yoga mat for home workout and meditation.', JSON_ARRAY('6mm thickness','Non-slip texture','Eco-friendly','Carry strap included'), 1299, 1999, 35, 72, 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=700&h=700&fit=crop', 4.6, 6144, 0, NULL),
(1, 'Portable Bluetooth Speaker', 'portable-bluetooth-speaker', 'Compact waterproof Bluetooth speaker with rich 360-degree sound.', JSON_ARRAY('Waterproof IPX7','12-hour battery','USB-C charging','360-degree audio'), 2499, 3999, 38, 55, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&h=700&fit=crop', 4.4, 1025, 0, NULL),
(2, 'Backpack Travel Pro', 'backpack-travel-pro', 'Durable backpack with laptop compartment and USB charging pass-through.', JSON_ARRAY('Laptop sleeve','USB port','Water resistant','Ergonomic back panel'), 2799, 3999, 30, 41, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&h=700&fit=crop', 4.5, 2980, 0, NULL),
(3, 'Coffee Maker Deluxe', 'coffee-maker-deluxe', 'Programmable coffee maker with grinder and thermal carafe.', JSON_ARRAY('Built-in grinder','12-cup capacity','Programmable timer','Auto shut-off'), 6499, 8999, 28, 34, 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=700&h=700&fit=crop', 4.7, 1670, 0, NULL),
(2, 'Luxury Sunglasses', 'luxury-sunglasses', 'Polarized sunglasses with UV protection and lightweight frame.', JSON_ARRAY('UV400 protection','Polarized lens','Lightweight frame','Case included'), 1499, 2499, 40, 134, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&h=700&fit=crop', 4.3, 760, 0, NULL),
(3, 'Air Purifier Smart', 'air-purifier-smart', 'Smart HEPA air purifier with app control and air quality sensor.', JSON_ARRAY('HEPA H13 filter','App control','Quiet operation','Covers 500 sq ft'), 9999, 13999, 29, 18, 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&h=700&fit=crop', 4.8, 1890, 0, NULL);

INSERT INTO orders (order_number, user_id, customer_name, customer_email, customer_phone, shipping_address, city, subtotal, delivery_fee, total_amount, payment_method, payment_status, status, delivered_at, created_at) VALUES
('ORD-2024-001', 2, 'Ahmed Khan', 'ahmed@example.com', '+880 1712-345678', 'Mirpur, Dhaka', 'Dhaka', 14497, 0, 14497, 'COD', 'pending', 'delivered', '2024-03-18 14:20:00', '2024-03-15 10:30:00'),
('ORD-2024-002', 3, 'Fatima Rahman', 'fatima@example.com', '+880 1823-456789', 'Dhanmondi, Dhaka', 'Dhaka', 15999, 0, 15999, 'COD', 'pending', 'shipped', NULL, '2024-03-18 09:15:00'),
('ORD-2024-003', 4, 'Kamal Hossain', 'kamal@example.com', '+880 1934-567890', 'Uttara, Dhaka', 'Dhaka', 11198, 0, 11198, 'COD', 'pending', 'packed', NULL, '2024-03-19 16:45:00'),
('ORD-2024-004', 5, 'Nazia Sultana', 'nazia@example.com', '+880 1745-678901', 'Banani, Dhaka', 'Dhaka', 3798, 0, 3798, 'COD', 'pending', 'confirmed', NULL, '2024-03-20 11:10:00'),
('ORD-2024-005', 6, 'Rifat Ahmed', 'rifat@example.com', '+880 1856-789012', 'Chattogram', 'Chattogram', 8548, 0, 8548, 'COD', 'pending', 'pending', NULL, '2024-03-21 08:55:00'),
('ORD-2024-006', 2, 'Ahmed Khan', 'ahmed@example.com', '+880 1712-345678', 'Mirpur, Dhaka', 'Dhaka', 4399, 0, 4399, 'COD', 'pending', 'pending', NULL, '2024-03-22 12:05:00');

INSERT INTO order_items (order_id, product_id, product_name, unit_price, quantity, total_price) VALUES
(1, 1, 'Premium Wireless Headphones', 7999, 1, 7999),
(1, 4, 'Minimalist Running Shoes', 4999, 1, 4999),
(1, 11, 'Luxury Sunglasses', 1499, 1, 1499),
(2, 2, 'Smart Watch Series 7', 15999, 1, 15999),
(3, 3, 'Designer Leather Bag', 8999, 1, 8999),
(3, 8, 'Portable Bluetooth Speaker', 2199, 1, 2199),
(4, 7, 'Yoga Mat Premium', 1299, 1, 1299),
(4, 11, 'Luxury Sunglasses', 1499, 1, 1499),
(5, 10, 'Coffee Maker Deluxe', 6499, 1, 6499),
(5, 7, 'Yoga Mat Premium', 2049, 1, 2049),
(6, 8, 'Portable Bluetooth Speaker', 2499, 1, 2499),
(6, 11, 'Luxury Sunglasses', 1499, 1, 1499);

INSERT INTO conversations (user_id, order_id, subject, status, unread_by_admin, unread_by_user, created_at, updated_at) VALUES
(2, 1, 'Order delivery query', 'open', 1, 0, '2024-03-15 10:15:00', '2024-03-15 10:30:00'),
(3, 2, 'Smart watch inquiry', 'resolved', 0, 0, '2024-03-18 15:30:00', '2024-03-18 15:45:00'),
(4, 3, 'Leather bag color', 'open', 1, 0, '2024-03-19 09:00:00', '2024-03-19 09:00:00'),
(5, 4, 'Payment question', 'open', 0, 1, '2024-03-20 16:20:00', '2024-03-20 16:20:00');

INSERT INTO messages (conversation_id, sender_id, sender_type, body, created_at) VALUES
(1, 2, 'customer', 'Hello, I have a question about my recent order.', '2024-03-15 10:15:00'),
(1, 1, 'admin', 'Hi Ahmed! I would be happy to help. What would you like to know?', '2024-03-15 10:20:00'),
(1, 2, 'customer', 'Can I change the delivery address for order ORD-2024-001?', '2024-03-15 10:30:00'),
(2, 3, 'customer', 'Is the smartwatch waterproof?', '2024-03-18 15:30:00'),
(2, 1, 'admin', 'Yes, it is water resistant for everyday use.', '2024-03-18 15:45:00'),
(3, 4, 'customer', 'Do you have the leather bag in brown color?', '2024-03-19 09:00:00'),
(4, 5, 'customer', 'Can I pay by bKash instead of COD?', '2024-03-20 16:20:00');

INSERT INTO flash_sales (name, discount_percent, start_time, end_time, status) VALUES
('Weekend Mega Sale', 30, DATE_ADD(NOW(), INTERVAL -1 DAY), DATE_ADD(NOW(), INTERVAL 2 DAY), 'active'),
('Spring Collection Launch', 25, DATE_ADD(NOW(), INTERVAL 4 DAY), DATE_ADD(NOW(), INTERVAL 6 DAY), 'scheduled');

INSERT INTO flash_sale_products (flash_sale_id, product_id, sale_price) VALUES
(1, 1, 5599.30),
(1, 2, 11199.30),
(1, 5, 2449.30),
(1, 6, 32199.30),
(2, 3, 6749.25),
(2, 4, 3749.25),
(2, 9, 2099.25);

INSERT INTO wishlist_items (user_id, product_id) VALUES
(2, 1), (2, 3), (3, 2);

INSERT INTO settings (setting_key, setting_value, setting_type) VALUES
('store_name', 'HaatHub', 'string'),
('store_email', 'admin@haathub.com', 'string'),
('store_phone', '+880 1711-123456', 'string'),
('store_address', '123 Digital Bazar, Dhaka 1212, Bangladesh', 'string'),
('store_description', 'Your Digital হাট - Bangladesh\'s premier online marketplace', 'string'),
('currency', 'BDT', 'string'),
('products_per_page', '12', 'number'),
('timezone', 'Asia/Dhaka', 'string'),
('standard_shipping_cost', '60', 'number'),
('express_shipping_cost', '120', 'number'),
('free_shipping_threshold', '1500', 'number'),
('payment_cod', '1', 'boolean'),
('payment_bkash', '1', 'boolean'),
('payment_nagad', '0', 'boolean'),
('payment_sslcommerz', '0', 'boolean'),
('notification_email_orders', '1', 'boolean'),
('notification_sms_orders', '0', 'boolean'),
('security_two_factor', '0', 'boolean'),
('security_session_timeout', '30', 'number');
