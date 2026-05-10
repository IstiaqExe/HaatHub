// ========================================
// DATA
// ========================================

const PRODUCTS_DATA = [
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

const ORDERS_DATA = [
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

const MESSAGES_DATA = [
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

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(item => item.id === String(productId));
  if (!product || product.stock <= 0) {
    showToast('Product is not available.', 'error');
    return;
  }

  const existing = APP_STATE.cart.find(item => item.productId === product.id);
  const requestedQuantity = Number(quantity) || 1;

  if (existing) {
    if (existing.quantity + requestedQuantity > product.stock) {
      showToast('Not enough stock available.', 'error');
      return;
    }
    existing.quantity += requestedQuantity;
  } else {
    APP_STATE.cart.push({ productId: product.id, quantity: Math.min(requestedQuantity, product.stock) });
  }

  saveState();
  updateCartBadge();
  showToast(`${product.name} added to cart.`);
}

function addToCartFromDetails(productId) {
  const quantity = Number($('#detail-quantity')?.textContent || 1);
  addToCart(productId, quantity);
}

function removeFromCart(productId) {
  APP_STATE.cart = APP_STATE.cart.filter(item => item.productId !== String(productId));
  saveState();
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart.');
}

function updateCartQuantity(productId, newQuantity) {
  const product = PRODUCTS_DATA.find(item => item.id === String(productId));
  const cartItem = APP_STATE.cart.find(item => item.productId === String(productId));
  if (!product || !cartItem) return;

  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > product.stock) {
    showToast('Not enough stock available.', 'error');
    return;
  }

  cartItem.quantity = newQuantity;
  saveState();
  updateCartBadge();
  renderCart();
}

function toggleWishlist(productId) {
  if (!APP_STATE.isLoggedIn) {
    showToast('Please login to use wishlist.', 'info');
    showLoginModal('user');
    return;
  }

  const id = String(productId);
  const index = APP_STATE.wishlist.indexOf(id);
  if (index >= 0) {
    APP_STATE.wishlist.splice(index, 1);
    showToast('Removed from wishlist.');
  } else {
    APP_STATE.wishlist.push(id);
    showToast('Added to wishlist.');
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

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (!APP_STATE.isLoggedIn) {
    showToast('Please login before checkout.', 'info');
    showLoginModal('user');
    return;
  }

  const formData = new FormData(event.currentTarget);
  const subtotal = calculateCartTotal();
  const deliveryFee = subtotal >= 1000 ? 0 : 60;
  const order = {
    id: `ORD-${Date.now().toString().slice(-8)}`,
    customer: {
      name: formData.get('fullName'),
      phone: formData.get('phone'),
      email: APP_STATE.currentUser?.email || '',
      address: formData.get('address')
    },
    items: APP_STATE.cart.map(item => ({ ...item })),
    total: subtotal + deliveryFee,
    status: 'pending',
    paymentMethod: formData.get('paymentMethod') || 'COD',
    date: new Date().toISOString()
  };

  APP_STATE.orders.push(order);
  APP_STATE.cart = [];
  saveState();
  updateCartBadge();
  showToast('Order placed successfully.');
  navigateTo('profile');
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

function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const role = form.dataset.role || 'user';
  const email = form.elements.email?.value.trim() || '';
  const password = form.elements.password?.value.trim() || '';

  if (!email || !password) {
    showToast('Email and password are required.', 'error');
    return;
  }

  if (role === 'admin' && !(email.toLowerCase() === 'admin@haathub.com' && password === 'admin123')) {
    showToast('Invalid admin credentials.', 'error');
    return;
  }

  APP_STATE.isLoggedIn = true;
  APP_STATE.userRole = role;
  APP_STATE.currentUser = {
    email,
    name: role === 'admin' ? 'HaatHub Admin' : email.split('@')[0]
  };

  saveState();
  updateUserMenu();
  closeLoginModal();
  showToast(role === 'admin' ? 'Admin login successful.' : 'Welcome back.');

  if (role === 'admin') navigateTo('admin-dashboard');
  else if (APP_STATE.currentPage === 'checkout') renderCheckout();
}

function handleLogout() {
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

function allOrders() {
  return [...ORDERS_DATA, ...APP_STATE.orders];
}

function adminShell(title, subtitle, content) {
  return `
    <div class="admin-panel">
      <div class="admin-panel-header">
        <div>
          <p class="product-category">Admin Panel</p>
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
        <button class="btn btn-outline" onclick="handleLogout()">Logout</button>
      </div>
      ${content}
    </div>
  `;
}

function renderAdminDashboard() {
  const page = $('#admin-dashboard-page');
  if (!page) return;

  const orders = allOrders();
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const pending = orders.filter(order => order.status === 'pending').length;
  const lowStock = PRODUCTS_DATA.filter(product => product.stock < 20).length;

  page.innerHTML = adminShell('Dashboard', 'Live overview of your HaatHub store.', `
    <div class="stats-grid">
      <div class="stat-card"><h3>Total Orders</h3><p class="stat-value">${orders.length}</p></div>
      <div class="stat-card"><h3>Total Revenue</h3><p class="stat-value">${formatPrice(revenue)}</p></div>
      <div class="stat-card"><h3>Products</h3><p class="stat-value">${PRODUCTS_DATA.length}</p></div>
      <div class="stat-card"><h3>Pending Orders</h3><p class="stat-value">${pending}</p></div>
    </div>
    <div class="admin-grid-two">
      <section class="admin-card">
        <h2>Recent Orders</h2>
        ${orders.slice(-5).reverse().map(order => `
          <div class="admin-list-row"><span>${order.id}</span><strong>${formatPrice(order.total)}</strong><em class="status-${order.status}">${order.status}</em></div>
        `).join('')}
      </section>
      <section class="admin-card">
        <h2>Store Health</h2>
        <div class="admin-list-row"><span>Low stock products</span><strong>${lowStock}</strong></div>
        <div class="admin-list-row"><span>Support threads</span><strong>${MESSAGES_DATA.length}</strong></div>
        <div class="admin-list-row"><span>Flash sale items</span><strong>${PRODUCTS_DATA.filter(p => p.isFlashSale).length}</strong></div>
      </section>
    </div>
  `);
}

function renderAdminProducts() {
  const page = $('#admin-products-page');
  if (!page) return;
  page.innerHTML = adminShell('Products', 'Inventory and pricing overview.', `
    <div class="admin-card table-card">
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead>
        <tbody>${PRODUCTS_DATA.map(product => `
          <tr>
            <td>${escapeHTML(product.name)}</td>
            <td>${escapeHTML(product.category)}</td>
            <td>${formatPrice(product.price)}</td>
            <td>${product.stock}</td>
            <td><span class="${product.stock > 0 ? 'status-active' : 'status-inactive'}">${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></td>
          </tr>
        `).join('')}</tbody>
      </table>
    </div>
  `);
}

function renderAdminOrders() {
  const page = $('#admin-orders-page');
  if (!page) return;
  page.innerHTML = adminShell('Orders', 'Manage customer orders and fulfillment status.', `
    <div class="admin-card table-card">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>${allOrders().slice().reverse().map(order => `
          <tr>
            <td>${escapeHTML(order.id)}</td>
            <td>${escapeHTML(order.customer?.name || 'Customer')}</td>
            <td>${formatPrice(order.total)}</td>
            <td><span class="status-${order.status}">${escapeHTML(order.status)}</span></td>
            <td>${formatDate(order.date)}</td>
          </tr>
        `).join('')}</tbody>
      </table>
    </div>
  `);
}

function renderAdminMessages() {
  const page = $('#admin-messages-page');
  if (!page) return;
  page.innerHTML = adminShell('Messages', 'Customer support inbox.', `
    <div class="messages-list admin-card">
      ${MESSAGES_DATA.map(thread => `
        <article class="message-card">
          <div class="message-card-head">
            <div><h3>${escapeHTML(thread.subject)}</h3><p>From: ${escapeHTML(thread.customer.name)} (${escapeHTML(thread.customer.email)})</p></div>
            <span class="status-${thread.status}">${escapeHTML(thread.status)}</span>
          </div>
          <div class="message-thread">
            ${thread.messages.map(message => `<p><strong>${message.sender === 'admin' ? 'Admin' : 'Customer'}:</strong> ${escapeHTML(message.text)}</p>`).join('')}
          </div>
          <button class="btn btn-outline btn-sm" onclick="showToast('Reply composer would connect to backend in production.', 'info')">Reply</button>
        </article>
      `).join('')}
    </div>
  `);
}

function renderAdminAnalytics() {
  const page = $('#admin-analytics-page');
  if (!page) return;
  const orders = allOrders();
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const categories = [...new Set(PRODUCTS_DATA.map(product => product.category))];
  const maxStock = Math.max(...PRODUCTS_DATA.map(product => product.stock));

  page.innerHTML = adminShell('Analytics', 'Revenue, category and stock performance.', `
    <div class="stats-grid">
      <div class="stat-card"><h3>Revenue</h3><p class="stat-value">${formatPrice(revenue)}</p></div>
      <div class="stat-card"><h3>Average Order</h3><p class="stat-value">${formatPrice(orders.length ? revenue / orders.length : 0)}</p></div>
      <div class="stat-card"><h3>Conversion Proxy</h3><p class="stat-value">${Math.min(100, Math.round((orders.length / PRODUCTS_DATA.length) * 10))}%</p></div>
      <div class="stat-card"><h3>Support Resolved</h3><p class="stat-value">${MESSAGES_DATA.filter(m => m.status === 'resolved').length}</p></div>
    </div>
    <div class="admin-grid-two">
      <section class="admin-card"><h2>Stock by Category</h2>
        ${categories.map(category => {
          const stock = PRODUCTS_DATA.filter(p => p.category === category).reduce((sum, p) => sum + p.stock, 0);
          const pct = Math.min(100, Math.round((stock / (maxStock * 3)) * 100));
          return `<div class="bar-row"><span>${escapeHTML(category)}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><strong>${stock}</strong></div>`;
        }).join('')}
      </section>
      <section class="admin-card"><h2>Order Status</h2>
        ${['pending', 'shipped', 'delivered'].map(status => {
          const count = orders.filter(order => order.status === status).length;
          const pct = orders.length ? Math.round((count / orders.length) * 100) : 0;
          return `<div class="bar-row"><span>${status}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><strong>${count}</strong></div>`;
        }).join('')}
      </section>
    </div>
  `);
}

function renderAdminFlashSales() {
  const page = $('#admin-flash-sales-page');
  if (!page) return;
  const flashProducts = PRODUCTS_DATA.filter(product => product.isFlashSale);
  page.innerHTML = adminShell('Flash Sales', 'Current limited-time campaigns.', `
    <div class="admin-card table-card">
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Discount</th><th>Sale Price</th><th>Ends In</th><th>Stock</th></tr></thead>
        <tbody>${flashProducts.map(product => `
          <tr>
            <td>${escapeHTML(product.name)}</td>
            <td>${product.discount}%</td>
            <td>${formatPrice(product.price)}</td>
            <td><span data-countdown="${product.flashSaleEndTime}" data-compact="true"></span></td>
            <td>${product.stock}</td>
          </tr>
        `).join('')}</tbody>
      </table>
    </div>
  `);
  updateCountdowns();
}

function renderAdminSettings() {
  const page = $('#admin-settings-page');
  if (!page) return;
  page.innerHTML = adminShell('Settings', 'Store configuration preview.', `
    <form class="admin-card settings-form" onsubmit="event.preventDefault(); showToast('Settings saved locally for demo.', 'success')">
      <div class="form-grid">
        <div class="form-group"><label>Store Name</label><input value="HaatHub"></div>
        <div class="form-group"><label>Support Email</label><input value="support@haathub.com"></div>
      </div>
      <div class="form-grid">
        <div class="form-group"><label>Free Delivery Threshold</label><input value="1000"></div>
        <div class="form-group"><label>Default Payment</label><input value="Cash on Delivery"></div>
      </div>
      <div class="form-group"><label>Announcement</label><textarea rows="3">Free delivery on orders above ৳1000</textarea></div>
      <button class="btn btn-primary" type="submit">Save Settings</button>
    </form>
  `);
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

function sendMessage() {
  const input = $('#chat-input-field');
  const text = input?.value.trim();
  if (!input || !text) return;

  appendChatMessage(text, 'user');
  input.value = '';

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

function initApp() {
  if (appInitialized) return;
  appInitialized = true;
  loadState();
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
