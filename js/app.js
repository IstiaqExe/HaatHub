// ========================================
// DATA
// ========================================

let PRODUCTS_DATA = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3499,
    discount: 29,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 128,
    stock: 45,
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.",
    specs: ["Active Noise Cancellation", "30-hour battery life", "Bluetooth 5.0", "Premium leather cushions", "Foldable design"],
    isFlashSale: true,
    flashSaleEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 5999,
    oldPrice: 8999,
    discount: 33,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 256,
    stock: 28,
    description: "Stay connected with our latest smartwatch featuring health tracking, notifications, and 7-day battery life.",
    specs: ["Heart rate monitor", "Sleep tracking", "Water resistant", "GPS enabled", "7-day battery"],
    isFlashSale: true,
    flashSaleEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "3",
    name: "Designer Leather Bag",
    category: "Fashion",
    price: 3499,
    oldPrice: 4999,
    discount: 30,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 89,
    stock: 15,
    description: "Elegant genuine leather bag perfect for work or casual outings. Multiple compartments for organization.",
    specs: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Water resistant", "Lifetime warranty"],
    isFlashSale: false
  },
  {
    id: "4",
    name: "Professional Camera Kit",
    category: "Electronics",
    price: 45999,
    oldPrice: 59999,
    discount: 23,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 342,
    stock: 8,
    description: "Complete camera kit for professional photography. Includes body, lenses, and accessories.",
    specs: ["24MP sensor", "4K video", "Two lenses included", "Camera bag", "2-year warranty"],
    isFlashSale: true,
    flashSaleEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "5",
    name: "Running Shoes Pro",
    category: "Fashion",
    price: 1899,
    oldPrice: 2999,
    discount: 37,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 512,
    stock: 67,
    description: "Lightweight running shoes designed for maximum comfort and performance.",
    specs: ["Breathable mesh", "Cushioned sole", "Lightweight design", "Anti-slip grip", "Available in multiple sizes"],
    isFlashSale: false
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 198,
    stock: 92,
    description: "Take your music anywhere with this compact, waterproof Bluetooth speaker.",
    specs: ["12-hour battery", "Waterproof IPX7", "360° sound", "Compact design", "USB-C charging"],
    isFlashSale: true,
    flashSaleEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "7",
    name: "Luxury Sunglasses",
    category: "Fashion",
    price: 899,
    oldPrice: 1499,
    discount: 40,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 76,
    stock: 134,
    description: "Stylish sunglasses with UV protection and polarized lenses.",
    specs: ["UV400 protection", "Polarized lenses", "Lightweight frame", "Comes with case", "1-year warranty"],
    isFlashSale: false
  },
  {
    id: "8",
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 1599,
    oldPrice: 2299,
    discount: 30,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 423,
    stock: 58,
    description: "High-precision gaming mouse with customizable buttons and RGB lighting.",
    specs: ["16000 DPI", "Programmable buttons", "RGB lighting", "Wireless 2.4GHz", "50-hour battery"],
    isFlashSale: false
  },
  {
    id: "9",
    name: "Yoga Mat Premium",
    category: "Home & Living",
    price: 599,
    oldPrice: 999,
    discount: 40,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 234,
    stock: 156,
    description: "Non-slip yoga mat perfect for all types of exercises and meditation.",
    specs: ["6mm thickness", "Non-slip surface", "Eco-friendly material", "Easy to clean", "Carrying strap included"],
    isFlashSale: false
  },
  {
    id: "10",
    name: "Coffee Maker Deluxe",
    category: "Home & Living",
    price: 3299,
    oldPrice: 4599,
    discount: 28,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 167,
    stock: 34,
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    specs: ["Built-in grinder", "Programmable timer", "Thermal carafe", "12-cup capacity", "Auto shut-off"],
    isFlashSale: false
  },
  {
    id: "11",
    name: "Backpack Travel Pro",
    category: "Fashion",
    price: 1799,
    oldPrice: 2799,
    discount: 36,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 298,
    stock: 73,
    description: "Durable travel backpack with laptop compartment and USB charging port.",
    specs: ["Laptop compartment", "USB charging port", "Water resistant", "Multiple pockets", "Ergonomic design"],
    isFlashSale: false
  },
  {
    id: "12",
    name: "Air Purifier Smart",
    category: "Home & Living",
    price: 4999,
    oldPrice: 6999,
    discount: 29,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 189,
    stock: 41,
    description: "Smart air purifier with HEPA filter and app control for cleaner air at home.",
    specs: ["HEPA H13 filter", "App control", "Air quality sensor", "Quiet operation", "Covers 500 sq ft"],
    isFlashSale: true,
    flashSaleEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
  }
];

let ORDERS_DATA = [
  {
    id: "ORD-2024-001",
    customer: { name: "Ahmed Khan", email: "ahmed@example.com", phone: "+880 1712-345678" },
    items: [
      { productId: "1", quantity: 1, price: 2499 },
      { productId: "5", quantity: 2, price: 1899 }
    ],
    total: 6297,
    status: "delivered",
    paymentMethod: "COD",
    date: "2024-01-15T10:30:00Z",
    deliveryDate: "2024-01-18T14:20:00Z"
  },
  {
    id: "ORD-2024-002",
    customer: { name: "Fatima Rahman", email: "fatima@example.com", phone: "+880 1812-987654" },
    items: [
      { productId: "2", quantity: 1, price: 5999 }
    ],
    total: 5999,
    status: "shipped",
    paymentMethod: "COD",
    date: "2024-01-20T09:15:00Z"
  },
  {
    id: "ORD-2024-003",
    customer: { name: "Karim Hossain", email: "karim@example.com", phone: "+880 1912-234567" },
    items: [
      { productId: "4", quantity: 1, price: 45999 }
    ],
    total: 45999,
    status: "pending",
    paymentMethod: "COD",
    date: "2024-01-22T16:45:00Z"
  }
];

let MESSAGES_DATA = [
  {
    id: 1,
    customer: { name: "Ahmed Khan", email: "ahmed@example.com" },
    subject: "Order delivery query",
    messages: [
      { sender: "customer", text: "When will my order arrive?", timestamp: "2024-01-15T10:00:00Z" },
      { sender: "admin", text: "Your order will be delivered by tomorrow.", timestamp: "2024-01-15T10:30:00Z" }
    ],
    status: "resolved",
    date: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    customer: { name: "Fatima Rahman", email: "fatima@example.com" },
    subject: "Product inquiry",
    messages: [
      { sender: "customer", text: "Is the smartwatch waterproof?", timestamp: "2024-01-20T14:00:00Z" },
      { sender: "admin", text: "Yes, it has water resistance up to 50 meters.", timestamp: "2024-01-20T14:15:00Z" }
    ],
    status: "resolved",
    date: "2024-01-20T14:00:00Z"
  }
];


// ========================================
// APPLICATION STATE
// ========================================

const STORAGE_KEYS = {
  cart: 'haathub_cart',
  wishlist: 'haathub_wishlist',
  user: 'haathub_user',
  orders: 'haathub_orders'
};

const DEFAULT_FILTERS = {
  category: 'all',
  priceRange: [0, 50000],
  minRating: 0,
  onlyFlashSale: false,
  sortBy: 'popularity',
  searchQuery: ''
};

const APP_STATE = {
  currentPage: 'home',
  currentUser: null,
  isLoggedIn: false,
  userRole: null,
  cart: [],
  wishlist: [],
  orders: [],
  messages: [],
  filters: { ...DEFAULT_FILTERS },
  messageWidgetOpen: false,
  currentProduct: null,
  currentLoginRole: null
};


// ========================================
// BACKEND API
// ========================================

const API_BASE = (window.HAATHUB_CONFIG && window.HAATHUB_CONFIG.apiBase) || 'api';

async function apiFetch(endpoint, payload = null, options = {}) {
  const method = options.method || (payload ? 'POST' : 'GET');
  const url = `${API_BASE}/${endpoint}`;
  const fetchOptions = {
    method,
    credentials: 'same-origin',
    headers: payload ? { 'Content-Type': 'application/json' } : {},
  };
  if (payload) fetchOptions.body = JSON.stringify(payload);

  const response = await fetch(url, fetchOptions);
  let result;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error('Invalid server response. Check PHP errors and database setup.');
  }
  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Request failed.');
  }
  return result.data || {};
}

function normalizeProductIds() {
  PRODUCTS_DATA = PRODUCTS_DATA.map(product => ({
    ...product,
    id: String(product.id),
    price: Number(product.price || 0),
    oldPrice: Number(product.oldPrice || 0),
    discount: Number(product.discount || 0),
    stock: Number(product.stock || 0),
    rating: Number(product.rating || 0),
    reviews: Number(product.reviews || 0)
  }));
}

async function loadServerState() {
  try {
    const productsResponse = await apiFetch('products.php?action=list');
    if (Array.isArray(productsResponse.products) && productsResponse.products.length) {
      PRODUCTS_DATA = productsResponse.products;
      normalizeProductIds();
    }
  } catch (error) {
    console.warn('Products API fallback:', error.message);
    normalizeProductIds();
  }

  try {
    const authResponse = await apiFetch('auth.php?action=me');
    if (authResponse.user) {
      APP_STATE.isLoggedIn = true;
      APP_STATE.userRole = authResponse.user.role;
      APP_STATE.currentUser = authResponse.user;
    }
  } catch (error) {
    console.warn('Auth API unavailable:', error.message);
  }

  try {
    const cartResponse = await apiFetch('cart.php?action=list');
    if (Array.isArray(cartResponse.cart)) APP_STATE.cart = cartResponse.cart;
  } catch (error) {
    console.warn('Cart API fallback:', error.message);
  }

  if (APP_STATE.isLoggedIn) {
    if (APP_STATE.userRole === 'admin') APP_STATE.orders = [];
    try {
      const wishlistResponse = await apiFetch('wishlist.php?action=list');
      if (Array.isArray(wishlistResponse.wishlist)) APP_STATE.wishlist = wishlistResponse.wishlist.map(String);
    } catch (error) {
      console.warn('Wishlist API fallback:', error.message);
    }
    try {
      await refreshOrdersFromServer(APP_STATE.userRole === 'admin');
    } catch (error) {
      console.warn('Orders API fallback:', error.message);
    }
    if (APP_STATE.userRole === 'admin') {
      try { await refreshAdminMessagesFromServer(); } catch (error) { console.warn('Messages API fallback:', error.message); }
    }
  }
}

async function refreshOrdersFromServer(admin = false) {
  const endpoint = admin ? 'orders.php?action=list&admin=1' : 'orders.php?action=list';
  const response = await apiFetch(endpoint);
  if (Array.isArray(response.orders)) {
    if (admin) ORDERS_DATA = response.orders;
    else APP_STATE.orders = response.orders;
  }
}

async function refreshAdminMessagesFromServer() {
  const response = await apiFetch('messages.php?action=list&admin=1');
  if (Array.isArray(response.conversations)) {
    ADMIN_INBOX_CACHE = response.conversations.map(thread => ({
      id: thread.id,
      customer: thread.customer,
      orderId: thread.orderId || '',
      time: thread.date ? new Date(thread.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      unread: Number(thread.unreadByAdmin || 0) > 0,
      messages: (thread.messages && thread.messages.length ? thread.messages : [{ sender: 'customer', text: thread.lastMessage || 'No message preview available.', timestamp: thread.date }]).map(message => ({
        sender: message.sender === 'customer' ? 'customer' : 'admin',
        text: message.text,
        time: message.timestamp ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''
      })),
      preview: thread.lastMessage || ''
    }));
  }
}

// ========================================
// HELPERS
// ========================================

function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function safeJsonParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn('Unable to parse saved data:', error);
    return fallback;
  }
}

function getStorage() {
  try {
    const testKey = '__haathub_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch (error) {
    console.warn('Local storage is unavailable in this browser context:', error);
    return null;
  }
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatPrice(price) {
  return `৳${Number(price || 0).toLocaleString('en-BD')}`;
}

function formatDate(value) {
  if (!value) return 'N/A';
  return new Date(value).toLocaleDateString('en-BD', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function saveState() {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(STORAGE_KEYS.cart, JSON.stringify(APP_STATE.cart));
  storage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(APP_STATE.wishlist));
  storage.setItem(STORAGE_KEYS.orders, JSON.stringify(APP_STATE.orders));
  storage.setItem(STORAGE_KEYS.user, JSON.stringify({
    isLoggedIn: APP_STATE.isLoggedIn,
    userRole: APP_STATE.userRole,
    currentUser: APP_STATE.currentUser
  }));
}

function loadState() {
  const storage = getStorage();
  if (!storage) return;

  APP_STATE.cart = safeJsonParse(storage.getItem(STORAGE_KEYS.cart), []);
  APP_STATE.wishlist = safeJsonParse(storage.getItem(STORAGE_KEYS.wishlist), []);
  APP_STATE.orders = safeJsonParse(storage.getItem(STORAGE_KEYS.orders), []);

  const user = safeJsonParse(storage.getItem(STORAGE_KEYS.user), null);
  if (user && user.isLoggedIn) {
    APP_STATE.isLoggedIn = true;
    APP_STATE.userRole = user.userRole || 'user';
    APP_STATE.currentUser = user.currentUser || { email: '', name: APP_STATE.userRole === 'admin' ? 'Admin' : 'Customer' };
  }
}

function showToast(message, type = 'success') {
  const container = $('#toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="toast-content"><span>${escapeHTML(message)}</span></div>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('toast-show'), 10);
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function calculateCartTotal() {
  return APP_STATE.cart.reduce((total, item) => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function calculateCartCount() {
  return APP_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
  const badge = $('#cart-count');
  if (!badge) return;
  const count = calculateCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function updateWishlistBadge() {
  const badge = $('#wishlist-count');
  if (!badge) return;
  const count = APP_STATE.wishlist.length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function updateUserMenu() {
  const loginTrigger = $('#login-trigger');
  const loginText = $('.login-text', loginTrigger || document);
  const profileBtn = $('#profile-menu-btn');

  if (APP_STATE.isLoggedIn) {
    if (loginText) loginText.textContent = APP_STATE.userRole === 'admin' ? 'Admin Logout' : 'Logout';
    if (loginTrigger) loginTrigger.title = 'Logout';
    if (profileBtn) profileBtn.title = APP_STATE.userRole === 'admin' ? 'Admin dashboard' : 'My profile';
  } else {
    if (loginText) loginText.textContent = 'Login';
    if (loginTrigger) loginTrigger.title = 'Login';
    if (profileBtn) profileBtn.title = 'Login';
  }
}

// ========================================
// COUNTDOWN
// ========================================

function getPrimaryFlashEndTime() {
  const product = PRODUCTS_DATA.find(p => p.isFlashSale && p.flashSaleEndTime);
  return product ? product.flashSaleEndTime : new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
}

function countdownHTML(endTime, compact = false) {
  const end = new Date(endTime).getTime();
  const now = Date.now();
  const distance = end - now;

  if (distance <= 0) return '<span class="countdown-expired">Sale Ended</span>';

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (compact) {
    return `<span>${String(hours).padStart(2, '0')}h</span> <span>${String(minutes).padStart(2, '0')}m</span> <span>${String(seconds).padStart(2, '0')}s</span>`;
  }

  return `
    <div class="countdown-time-box">
      <span class="countdown-value">${String(hours).padStart(2, '0')}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <span class="countdown-separator">:</span>
    <div class="countdown-time-box">
      <span class="countdown-value">${String(minutes).padStart(2, '0')}</span>
      <span class="countdown-label">Min</span>
    </div>
    <span class="countdown-separator">:</span>
    <div class="countdown-time-box">
      <span class="countdown-value">${String(seconds).padStart(2, '0')}</span>
      <span class="countdown-label">Sec</span>
    </div>
  `;
}

function updateCountdowns() {
  $$('[data-countdown]').forEach(element => {
    element.innerHTML = countdownHTML(element.dataset.countdown, element.dataset.compact === 'true');
  });

  const mainCountdown = $('#flash-countdown-main');
  if (mainCountdown) {
    mainCountdown.innerHTML = countdownHTML(getPrimaryFlashEndTime());
  }
}

setInterval(updateCountdowns, 1000);

// ========================================
// NAVIGATION
// ========================================

function isAdminPage(page) {
  return page && page.startsWith('admin-');
}

function pageElement(page) {
  return $(`#${page}-page`);
}

function setAdminMode(enabled) {
  const sidebar = $('#admin-sidebar');
  const header = $('#main-header');
  const footer = $('#main-footer');
  const main = $('#main-content');
  const messageWidget = $('#message-widget');
  const chat = $('#message-chat');

  if (sidebar) {
    sidebar.classList.toggle('hidden', !enabled);
    sidebar.style.display = enabled ? 'block' : '';
  }
  if (header) header.style.display = enabled ? 'none' : '';
  if (footer) footer.style.display = enabled ? 'none' : '';
  if (main) main.classList.toggle('admin-mode', enabled);
  if (messageWidget) messageWidget.style.display = enabled ? 'none' : '';
  if (chat && enabled) chat.classList.add('hidden');
}

function updateAdminNavigation(page) {
  $$('.admin-nav-link').forEach(link => {
    const target = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', target === page);
  });
}

function navigateTo(page, options = null) {
  if (typeof options === 'string') {
    APP_STATE.currentProduct = options;
  } else if (options && typeof options === 'object') {
    if (options.flashSale) APP_STATE.filters.onlyFlashSale = true;
    if (options.filter === 'best-sellers') APP_STATE.filters.sortBy = 'rating';
    if (options.filter === 'trending') APP_STATE.filters.sortBy = 'popularity';
  }

  if (isAdminPage(page) && (!APP_STATE.isLoggedIn || APP_STATE.userRole !== 'admin')) {
    showToast('Admin access requires admin login.', 'info');
    showLoginModal('admin');
    return;
  }

  APP_STATE.currentPage = page;

  $$('.page').forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const target = pageElement(page);
  if (!target) {
    console.warn(`Page not found: ${page}`);
    return;
  }

  target.classList.add('active');
  target.style.display = 'block';
  setAdminMode(isAdminPage(page));
  updateAdminNavigation(page);

  if (page !== 'product-details') APP_STATE.currentProduct = null;

  switch (page) {
    case 'home': renderHome(); break;
    case 'products': renderProductListing(); break;
    case 'product-details': renderProductDetails(APP_STATE.currentProduct || options); break;
    case 'cart': renderCart(); break;
    case 'checkout': renderCheckout(); break;
    case 'profile': renderProfile(); break;
    case 'admin-dashboard': renderAdminDashboard(); break;
    case 'admin-products': renderAdminProducts(); break;
    case 'admin-orders': renderAdminOrders(); break;
    case 'admin-messages': renderAdminMessages(); break;
    case 'admin-analytics': renderAdminAnalytics(); break;
    case 'admin-flash-sales': renderAdminFlashSales(); break;
    case 'admin-settings': renderAdminSettings(); break;
    default: break;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// PRODUCTS
// ========================================

function starRating(rating) {
  const full = Math.floor(rating);
  return `
    <span class="stars" aria-label="${rating} out of 5 stars">
      ${Array.from({ length: 5 }, (_, i) => `<span class="star ${i < full ? '' : 'empty'}">★</span>`).join('')}
    </span>
  `;
}

function createProductCard(product) {
  const isWishlisted = APP_STATE.wishlist.includes(product.id);
  return `
    <article class="product-card" onclick="navigateTo('product-details', '${product.id}')">
      <div class="product-image-container">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" class="product-image" loading="lazy">
        <div class="product-badges">
          ${product.isFlashSale ? '<span class="product-badge badge-flash-sale">Flash Sale</span>' : ''}
          ${product.discount ? `<span class="product-badge badge-discount">${product.discount}% OFF</span>` : ''}
          ${product.stock < 10 ? '<span class="product-badge badge-stock">Low Stock</span>' : ''}
        </div>
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" type="button" aria-label="Toggle wishlist" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
          <svg class="wishlist-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${escapeHTML(product.category)}</p>
        <h3 class="product-name">${escapeHTML(product.name)}</h3>
        <div class="product-rating">
          ${starRating(product.rating)}
          <span class="rating-text">${product.rating} (${product.reviews})</span>
        </div>
        ${product.isFlashSale && product.flashSaleEndTime ? `<div class="product-countdown" data-countdown="${product.flashSaleEndTime}" data-compact="true"></div>` : ''}
        <div class="product-price-group">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" type="button" onclick="event.stopPropagation(); addToCart('${product.id}', 1)">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function getFilteredProducts() {
  let products = PRODUCTS_DATA.slice();
  const { searchQuery, category, priceRange, minRating, onlyFlashSale, sortBy } = APP_STATE.filters;

  if (searchQuery.trim()) {
    const query = searchQuery.trim().toLowerCase();
    products = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }

  if (category !== 'all') products = products.filter(product => product.category === category);
  products = products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
  products = products.filter(product => product.rating >= minRating);
  if (onlyFlashSale) products = products.filter(product => product.isFlashSale);

  switch (sortBy) {
    case 'price-low': products.sort((a, b) => a.price - b.price); break;
    case 'price-high': products.sort((a, b) => b.price - a.price); break;
    case 'rating': products.sort((a, b) => b.rating - a.rating); break;
    case 'discount': products.sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
    default: products.sort((a, b) => b.reviews - a.reviews); break;
  }

  return products;
}

function renderHome() {
  const flashSaleProducts = PRODUCTS_DATA.filter(product => product.isFlashSale).slice(0, 4);
  const trendingProducts = PRODUCTS_DATA.slice().sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  const bestSellers = PRODUCTS_DATA.slice().sort((a, b) => b.rating - a.rating || b.reviews - a.reviews).slice(0, 4);

  const heroProducts = $('#hero-products');
  const flashGrid = $('#flash-sales-grid');
  const trendingGrid = $('#trending-products-grid');
  const bestGrid = $('#bestseller-products-grid');

  if (heroProducts) {
    heroProducts.innerHTML = PRODUCTS_DATA.slice(0, 4).map(product => `
      <div class="hero-product-card" onclick="navigateTo('product-details', '${product.id}')">
        <img src="${product.image}" alt="${escapeHTML(product.name)}">
        <h3>${escapeHTML(product.name)}</h3>
        <p>${formatPrice(product.price)}</p>
      </div>
    `).join('');
  }

  if (flashGrid) flashGrid.innerHTML = flashSaleProducts.map(createProductCard).join('');
  if (trendingGrid) trendingGrid.innerHTML = trendingProducts.map(createProductCard).join('');
  if (bestGrid) bestGrid.innerHTML = bestSellers.map(createProductCard).join('');
  updateCountdowns();
}

function renderCategoryFilters() {
  const container = $('#category-filters');
  if (!container) return;

  const categories = ['all', ...new Set(PRODUCTS_DATA.map(product => product.category))];
  container.innerHTML = categories.map(category => `
    <button type="button" class="filter-option-btn ${APP_STATE.filters.category === category ? 'active' : ''}" onclick="filterByCategory('${category}')">
      ${category === 'all' ? 'All Categories' : escapeHTML(category)}
    </button>
  `).join('');
}

function renderActiveFilters() {
  const container = $('#active-filters');
  if (!container) return;

  const chips = [];
  if (APP_STATE.filters.category !== 'all') chips.push(APP_STATE.filters.category);
  if (APP_STATE.filters.onlyFlashSale) chips.push('Flash Sale');
  if (APP_STATE.filters.minRating) chips.push(`${APP_STATE.filters.minRating}+ Rating`);
  if (APP_STATE.filters.searchQuery) chips.push(`Search: ${APP_STATE.filters.searchQuery}`);
  if (APP_STATE.filters.priceRange[1] < 50000) chips.push(`Under ${formatPrice(APP_STATE.filters.priceRange[1])}`);

  container.innerHTML = chips.map(chip => `<span class="filter-chip">${escapeHTML(chip)}</span>`).join('');
}

function syncProductFilterControls() {
  const productSearch = $('#products-search');
  const sortSelect = $('#sort-select');
  const priceMax = $('#price-max');
  const priceValue = $('#price-max-value');
  const flashSaleOnly = $('#flash-sale-only');

  if (productSearch && productSearch.value !== APP_STATE.filters.searchQuery) productSearch.value = APP_STATE.filters.searchQuery;
  if (sortSelect) sortSelect.value = APP_STATE.filters.sortBy;
  if (priceMax) priceMax.value = APP_STATE.filters.priceRange[1];
  if (priceValue) priceValue.textContent = formatPrice(APP_STATE.filters.priceRange[1]);
  if (flashSaleOnly) flashSaleOnly.checked = APP_STATE.filters.onlyFlashSale;

  $$('.rating-filter-btn').forEach(button => {
    button.classList.toggle('active', Number(button.dataset.rating) === APP_STATE.filters.minRating);
  });

  $$('.category-link').forEach(link => {
    const text = link.textContent.trim();
    const isActive = (APP_STATE.filters.category === 'all' && text === 'All Categories') || text === APP_STATE.filters.category;
    link.classList.toggle('active', isActive);
  });
}

function renderProductListing() {
  renderCategoryFilters();
  syncProductFilterControls();

  const products = getFilteredProducts();
  const grid = $('#products-grid-main');
  const count = $('#filtered-count');
  const noResults = $('#no-results');
  const clearSearch = $('#clear-products-search');

  if (count) count.textContent = products.length;
  if (grid) grid.innerHTML = products.map(createProductCard).join('');
  if (noResults) noResults.classList.toggle('hidden', products.length > 0);
  if (grid) grid.classList.toggle('hidden', products.length === 0);
  if (clearSearch) clearSearch.classList.toggle('hidden', !APP_STATE.filters.searchQuery);

  renderActiveFilters();
  updateCountdowns();
}

function filterByCategory(category) {
  APP_STATE.filters.category = category;
  navigateTo('products');
}

function setCategory(category) {
  filterByCategory(category);
}

function clearAllFilters() {
  APP_STATE.filters = { ...DEFAULT_FILTERS };
  ['desktop-search', 'mobile-search', 'products-search'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = '';
  });
  renderProductListing();
}

function handleSearchInput(value, shouldNavigate = false) {
  APP_STATE.filters.searchQuery = value;
  if (shouldNavigate && APP_STATE.currentPage !== 'products') navigateTo('products');
  else renderProductListing();
}

// ========================================
// PRODUCT DETAILS
// ========================================

function renderProductDetails(productId) {
  const page = $('#product-details-page');
  const product = PRODUCTS_DATA.find(item => item.id === String(productId));
  if (!page || !product) return;

  APP_STATE.currentProduct = product.id;
  const isWishlisted = APP_STATE.wishlist.includes(product.id);

  page.innerHTML = `
    <div class="container product-details-wrap">
      <button class="btn btn-ghost back-btn" onclick="navigateTo('products')">← Back to Products</button>
      <div class="product-details-grid">
        <div class="product-details-image">
          <img src="${product.image}" alt="${escapeHTML(product.name)}">
          <div class="product-badges details-badges">
            ${product.isFlashSale ? '<span class="product-badge badge-flash-sale">Flash Sale</span>' : ''}
            ${product.discount ? `<span class="product-badge badge-discount">${product.discount}% OFF</span>` : ''}
          </div>
          <button class="wishlist-btn-large ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')">♡</button>
        </div>
        <div class="product-details-info">
          <p class="product-category">${escapeHTML(product.category)}</p>
          <h1>${escapeHTML(product.name)}</h1>
          <div class="product-rating">
            ${starRating(product.rating)}
            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
          </div>
          ${product.isFlashSale && product.flashSaleEndTime ? `<div class="countdown-large details-countdown" data-countdown="${product.flashSaleEndTime}"></div>` : ''}
          <div class="price-section">
            <span class="product-price-large">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price-large">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <p class="stock-status ${product.stock > 0 ? '' : 'out'}">${product.stock > 0 ? `✓ In Stock (${product.stock} available)` : 'Out of Stock'}</p>
          <div class="quantity-selector" aria-label="Quantity selector">
            <button type="button" onclick="decreaseQuantity()">-</button>
            <span id="detail-quantity">1</span>
            <button type="button" onclick="increaseQuantity(${product.stock})">+</button>
          </div>
          <div class="details-actions">
            <button class="btn btn-primary btn-lg" onclick="addToCartFromDetails('${product.id}')" ${product.stock === 0 ? 'disabled' : ''}>Add to Cart</button>
            <button class="btn btn-outline btn-lg" onclick="toggleWishlist('${product.id}')">${isWishlisted ? 'Remove Wishlist' : 'Add Wishlist'}</button>
          </div>
          <div class="product-description">
            <h3>Description</h3>
            <p>${escapeHTML(product.description)}</p>
            <h3>Specifications</h3>
            <ul>${product.specs.map(spec => `<li>✓ ${escapeHTML(spec)}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </div>
  `;
  updateCountdowns();
}

function increaseQuantity(max) {
  const quantity = $('#detail-quantity');
  if (!quantity) return;
  const current = Number(quantity.textContent || 1);
  if (current < max) quantity.textContent = current + 1;
}

function decreaseQuantity() {
  const quantity = $('#detail-quantity');
  if (!quantity) return;
  const current = Number(quantity.textContent || 1);
  if (current > 1) quantity.textContent = current - 1;
}

// ========================================
// CART, WISHLIST, CHECKOUT
// ========================================

async function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === String(productId));
  if (!product || product.stock === 0) {
    showToast('Product not available.', 'error');
    return;
  }

  try {
    const response = await apiFetch('cart.php?action=add', { productId: String(productId), quantity });
    if (Array.isArray(response.cart)) APP_STATE.cart = response.cart.map(item => ({ productId: String(item.productId), quantity: Number(item.quantity || 1) }));
  } catch (error) {
    console.warn('Cart API fallback:', error.message);
    const existing = APP_STATE.cart.find(item => item.productId === String(productId));
    if (existing) {
      const nextQuantity = existing.quantity + quantity;
      if (nextQuantity > product.stock) {
        showToast('Not enough stock available.', 'error');
        return;
      }
      existing.quantity = nextQuantity;
    } else {
      APP_STATE.cart.push({ productId: String(productId), quantity });
    }
  }

  saveState();
  updateCartBadge();
  showToast(`${product.name} added to cart.`);
}

function addToCartFromDetails(productId) {
  const quantity = Number($('#detail-quantity')?.textContent || 1);
  addToCart(productId, quantity);
}

async function removeFromCart(productId) {
  try {
    const response = await apiFetch('cart.php?action=remove', { productId: String(productId) });
    if (Array.isArray(response.cart)) APP_STATE.cart = response.cart.map(item => ({ productId: String(item.productId), quantity: Number(item.quantity || 1) }));
  } catch (error) {
    APP_STATE.cart = APP_STATE.cart.filter(item => item.productId !== String(productId));
  }
  saveState();
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart.');
}

async function updateCartQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    await removeFromCart(productId);
    return;
  }

  const product = PRODUCTS_DATA.find(p => p.id === String(productId));
  if (!product || newQuantity > product.stock) {
    showToast('Not enough stock available.', 'error');
    return;
  }

  try {
    const response = await apiFetch('cart.php?action=update', { productId: String(productId), quantity: newQuantity });
    if (Array.isArray(response.cart)) APP_STATE.cart = response.cart.map(item => ({ productId: String(item.productId), quantity: Number(item.quantity || 1) }));
  } catch (error) {
    const item = APP_STATE.cart.find(entry => entry.productId === String(productId));
    if (item) item.quantity = newQuantity;
  }
  saveState();
  updateCartBadge();
  renderCart();
}

async function toggleWishlist(productId) {
  if (!APP_STATE.isLoggedIn) {
    showLoginModal('user');
    return;
  }

  try {
    const response = await apiFetch('wishlist.php?action=toggle', { productId: String(productId) });
    if (Array.isArray(response.wishlist)) APP_STATE.wishlist = response.wishlist.map(String);
    showToast(response.active ? 'Added to wishlist.' : 'Removed from wishlist.');
  } catch (error) {
    const id = String(productId);
    const index = APP_STATE.wishlist.indexOf(id);
    if (index > -1) {
      APP_STATE.wishlist.splice(index, 1);
      showToast('Removed from wishlist.');
    } else {
      APP_STATE.wishlist.push(id);
      showToast('Added to wishlist.');
    }
  }

  saveState();
  updateWishlistBadge();

  if (APP_STATE.currentPage === 'products') renderProductListing();
  if (APP_STATE.currentPage === 'product-details') renderProductDetails(APP_STATE.currentProduct);
  if (APP_STATE.currentPage === 'profile') renderProfile();
}

function renderCart() {
  const page = $('#cart-page');
  if (!page) return;

  if (APP_STATE.cart.length === 0) {
    page.innerHTML = `
      <div class="container cart-page-wrap">
        <h1 class="page-title">Shopping Cart</h1>
        <div class="empty-state">
          <p>Your cart is empty.</p>
          <button class="btn btn-primary" onclick="navigateTo('products')">Continue Shopping</button>
        </div>
      </div>
    `;
    return;
  }

  const subtotal = calculateCartTotal();
  const deliveryFee = subtotal >= 1000 ? 0 : 60;
  const total = subtotal + deliveryFee;

  page.innerHTML = `
    <div class="container cart-page-wrap">
      <h1 class="page-title">Shopping Cart</h1>
      <div class="cart-layout">
        <div class="cart-items">
          ${APP_STATE.cart.map(item => {
            const product = PRODUCTS_DATA.find(p => p.id === item.productId);
            if (!product) return '';
            return `
              <div class="cart-item">
                <img src="${product.image}" alt="${escapeHTML(product.name)}">
                <div class="cart-item-info">
                  <h3>${escapeHTML(product.name)}</h3>
                  <p>${escapeHTML(product.category)}</p>
                  <div class="cart-item-actions">
                    <div class="quantity-controls">
                      <button type="button" onclick="updateCartQuantity('${product.id}', ${item.quantity - 1})">-</button>
                      <span>${item.quantity}</span>
                      <button type="button" onclick="updateCartQuantity('${product.id}', ${item.quantity + 1})" ${item.quantity >= product.stock ? 'disabled' : ''}>+</button>
                    </div>
                    <div class="cart-item-price">
                      <span class="price">${formatPrice(product.price * item.quantity)}</span>
                      ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice * item.quantity)}</span>` : ''}
                    </div>
                  </div>
                </div>
                <button class="remove-btn" type="button" onclick="removeFromCart('${product.id}')">×</button>
              </div>
            `;
          }).join('')}
        </div>
        <aside class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div class="summary-row"><span>Delivery</span><span>${deliveryFee === 0 ? '<span class="free">FREE</span>' : formatPrice(deliveryFee)}</span></div>
          ${subtotal < 1000 ? `<p class="delivery-notice">Add ${formatPrice(1000 - subtotal)} more for free delivery.</p>` : ''}
          <div class="summary-total"><span>Total</span><span>${formatPrice(total)}</span></div>
          <button class="btn btn-primary btn-lg btn-block" onclick="navigateTo('checkout')">Proceed to Checkout</button>
        </aside>
      </div>
    </div>
  `;
}

function renderCheckout() {
  const page = $('#checkout-page');
  if (!page) return;

  if (APP_STATE.cart.length === 0) {
    showToast('Your cart is empty.', 'info');
    navigateTo('cart');
    return;
  }

  const subtotal = calculateCartTotal();
  const deliveryFee = subtotal >= 1000 ? 0 : 60;
  const total = subtotal + deliveryFee;

  page.innerHTML = `
    <div class="container checkout-page-wrap">
      <h1 class="page-title">Checkout</h1>
      <div class="checkout-layout">
        <form class="checkout-form" id="checkout-form">
          <h2>Delivery Information</h2>
          <div class="form-grid">
            <div class="form-group"><label>Full Name</label><input name="fullName" type="text" required placeholder="Your full name"></div>
            <div class="form-group"><label>Phone</label><input name="phone" type="tel" required placeholder="+880 1XXX-XXXXXX"></div>
          </div>
          <div class="form-group"><label>Address</label><textarea name="address" required rows="4" placeholder="House, road, area, city"></textarea></div>
          <div class="payment-box">
            <h3>Payment Method</h3>
            <label class="checkbox-label"><input type="radio" name="paymentMethod" value="COD" checked> <span>Cash on Delivery</span></label>
          </div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">Place Order</button>
        </form>
        <aside class="checkout-summary">
          <h2>Order Summary</h2>
          ${APP_STATE.cart.map(item => {
            const product = PRODUCTS_DATA.find(p => p.id === item.productId);
            return product ? `
              <div class="checkout-item">
                <img src="${product.image}" alt="${escapeHTML(product.name)}">
                <div><p>${escapeHTML(product.name)}</p><span>Qty: ${item.quantity}</span></div>
                <strong>${formatPrice(product.price * item.quantity)}</strong>
              </div>
            ` : '';
          }).join('')}
          <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div class="summary-row"><span>Delivery</span><span>${deliveryFee === 0 ? '<span class="free">FREE</span>' : formatPrice(deliveryFee)}</span></div>
          <div class="summary-total"><span>Total</span><span>${formatPrice(total)}</span></div>
        </aside>
      </div>
    </div>
  `;

  $('#checkout-form')?.addEventListener('submit', handleCheckoutSubmit);
}

async function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (!APP_STATE.isLoggedIn) {
    showLoginModal('user');
    return;
  }

  const formData = new FormData(event.target);
  const payload = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    city: formData.get('city'),
    note: formData.get('note'),
    paymentMethod: 'COD',
    items: APP_STATE.cart
  };

  let order;
  try {
    const response = await apiFetch('orders.php?action=create', payload);
    order = response.order;
  } catch (error) {
    console.warn('Order API fallback:', error.message);
    order = {
      id: 'ORD-' + Date.now().toString().slice(-8),
      customer: { name: payload.fullName, phone: payload.phone, email: APP_STATE.currentUser?.email || '', address: payload.address },
      items: [...APP_STATE.cart],
      total: calculateCartTotal() + (calculateCartTotal() >= 1000 ? 0 : 60),
      status: 'pending',
      paymentMethod: 'COD',
      date: new Date().toISOString()
    };
  }

  APP_STATE.orders.push(order);
  APP_STATE.cart = [];
  try { await apiFetch('cart.php?action=clear', {}); } catch (error) {}
  saveState();
  updateCartBadge();
  showToast('Order placed successfully.');
  setTimeout(() => navigateTo('profile'), 900);
}

function renderProfile() {
  const page = $('#profile-page');
  if (!page) return;

  if (!APP_STATE.isLoggedIn) {
    page.innerHTML = `
      <div class="container profile-page-wrap">
        <div class="empty-state">
          <p>Please login to view your profile.</p>
          <button class="btn btn-primary" onclick="showLoginModal('user')">User Login</button>
        </div>
      </div>
    `;
    return;
  }

  const wishlistProducts = APP_STATE.wishlist.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);

  page.innerHTML = `
    <div class="container profile-page-wrap">
      <div class="profile-header-card">
        <div>
          <p class="product-category">${APP_STATE.userRole === 'admin' ? 'Administrator' : 'Customer Account'}</p>
          <h1>${escapeHTML(APP_STATE.currentUser?.name || APP_STATE.currentUser?.email || 'My Account')}</h1>
          <p>${escapeHTML(APP_STATE.currentUser?.email || '')}</p>
        </div>
        <button class="btn btn-outline" onclick="handleLogout()">Logout</button>
      </div>
      <section class="profile-section">
        <h2>Wishlist</h2>
        <div class="products-grid">${wishlistProducts.length ? wishlistProducts.map(createProductCard).join('') : '<p class="muted">No wishlist items yet.</p>'}</div>
      </section>
      <section class="profile-section">
        <h2>My Orders</h2>
        <div class="order-list">
          ${APP_STATE.orders.length ? APP_STATE.orders.slice().reverse().map(order => `
            <div class="order-card">
              <div><strong>${order.id}</strong><p>${formatDate(order.date)}</p></div>
              <span class="status-${order.status}">${order.status}</span>
              <strong>${formatPrice(order.total)}</strong>
            </div>
          `).join('') : '<p class="muted">No orders yet.</p>'}
        </div>
      </section>
    </div>
  `;
}

// ========================================
// AUTHENTICATION
// ========================================

function showLoginModal(role = null) {
  APP_STATE.currentLoginRole = role;
  renderLoginModal(role);
  const modal = $('#login-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeLoginModal() {
  const modal = $('#login-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.style.display = 'none';
  APP_STATE.currentLoginRole = null;
}

function renderLoginModal(role = null) {
  const modal = $('#login-modal');
  if (!modal) return;

  const title = role === 'admin' ? 'Admin Login' : role === 'user' ? 'User Login' : 'Login to HaatHub';
  const body = role ? `
    <form class="modal-body" id="login-form" data-role="${role}">
      <div class="login-note ${role === 'admin' ? 'admin-note' : ''}">
        ${role === 'admin'
          ? '<strong>Admin panel:</strong> use admin@haathub.com / admin123 to open dashboard, analytics, messages and settings.'
          : '<strong>User account:</strong> enter any valid email and password to shop, checkout and save wishlist.'}
      </div>
      <div class="form-group">
        <label>Email</label>
        <input id="login-email" name="email" type="email" value="${role === 'admin' ? 'admin@haathub.com' : ''}" placeholder="your-email@example.com" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input id="login-password" name="password" type="password" value="${role === 'admin' ? 'admin123' : ''}" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">${role === 'admin' ? 'Enter Admin Panel' : 'Login as User'}</button>
      <button type="button" class="btn btn-ghost btn-block" onclick="renderLoginModal()">Back to Login Options</button>
    </form>
  ` : `
    <div class="modal-body">
      <p class="login-choice-text">Choose how you want to login.</p>
      <div class="login-choice-grid">
        <button type="button" class="login-choice-card admin-choice" onclick="renderLoginModal('admin')">
          <span class="choice-icon">📊</span>
          <strong>Admin Login</strong>
          <small>Dashboard, analytics, orders, messages, settings</small>
        </button>
        <button type="button" class="login-choice-card" onclick="renderLoginModal('user')">
          <span class="choice-icon">🛒</span>
          <strong>User Login</strong>
          <small>Shopping, wishlist, checkout and order history</small>
        </button>
      </div>
    </div>
  `;

  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeLoginModal()"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" type="button" onclick="closeLoginModal()">
          <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      ${body}
    </div>
  `;

  $('#login-form')?.addEventListener('submit', handleLogin);
}

async function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const role = form.dataset.role || 'user';
  const email = form.elements.email?.value.trim() || '';
  const password = form.elements.password?.value.trim() || '';

  if (!email || !password) {
    showToast('Email and password are required.', 'error');
    return;
  }

  try {
    let response;
    try {
      response = await apiFetch('auth.php?action=login', { email, password, role });
    } catch (loginError) {
      if (role === 'user') {
        response = await apiFetch('auth.php?action=register', { email, password, name: email.split('@')[0] });
      } else {
        throw loginError;
      }
    }
    APP_STATE.isLoggedIn = true;
    APP_STATE.userRole = response.user.role;
    APP_STATE.currentUser = response.user;
    if (APP_STATE.userRole === 'admin') {
      APP_STATE.orders = [];
      await refreshOrdersFromServer(true).catch(() => null);
      await refreshAdminMessagesFromServer().catch(() => null);
    } else {
      await refreshOrdersFromServer(false).catch(() => null);
      const wishlistResponse = await apiFetch('wishlist.php?action=list').catch(() => null);
      if (wishlistResponse?.wishlist) APP_STATE.wishlist = wishlistResponse.wishlist.map(String);
    }
  } catch (error) {
    showToast(error.message || 'Login failed.', 'error');
    return;
  }

  saveState();
  updateUserMenu();
  updateWishlistBadge();
  closeLoginModal();
  showToast(APP_STATE.userRole === 'admin' ? 'Admin login successful.' : 'Welcome back.');

  if (APP_STATE.userRole === 'admin') navigateTo('admin-dashboard');
  else if (APP_STATE.currentPage === 'checkout') renderCheckout();
}

async function handleLogout() {
  try { await apiFetch('auth.php?action=logout', {}); } catch (error) {}
  APP_STATE.isLoggedIn = false;
  APP_STATE.userRole = null;
  APP_STATE.currentUser = null;
  APP_STATE.wishlist = [];
  saveState();
  updateUserMenu();
  updateWishlistBadge();
  setAdminMode(false);
  showToast('Logged out successfully.');
  navigateTo('home');
}

// ========================================
// ADMIN PANEL
// ========================================

let ADMIN_INBOX_CACHE = null;
let ADMIN_SELECTED_FLASH_PRODUCTS = new Set();

function allOrders() {
  return [...ORDERS_DATA, ...APP_STATE.orders];
}

function getOrderStatusCounts() {
  const orders = allOrders();
  return ['pending', 'confirmed', 'packed', 'shipped', 'delivered'].reduce((acc, status) => {
    acc[status] = orders.filter(order => order.status === status).length;
    return acc;
  }, {});
}

function getAdminInbox() {
  if (ADMIN_INBOX_CACHE) return ADMIN_INBOX_CACHE;

  const seedThreads = [
    {
      id: 101,
      customer: { name: 'Ahmed Khan', email: 'ahmed@example.com' },
      orderId: 'ORD-2024-001',
      time: '10:30 AM',
      unread: true,
      messages: [
        { sender: 'customer', text: 'Hello, I have a question about my recent order.', time: '10:15 AM' },
        { sender: 'admin', text: "Hi Ahmed! I'd be happy to help. What would you like to know?", time: '10:20 AM' },
        { sender: 'customer', text: 'Can I change the delivery address for order ORD-2024-001?', time: '10:30 AM' }
      ]
    },
    {
      id: 102,
      customer: { name: 'Fatima Rahman', email: 'fatima@example.com' },
      orderId: 'ORD-2024-002',
      time: '03:45 PM',
      unread: false,
      messages: [
        { sender: 'customer', text: 'Is the smartwatch water resistant?', time: '03:15 PM' },
        { sender: 'admin', text: 'Yes, it has water resistance for everyday use.', time: '03:30 PM' },
        { sender: 'customer', text: 'Great, thank you!', time: '03:45 PM' }
      ]
    },
    {
      id: 103,
      customer: { name: 'Karim Hossain', email: 'karim@example.com' },
      orderId: 'ORD-2024-003',
      time: '09:00 AM',
      unread: true,
      messages: [
        { sender: 'customer', text: 'Do you have the leather bag in brown color?', time: '08:55 AM' },
        { sender: 'admin', text: 'We currently have black and tan available. Brown will restock soon.', time: '09:00 AM' }
      ]
    },
    {
      id: 104,
      customer: { name: 'Nazia Sultana', email: 'nazia@example.com' },
      orderId: 'ORD-2024-004',
      time: '04:20 PM',
      unread: false,
      messages: [
        { sender: 'customer', text: 'Can I get delivery tomorrow?', time: '04:20 PM' }
      ]
    }
  ];

  ADMIN_INBOX_CACHE = seedThreads;
  return ADMIN_INBOX_CACHE;
}

function adminIcon(name) {
  const icons = {
    sales: '<svg class="admin-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2 0-3 .8-3 2s1 2 3 2 3 .8 3 2-1 2-3 2m0-10v12"/></svg>',
    orders: '<svg class="admin-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
    package: '<svg class="admin-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/></svg>',
    clock: '<svg class="admin-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    trend: '<svg class="admin-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    alert: '<svg class="admin-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>',
    flash: '<svg class="admin-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    message: '<svg class="admin-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
    settings: '<svg class="admin-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
  };
  return icons[name] || '';
}

function adminShell(title, subtitle, content, actions = '') {
  return `
    <div class="admin-panel admin-modern-panel">
      <div class="admin-heading-row">
        <div>
          <h1>${escapeHTML(title)}</h1>
          <p>${escapeHTML(subtitle)}</p>
        </div>
        <div class="admin-heading-actions">${actions}</div>
      </div>
      ${content}
    </div>
  `;
}

function adminMetricCard(title, value, note = '', tone = 'teal', icon = '') {
  return `
    <article class="admin-metric-card tone-${tone}">
      <div class="admin-metric-top">
        <span>${escapeHTML(title)}</span>
        <span class="admin-metric-icon">${icon}</span>
      </div>
      <strong>${value}</strong>
      ${note ? `<small>${note}</small>` : ''}
    </article>
  `;
}

function createAdminLineChart(values, labels, options = {}) {
  const width = options.width || 520;
  const height = options.height || 280;
  const padX = 48;
  const padY = 34;
  const min = options.min ?? 0;
  const max = options.max || Math.max(...values, 1);
  const usableW = width - padX - 24;
  const usableH = height - padY - 28;
  const points = values.map((value, index) => {
    const x = padX + (usableW / Math.max(values.length - 1, 1)) * index;
    const y = padY + usableH - ((value - min) / Math.max(max - min, 1)) * usableH;
    return { x, y, value };
  });
  const line = points.map(point => `${point.x},${point.y}`).join(' ');
  const area = `${padX},${padY + usableH} ${line} ${padX + usableW},${padY + usableH}`;
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  return `
    <svg class="admin-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Line chart">
      ${ticks.map(tick => {
        const y = padY + usableH - usableH * tick;
        const val = Math.round(min + (max - min) * tick);
        return `<g><line x1="${padX}" y1="${y}" x2="${padX + usableW}" y2="${y}" class="chart-grid"/><text x="${padX - 10}" y="${y + 5}" text-anchor="end" class="chart-label">${val}</text></g>`;
      }).join('')}
      ${labels.map((label, index) => {
        const x = padX + (usableW / Math.max(labels.length - 1, 1)) * index;
        return `<g><line x1="${x}" y1="${padY}" x2="${x}" y2="${padY + usableH}" class="chart-grid"/><text x="${x}" y="${height - 10}" text-anchor="middle" class="chart-label">${escapeHTML(label)}</text></g>`;
      }).join('')}
      <polyline points="${area}" class="chart-area"/>
      <polyline points="${line}" class="chart-line"/>
      ${points.map(point => `<circle cx="${point.x}" cy="${point.y}" r="6" class="chart-dot"/>`).join('')}
    </svg>
  `;
}

function createAdminBarChart(seriesA, seriesB, labels) {
  const width = 520;
  const height = 280;
  const padX = 50;
  const padY = 34;
  const usableW = width - padX - 24;
  const usableH = height - padY - 36;
  const max = Math.max(...seriesA, ...seriesB, 1);
  const groupW = usableW / labels.length;
  return `
    <svg class="admin-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Bar chart">
      ${[0, .25, .5, .75, 1].map(tick => {
        const y = padY + usableH - usableH * tick;
        return `<line x1="${padX}" y1="${y}" x2="${padX + usableW}" y2="${y}" class="chart-grid"/><text x="${padX - 10}" y="${y + 5}" text-anchor="end" class="chart-label">${Math.round(max * tick)}</text>`;
      }).join('')}
      ${labels.map((label, index) => {
        const baseX = padX + index * groupW + groupW * .22;
        const aH = (seriesA[index] / max) * usableH;
        const bH = (seriesB[index] / max) * usableH;
        return `
          <rect x="${baseX}" y="${padY + usableH - aH}" width="20" height="${aH}" rx="5" class="chart-bar-a"/>
          <rect x="${baseX + 34}" y="${padY + usableH - bH}" width="20" height="${bH}" rx="5" class="chart-bar-b"/>
          <text x="${baseX + 26}" y="${height - 10}" text-anchor="middle" class="chart-label">${escapeHTML(label)}</text>
        `;
      }).join('')}
    </svg>
  `;
}

function renderAdminDashboard() {
  const page = $('#admin-dashboard-page');
  if (!page) return;

  const orders = allOrders();
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const pending = orders.filter(order => order.status === 'pending').length;
  const lowStock = PRODUCTS_DATA.filter(product => product.stock < 20);
  const flashProducts = PRODUCTS_DATA.filter(product => product.isFlashSale);
  const statusCounts = getOrderStatusCounts();

  page.innerHTML = adminShell('Dashboard Overview', "Welcome back! Here's what's happening today.", `
    <div class="admin-stats-grid">
      ${adminMetricCard('Total Sales', formatPrice(revenue), '+12% from last month', 'teal', adminIcon('sales'))}
      ${adminMetricCard('Total Orders', orders.length, '+8% from last week', 'blue', adminIcon('orders'))}
      ${adminMetricCard('Pending Orders', pending, 'Requires attention', 'orange', adminIcon('clock'))}
      ${adminMetricCard('Total Products', PRODUCTS_DATA.length, `${lowStock.length} low stock`, 'purple', adminIcon('package'))}
    </div>

    <div class="admin-dashboard-grid">
      <section class="admin-card admin-chart-card">
        <h2>${adminIcon('trend')} Weekly Sales</h2>
        ${createAdminLineChart([12000, 19000, 15000, 22000, 28000, 32000, 24000], ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], { max: 32000 })}
      </section>
      <section class="admin-card admin-chart-card">
        <h2>Order Status Distribution</h2>
        <div class="admin-pie-wrap">
          <div class="admin-pie" style="background: conic-gradient(var(--admin-orange) 0 120deg, var(--admin-blue) 120deg 190deg, var(--admin-indigo) 190deg 260deg, var(--admin-green) 260deg 360deg);"></div>
          <div class="admin-pie-labels">
            <span class="pie-orange">Pending: ${statusCounts.pending || 0}</span>
            <span class="pie-blue">Confirmed: ${statusCounts.confirmed || 1}</span>
            <span class="pie-indigo">Shipped: ${statusCounts.shipped || 0}</span>
            <span class="pie-green">Delivered: ${statusCounts.delivered || 0}</span>
          </div>
        </div>
      </section>
    </div>

    <div class="admin-dashboard-grid lower-grid">
      <section class="admin-card">
        <h2>Recent Orders</h2>
        <div class="admin-order-stack">
          ${orders.slice(-5).reverse().map(order => `
            <div class="admin-order-pill">
              <div><strong>${escapeHTML(order.id)}</strong><span>${escapeHTML(order.customer?.name || 'Customer')}</span></div>
              <b>${formatPrice(order.total)}</b>
              <em class="status-${order.status}">${escapeHTML(order.status)}</em>
            </div>
          `).join('')}
        </div>
      </section>
      <div class="admin-side-stack">
        <section class="admin-card admin-alert-card danger">
          <h2>${adminIcon('alert')} Low Stock Alert</h2>
          ${lowStock.slice(0, 4).map(product => `<div class="admin-alert-row"><span>${escapeHTML(product.name)}</span><b>${product.stock} left</b></div>`).join('') || '<p class="muted">No low stock products.</p>'}
        </section>
        <section class="admin-card admin-alert-card flash">
          <h2>${adminIcon('flash')} Active Flash Sales</h2>
          ${flashProducts.slice(0, 5).map(product => `<div class="admin-alert-row"><span>${escapeHTML(product.name)}</span><b>${product.discount}% OFF</b></div>`).join('')}
        </section>
        <section class="admin-card admin-alert-card info">
          <h2>Unread Messages <span>${getAdminInbox().filter(thread => thread.unread).length}</span></h2>
          <p>You have ${getAdminInbox().filter(thread => thread.unread).length} unread customer messages</p>
        </section>
      </div>
    </div>
  `);
}

function renderAdminProductRows() {
  const tbody = $('#admin-products-tbody');
  const count = $('#admin-products-count');
  if (!tbody) return;
  const query = ($('#admin-product-search')?.value || '').toLowerCase().trim();
  const category = $('#admin-product-category')?.value || 'all';
  const filtered = PRODUCTS_DATA.filter(product => {
    const matchesQuery = !query || product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    return matchesQuery && matchesCategory;
  });
  if (count) count.textContent = `Showing ${filtered.length} products`;

  tbody.innerHTML = filtered.map(product => `
    <tr>
      <td>
        <div class="admin-product-cell">
          <img src="${product.image}" alt="${escapeHTML(product.name)}">
          <div><strong>${escapeHTML(product.name)}</strong>${product.isFlashSale ? '<span class="admin-mini-badge orange">Flash Sale</span>' : ''}</div>
        </div>
      </td>
      <td>${escapeHTML(product.category)}</td>
      <td><strong>${formatPrice(product.price)}</strong>${product.oldPrice ? `<span class="admin-old-price">${formatPrice(product.oldPrice)}</span>` : ''}</td>
      <td><strong>${product.stock}</strong>${product.stock < 20 ? '<span class="admin-mini-badge red">Low</span>' : ''}</td>
      <td><span class="status-active">In Stock</span></td>
      <td>
        <button class="admin-icon-btn" title="Edit" onclick="showToast('Edit product form can be connected to backend.', 'info')">✎</button>
        <button class="admin-icon-btn" title="Delete" onclick="showToast('Delete action disabled in demo.', 'info')">🗑</button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="6" class="muted">No products found.</td></tr>';
}

function renderAdminProducts() {
  const page = $('#admin-products-page');
  if (!page) return;
  const categories = ['all', ...new Set(PRODUCTS_DATA.map(product => product.category))];
  page.innerHTML = adminShell('Product Management', 'Manage your product inventory', `
    <section class="admin-card admin-toolbar-card">
      <div class="admin-search-field"><span>⌕</span><input id="admin-product-search" type="search" placeholder="Search products..." oninput="renderAdminProductRows()"></div>
      <select id="admin-product-category" onchange="renderAdminProductRows()">${categories.map(cat => `<option value="${escapeHTML(cat)}">${cat === 'all' ? 'All Categories' : escapeHTML(cat)}</option>`).join('')}</select>
      <p id="admin-products-count">Showing ${PRODUCTS_DATA.length} products</p>
    </section>
    <section class="admin-table-shell">
      <table class="admin-table admin-management-table">
        <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="admin-products-tbody"></tbody>
      </table>
    </section>
  `, `<button class="btn btn-primary admin-top-btn" onclick="showToast('Add Product modal can be connected to backend.', 'info')">+ Add Product</button>`);
  renderAdminProductRows();
}

function renderAdminOrderRows() {
  const tbody = $('#admin-orders-tbody');
  const count = $('#admin-orders-count');
  if (!tbody) return;
  const query = ($('#admin-order-search')?.value || '').toLowerCase().trim();
  const status = $('#admin-order-status')?.value || 'all';
  const filtered = allOrders().filter(order => {
    const customer = order.customer || {};
    const matchesQuery = !query || order.id.toLowerCase().includes(query) || (customer.name || '').toLowerCase().includes(query) || (customer.phone || '').toLowerCase().includes(query);
    const matchesStatus = status === 'all' || order.status === status;
    return matchesQuery && matchesStatus;
  });
  if (count) count.textContent = `Showing ${filtered.length} orders`;

  tbody.innerHTML = filtered.slice().reverse().map(order => `
    <tr>
      <td><strong>${escapeHTML(order.id)}</strong></td>
      <td><strong>${escapeHTML(order.customer?.name || 'Customer')}</strong><span>${escapeHTML(order.customer?.phone || order.customer?.email || '')}</span></td>
      <td>${formatDate(order.date)}</td>
      <td><strong>${formatPrice(order.total)}</strong></td>
      <td><span class="admin-mini-badge yellow">${escapeHTML(order.paymentMethod || 'COD')}</span></td>
      <td><span class="status-${order.status}">${escapeHTML(order.status)}</span></td>
      <td><button class="admin-icon-btn" title="View order" onclick="showToast('Order detail preview can be connected to backend.', 'info')">👁</button></td>
    </tr>
  `).join('') || '<tr><td colspan="7" class="muted">No orders found.</td></tr>';
}

function renderAdminOrders() {
  const page = $('#admin-orders-page');
  if (!page) return;
  const orders = allOrders();
  const statusCounts = getOrderStatusCounts();
  page.innerHTML = adminShell('Order Management', 'Track and manage customer orders', `
    <div class="admin-order-stats">
      ${adminMetricCard('Total Orders', orders.length, '', 'plain')}
      ${adminMetricCard('Pending', statusCounts.pending || 0, '', 'plain-orange')}
      ${adminMetricCard('Shipped', statusCounts.shipped || 0, '', 'plain-blue')}
      ${adminMetricCard('Delivered', statusCounts.delivered || 0, '', 'plain-green')}
    </div>
    <section class="admin-card admin-toolbar-card">
      <div class="admin-search-field"><span>⌕</span><input id="admin-order-search" type="search" placeholder="Search orders or customers..." oninput="renderAdminOrderRows()"></div>
      <select id="admin-order-status" onchange="renderAdminOrderRows()">
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="packed">Packed</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
      <p id="admin-orders-count">Showing ${orders.length} orders</p>
    </section>
    <section class="admin-table-shell">
      <table class="admin-table admin-management-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Total</th><th>Payment</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="admin-orders-tbody"></tbody>
      </table>
    </section>
  `);
  renderAdminOrderRows();
}

function renderAdminMessages(selectedId = null) {
  const page = $('#admin-messages-page');
  if (!page) return;
  const threads = getAdminInbox();
  const selected = threads.find(thread => thread.id === Number(selectedId)) || threads[0];
  if (selected) selected.unread = false;

  page.innerHTML = adminShell('Customer Messages', 'Chat with your customers', `
    <div class="admin-messenger-card">
      <aside class="admin-conversation-list">
        <div class="admin-search-field compact"><span>⌕</span><input type="search" placeholder="Search conversations..."></div>
        <div class="admin-thread-list">
          ${threads.map(thread => `
            <button class="admin-thread-item ${thread.id === selected.id ? 'active' : ''}" onclick="renderAdminMessages(${thread.id})">
              <span class="admin-avatar">${escapeHTML(thread.customer.name.split(' ').map(part => part[0]).join('').slice(0,2))}</span>
              <span><strong>${escapeHTML(thread.customer.name)}</strong><small>${escapeHTML(thread.time)}</small><em>${escapeHTML(thread.messages[thread.messages.length - 1].text)}</em><b>${escapeHTML(thread.orderId)}</b></span>
              ${thread.unread ? '<i>New</i>' : ''}
            </button>
          `).join('')}
        </div>
      </aside>
      <section class="admin-chat-pane">
        <header>
          <span class="admin-avatar large">${escapeHTML(selected.customer.name.split(' ').map(part => part[0]).join('').slice(0,2))}</span>
          <div><h2>${escapeHTML(selected.customer.name)}</h2><p>${escapeHTML(selected.orderId)}</p></div>
        </header>
        <div class="admin-chat-history" id="admin-chat-history">
          ${selected.messages.map(message => `
            <div class="admin-chat-bubble ${message.sender === 'admin' ? 'admin-reply' : 'customer-reply'}">
              <p>${escapeHTML(message.text)}</p><span>${escapeHTML(message.time)}</span>
            </div>
          `).join('')}
        </div>
        <div class="admin-chat-input">
          <input id="admin-reply-input" type="text" placeholder="Type your message..." onkeydown="if(event.key==='Enter'){sendAdminReply(${selected.id})}">
          <button class="btn btn-primary btn-icon" onclick="sendAdminReply(${selected.id})">✈</button>
        </div>
      </section>
    </div>
  `);
  const chat = $('#admin-chat-history');
  if (chat) chat.scrollTop = chat.scrollHeight;
}

function sendAdminReply(threadId) {
  const input = $('#admin-reply-input');
  const text = input?.value.trim();
  if (!input || !text) return;
  const thread = getAdminInbox().find(item => item.id === Number(threadId));
  if (!thread) return;
  thread.messages.push({ sender: 'admin', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
  input.value = '';
  renderAdminMessages(threadId);
  showToast('Reply added to this demo inbox.');
}

function renderAdminAnalytics() {
  const page = $('#admin-analytics-page');
  if (!page) return;
  const orders = allOrders();
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const avgOrder = orders.length ? Math.round(revenue / orders.length) : 0;
  const topProducts = [...PRODUCTS_DATA].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  const categories = ['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books'];
  const categoryValues = [125000, 98000, 87000, 65000, 45000];
  const maxCategory = Math.max(...categoryValues);

  page.innerHTML = adminShell('Analytics & Insights', 'Track your business performance and growth', `
    <div class="admin-stats-grid">
      ${adminMetricCard('Total Revenue', formatPrice(revenue), '↗ +18.2% vs last period', 'teal', adminIcon('sales'))}
      ${adminMetricCard('Total Orders', orders.length, '↗ +12.5% vs last period', 'blue', adminIcon('orders'))}
      ${adminMetricCard('Avg Order Value', formatPrice(avgOrder), '↗ +5.3% vs last period', 'purple', adminIcon('package'))}
      ${adminMetricCard('Conversion Rate', '3.2%', '↘ -0.8% vs last period', 'cyan', adminIcon('trend'))}
    </div>
    <div class="admin-dashboard-grid">
      <section class="admin-card admin-chart-card"><h2>${adminIcon('trend')} Revenue Trend</h2>${createAdminLineChart([145000, 165000, 192000, 178000, 215000, 248000], ['Jan','Feb','Mar','Apr','May','Jun'], { max: 260000 })}</section>
      <section class="admin-card admin-chart-card"><h2>Customer Acquisition</h2>${createAdminBarChart([45, 55, 62, 59, 68, 75], [75, 92, 105, 96, 121, 138], ['Jan','Feb','Mar','Apr','May','Jun'])}<div class="admin-legend"><span><i class="legend-a"></i>New Customers</span><span><i class="legend-b"></i>Returning</span></div></section>
    </div>
    <div class="admin-dashboard-grid lower-grid">
      <section class="admin-card"><h2>Category Performance</h2>
        ${categories.map((category, index) => `
          <div class="admin-progress-row"><div><strong>${escapeHTML(category)}</strong><b>${formatPrice(categoryValues[index])}</b><em class="${index === 3 ? 'down' : ''}">${index === 3 ? '↘ 3.1%' : `↗ ${[12.5,8.3,15.2,3.1,5.7][index]}%`}</em></div><span><i style="width:${Math.round((categoryValues[index]/maxCategory)*100)}%"></i></span></div>
        `).join('')}
      </section>
      <section class="admin-card"><h2>Top Selling Products</h2>
        <div class="admin-top-products">
          ${topProducts.map((product, index) => `<div><span>#${index + 1}</span><strong>${escapeHTML(product.name)}</strong><small>${product.reviews * 12} sold</small><b>${formatPrice(product.price * product.reviews)}</b></div>`).join('')}
        </div>
      </section>
    </div>
  `, `<button class="btn btn-primary admin-top-btn" onclick="showToast('Report export can be connected to backend.', 'info')">⇩ Export Report</button>`);
}

function renderAdminFlashSales() {
  const page = $('#admin-flash-sales-page');
  if (!page) return;
  const flashProducts = PRODUCTS_DATA.filter(product => product.isFlashSale);
  page.innerHTML = adminShell('Flash Sales Management', 'Create and manage flash sales campaigns', `
    <section class="admin-campaign-card active">
      <div class="admin-campaign-head">
        <div><h2>${adminIcon('flash')} Weekend Mega Sale <span>Active</span></h2><p>📅 ${formatDate(new Date())} - ${formatDate(new Date(Date.now() + 86400000))} &nbsp;&nbsp; ◷ 12:00 AM - 11:59 PM</p></div>
        <div class="admin-campaign-discount"><strong>30%</strong><span>Discount</span></div>
        <div class="admin-campaign-actions"><button class="admin-icon-btn">Ⅱ</button><button class="admin-icon-btn">🗑</button></div>
      </div>
      <div class="admin-campaign-body"><h3>Products in Sale (${flashProducts.length})</h3><button class="btn btn-outline" onclick="openFlashSaleModal()">+ Add Products</button></div>
    </section>
    <section class="admin-campaign-card scheduled">
      <div class="admin-campaign-head">
        <div><h2>${adminIcon('flash')} Spring Collection Launch <span>Scheduled</span></h2><p>📅 ${formatDate(new Date(Date.now() + 4*86400000))} - ${formatDate(new Date(Date.now() + 7*86400000))} &nbsp;&nbsp; ◷ 10:00 AM - 11:59 PM</p></div>
        <div class="admin-campaign-discount"><strong>25%</strong><span>Discount</span></div>
        <div class="admin-campaign-actions"><button class="admin-icon-btn">▶</button><button class="admin-icon-btn">🗑</button></div>
      </div>
      <div class="admin-campaign-body"><h3>Products in Sale (3)</h3><button class="btn btn-outline" onclick="openFlashSaleModal()">+ Add Products</button></div>
    </section>
  `, `<button class="btn btn-primary admin-orange-btn" onclick="openFlashSaleModal()">⚡ Create Flash Sale</button>`);
}

function openFlashSaleModal() {
  closeAdminModal();
  ADMIN_SELECTED_FLASH_PRODUCTS = new Set();
  const modal = document.createElement('div');
  modal.className = 'admin-modal-overlay';
  modal.id = 'admin-flash-modal';
  modal.innerHTML = `
    <div class="admin-modal-card">
      <button class="admin-modal-close" onclick="closeAdminModal()">×</button>
      <h2>Create New Flash Sale</h2>
      <p>Schedule a flash sale and select products to include</p>
      <form onsubmit="createFlashSale(event)">
        <div class="form-grid">
          <div class="form-group"><label>Sale Name *</label><input required placeholder="e.g., Weekend Mega Sale"></div>
          <div class="form-group"><label>Discount (%) *</label><input type="number" min="1" max="90" value="20" required></div>
        </div>
        <div class="form-grid">
          <div class="form-group"><label>Start Date & Time *</label><input type="datetime-local" required></div>
          <div class="form-group"><label>End Date & Time *</label><input type="datetime-local" required></div>
        </div>
        <label class="admin-modal-label">Select Products for Flash Sale</label>
        <div class="admin-product-picker">
          ${PRODUCTS_DATA.map(product => `
            <button type="button" class="admin-picker-row" data-picker-product="${product.id}" onclick="toggleAdminProductSelection('${product.id}')">
              <span class="admin-toggle"><i></i></span>
              <span><strong>${escapeHTML(product.name)}</strong><small>${formatPrice(product.price)}</small></span>
              <em>${escapeHTML(product.category)}</em>
            </button>
          `).join('')}
        </div>
        <p class="muted"><span id="admin-selected-count">0</span> products selected</p>
        <div class="admin-modal-actions"><button type="button" class="btn btn-outline" onclick="closeAdminModal()">Cancel</button><button class="btn btn-primary" type="submit">Create Flash Sale</button></div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function toggleAdminProductSelection(productId) {
  const row = document.querySelector(`[data-picker-product="${productId}"]`);
  if (ADMIN_SELECTED_FLASH_PRODUCTS.has(productId)) {
    ADMIN_SELECTED_FLASH_PRODUCTS.delete(productId);
    row?.classList.remove('selected');
  } else {
    ADMIN_SELECTED_FLASH_PRODUCTS.add(productId);
    row?.classList.add('selected');
  }
  const count = $('#admin-selected-count');
  if (count) count.textContent = ADMIN_SELECTED_FLASH_PRODUCTS.size;
}

function createFlashSale(event) {
  event.preventDefault();
  if (ADMIN_SELECTED_FLASH_PRODUCTS.size === 0) {
    showToast('Select at least one product for the flash sale.', 'error');
    return;
  }
  closeAdminModal();
  showToast('Flash sale created in demo mode.');
}

function closeAdminModal() {
  const modal = $('#admin-flash-modal');
  if (modal) modal.remove();
}

function adminSettingsTab(tab, activeTab, label, icon = '') {
  return `<button class="admin-settings-tab ${tab === activeTab ? 'active' : ''}" onclick="renderAdminSettings('${tab}')">${icon}${label}</button>`;
}

function adminToggle(on = false) {
  return `<button type="button" class="admin-toggle-switch ${on ? 'on' : ''}" onclick="this.classList.toggle('on')"><span></span></button>`;
}

function renderAdminSettings(activeTab = 'store') {
  const page = $('#admin-settings-page');
  if (!page) return;

  const tabs = `
    <div class="admin-settings-tabs">
      ${adminSettingsTab('store', activeTab, 'Store', '🏬')}
      ${adminSettingsTab('notifications', activeTab, 'Notifications', '🔔')}
      ${adminSettingsTab('payment', activeTab, 'Payment', '$')}
      ${adminSettingsTab('shipping', activeTab, 'Shipping', '🚚')}
      ${adminSettingsTab('security', activeTab, 'Security', '🛡')}
    </div>
  `;

  const content = {
    store: `
      <form class="admin-settings-card" onsubmit="event.preventDefault(); showToast('Store settings saved.')">
        <h2>${adminIcon('settings')} Store Information</h2>
        <div class="admin-settings-body">
          <div class="form-grid"><div class="form-group"><label>Store Name</label><input value="HaatHub"></div><div class="form-group"><label>Store Email</label><input value="admin@haathub.com"></div></div>
          <div class="form-grid"><div class="form-group"><label>Store Phone</label><input value="+880 1711-123456"></div><div class="form-group"><label>Currency</label><select><option>BDT (৳)</option></select></div></div>
          <div class="form-group"><label>Store Address</label><input value="123 Digital Bazar, Dhaka 1212, Bangladesh"></div>
          <div class="form-group"><label>Store Description</label><textarea rows="3">Your Digital হাট - Bangladesh's premier online marketplace</textarea></div>
          <div class="form-grid"><div class="form-group"><label>Products Per Page</label><select><option>12 Products</option></select></div><div class="form-group"><label>Time Zone</label><select><option>Asia/Dhaka (GMT+6)</option></select></div></div>
          <button class="btn btn-primary admin-save-btn">▣ Save Changes</button>
        </div>
      </form>`,
    notifications: `
      <form class="admin-settings-card" onsubmit="event.preventDefault(); showToast('Notification settings saved.')">
        <h2>🔔 Notification Preferences</h2>
        <div class="admin-settings-body admin-switch-list">
          ${['New order alerts', 'Low stock alerts', 'Customer message alerts', 'Flash sale reminders', 'Daily sales summary'].map((item, i) => `<div><span><strong>${item}</strong><small>${i < 3 ? 'Send immediate notification' : 'Send scheduled notification'}</small></span>${adminToggle(i < 3)}</div>`).join('')}
          <button class="btn btn-primary admin-save-btn">▣ Save Changes</button>
        </div>
      </form>`,
    payment: `
      <form class="admin-settings-card" onsubmit="event.preventDefault(); showToast('Payment settings saved.')">
        <h2>$ Payment Methods</h2>
        <div class="admin-settings-body admin-switch-list">
          <div><span><strong>Cash on Delivery (COD)</strong><small>Allow customers to pay on delivery</small></span>${adminToggle(true)}</div>
          <div><span><strong>bKash Payment</strong><small>Enable bKash mobile wallet payments</small></span>${adminToggle(true)}</div>
          <div><span><strong>Nagad Payment</strong><small>Enable Nagad mobile wallet payments</small></span>${adminToggle(false)}</div>
          <div><span><strong>SSLCommerz Gateway</strong><small>Enable SSLCommerz payment gateway</small></span>${adminToggle(false)}</div>
          <button class="btn btn-primary admin-save-btn">▣ Save Changes</button>
        </div>
      </form>`,
    shipping: `
      <form class="admin-settings-card" onsubmit="event.preventDefault(); showToast('Shipping settings saved.')">
        <h2>🚚 Shipping Configuration</h2>
        <div class="admin-settings-body">
          <div class="form-grid"><div class="form-group"><label>Standard Shipping Cost (৳)</label><input value="60"><small>Delivery in 5-7 business days</small></div><div class="form-group"><label>Express Shipping Cost (৳)</label><input value="120"><small>Delivery in 2-3 business days</small></div></div>
          <div class="form-group"><label>Free Shipping Threshold (৳)</label><input value="1500"><small>Orders above this amount get free shipping</small></div>
          <div class="admin-info-box"><strong>Current Setup:</strong> Free shipping on orders ৳1500+, otherwise ৳60 standard or ৳120 express.</div>
          <button class="btn btn-primary admin-save-btn">▣ Save Changes</button>
        </div>
      </form>`,
    security: `
      <form class="admin-settings-card" onsubmit="event.preventDefault(); showToast('Security settings saved.')">
        <h2>🛡 Security & Privacy</h2>
        <div class="admin-settings-body admin-switch-list">
          <div><span><strong>Two-Factor Authentication</strong><small>Add an extra layer of security to your account</small></span>${adminToggle(false)}</div>
          <div class="form-group"><label>Session Timeout (minutes)</label><select><option>30 minutes</option><option>60 minutes</option><option>120 minutes</option></select><small>Auto-logout after inactivity</small></div>
          <button class="btn btn-primary admin-save-btn">▣ Save Changes</button>
        </div>
      </form>`
  };

  page.innerHTML = adminShell('Settings', 'Manage your store configuration and preferences', `${tabs}${content[activeTab] || content.store}`);
}

// ========================================
// MESSAGE WIDGET
// ========================================

function toggleMessageWidget() {
  const widget = $('#message-widget');
  const chat = $('#message-chat');
  if (!widget || !chat) return;

  APP_STATE.messageWidgetOpen = !APP_STATE.messageWidgetOpen;
  chat.classList.toggle('hidden', !APP_STATE.messageWidgetOpen);
  chat.style.display = APP_STATE.messageWidgetOpen ? 'flex' : '';
  widget.style.display = APP_STATE.messageWidgetOpen ? 'none' : '';
}

function appendChatMessage(text, type = 'user') {
  const messages = $('#chat-messages');
  if (!messages) return;

  const row = document.createElement('div');
  row.className = `chat-message ${type === 'user' ? 'user-message' : 'admin-message'}`;
  row.innerHTML = `
    <div class="message-bubble">
      <p>${escapeHTML(text)}</p>
      <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  `;
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {
  const input = $('#chat-input-field');
  const text = input?.value.trim();
  if (!input || !text) return;

  appendChatMessage(text, 'user');
  input.value = '';

  if (APP_STATE.isLoggedIn && APP_STATE.userRole !== 'admin') {
    try {
      await apiFetch('messages.php?action=send', { subject: 'Customer Support', message: text });
    } catch (error) {
      console.warn('Message API fallback:', error.message);
    }
  }

  setTimeout(() => {
    appendChatMessage('Thank you for your message. Our support team will get back to you shortly.', 'admin');
  }, 700);
}

// ========================================
// EVENT BINDINGS
// ========================================

function bindStaticEvents() {
  $('#login-trigger')?.addEventListener('click', () => {
    if (APP_STATE.isLoggedIn) handleLogout();
    else showLoginModal();
  });

  $('#profile-menu-btn')?.addEventListener('click', () => {
    if (!APP_STATE.isLoggedIn) showLoginModal('user');
    else if (APP_STATE.userRole === 'admin') navigateTo('admin-dashboard');
    else navigateTo('profile');
  });

  $('#wishlist-btn')?.addEventListener('click', () => {
    if (!APP_STATE.isLoggedIn) showLoginModal('user');
    else navigateTo('profile');
  });

  $('#message-widget')?.addEventListener('click', toggleMessageWidget);
  $('#close-chat')?.addEventListener('click', toggleMessageWidget);
  $('#send-message')?.addEventListener('click', sendMessage);
  $('#chat-input-field')?.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });

  $('#mobile-search-toggle')?.addEventListener('click', () => $('#mobile-search-bar')?.classList.remove('hidden'));
  $('#close-mobile-search')?.addEventListener('click', () => $('#mobile-search-bar')?.classList.add('hidden'));

  ['desktop-search', 'mobile-search'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.addEventListener('input', event => handleSearchInput(event.target.value, true));
  });

  $('#products-search')?.addEventListener('input', event => handleSearchInput(event.target.value));
  $('#clear-products-search')?.addEventListener('click', () => {
    APP_STATE.filters.searchQuery = '';
    $('#products-search').value = '';
    renderProductListing();
  });

  $('#sort-select')?.addEventListener('change', event => {
    APP_STATE.filters.sortBy = event.target.value;
    renderProductListing();
  });

  $('#price-max')?.addEventListener('input', event => {
    APP_STATE.filters.priceRange[1] = Number(event.target.value);
    renderProductListing();
  });

  $$('.rating-filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const rating = Number(button.dataset.rating);
      APP_STATE.filters.minRating = APP_STATE.filters.minRating === rating ? 0 : rating;
      renderProductListing();
    });
  });

  $('#flash-sale-only')?.addEventListener('change', event => {
    APP_STATE.filters.onlyFlashSale = event.target.checked;
    renderProductListing();
  });

  ['clear-filters-btn', 'clear-all-filters'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', clearAllFilters);
  });

  $('#newsletter-form')?.addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
    showToast('Subscribed successfully.');
  });
}

// expose functions used by inline onclick attributes
window.navigateTo = navigateTo;
window.filterByCategory = filterByCategory;
window.setCategory = setCategory;
window.clearAllFilters = clearAllFilters;
window.addToCart = addToCart;
window.addToCartFromDetails = addToCartFromDetails;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.showLoginModal = showLoginModal;
window.closeLoginModal = closeLoginModal;
window.renderLoginModal = renderLoginModal;
window.handleLogout = handleLogout;
window.sendMessage = sendMessage;

// ========================================
// INITIALIZATION
// ========================================

let appInitialized = false;

async function initApp() {
  if (appInitialized) return;
  appInitialized = true;
  loadState();
  await loadServerState();
  bindStaticEvents();
  updateCartBadge();
  updateWishlistBadge();
  updateUserMenu();
  renderHome();
  updateCountdowns();
  navigateTo('home');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
  window.addEventListener('load', initApp);
  setTimeout(initApp, 0);
} else {
  initApp();
}
