/* ============================================
   鲜品小店 - 应用逻辑
   ============================================ */

// ==================== 数据管理 ====================

const STORAGE_KEY = 'eshopData';

function getDefaultData() {
  return {
    products: [],
    orders: [],
    points: {},
    checkins: {},
    referrals: {},
    users: {},
    categories: ['牛羊肉', '卤货', '鸭货']
  };
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...getDefaultData(), ...JSON.parse(raw) };
  } catch (e) {}
  return getDefaultData();
}

function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

let appData = loadData();

function persist() { saveData(appData); }

// ==================== 工具函数 ====================

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function fmtMoney(v) {
  return '¥' + Number(v).toFixed(2);
}

function genPickupCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function now() { return new Date().toISOString(); }

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return '刚刚';
  if (min < 60) return `${min}分钟前`;
  const hrs = Math.floor(min / 60);
  if (hrs < 24) return `${hrs}小时前`;
  return `${Math.floor(hrs / 24)}天前`;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ==================== 全局状态变量 ====================

let cart = []; // [{ productId, name, price, quantity }]
let currentRole = 'customer';
let currentCategory = '全部';
let currentOrderStatus = '全部';
let currentMerchantOrderStatus = '全部';
let pointsPhone = '';
let pointsHistoryFilter = 'income';

// ==================== 初始化示例数据 ====================

function addSampleData() {
  appData.products = [
    { id: genId(), name: '酱牛肉', category: '牛羊肉', price: 68, unit: '斤', stock: 20, image: '🥩', desc: '秘制酱料，慢火卤制', isActive: true },
    { id: genId(), name: '卤牛腱', category: '牛羊肉', price: 78, unit: '斤', stock: 15, image: '🥓', desc: '精选牛腱子肉', isActive: true },
    { id: genId(), name: '羊肉卷', category: '牛羊肉', price: 58, unit: '斤', stock: 30, image: '🐑', desc: '新鲜羊肉片', isActive: true },
    { id: genId(), name: '卤猪蹄', category: '卤货', price: 35, unit: '只', stock: 25, image: '🍖', desc: '软糯入味', isActive: true },
    { id: genId(), name: '卤鸡爪', category: '卤货', price: 28, unit: '份', stock: 40, image: '🐔', desc: '香辣Q弹', isActive: true },
    { id: genId(), name: '卤肥肠', category: '卤货', price: 45, unit: '斤', stock: 10, image: '🥘', desc: '干净卫生', isActive: true },
    { id: genId(), name: '鸭脖', category: '鸭货', price: 32, unit: '份', stock: 50, image: '🦆', desc: '麻辣鲜香', isActive: true },
    { id: genId(), name: '鸭翅', category: '鸭货', price: 25, unit: '份', stock: 35, image: '🍗', desc: '追剧必备', isActive: true },
    { id: genId(), name: '鸭锁骨', category: '鸭货', price: 22, unit: '份', stock: 30, image: '🦴', desc: '越嚼越香', isActive: true },
  ];
  persist();
}

if (appData.products.length === 0) {
  addSampleData();
}

// 购物车每次页面加载时预填（内存数据，刷新即清空）
if (cart.length === 0 && appData.products.length > 0) {
  const prods = appData.products;
  cart = [
    { productId: prods[0].id, name: prods[0].name, price: prods[0].price, quantity: 2 },
    { productId: prods[4].id, name: prods[4].name, price: prods[4].price, quantity: 1 },
    { productId: prods[7].id, name: prods[7].name, price: prods[7].price, quantity: 3 },
  ];
}

// 模拟订单（仅当无订单时，每次加载检查）
if (appData.orders.length === 0 && appData.products.length > 0) {
  const prods = appData.products;
  const sampleOrders = [
    { customerName: '张大姐', customerPhone: '16866886688', status: '已完成', items: [
      { productId: prods[0]?.id || '', name: '酱牛肉', price: 68, quantity: 2 },
      { productId: prods[3]?.id || '', name: '卤猪蹄', price: 35, quantity: 1 }
    ], note: '多放辣' },
    { customerName: '老王', customerPhone: '13912345678', status: '已支付', items: [
      { productId: prods[1]?.id || '', name: '卤牛腱', price: 78, quantity: 1 },
      { productId: prods[6]?.id || '', name: '鸭脖', price: 32, quantity: 3 }
    ], note: '' },
    { customerName: '小李', customerPhone: '15800001111', status: '待支付', items: [
      { productId: prods[2]?.id || '', name: '羊肉卷', price: 58, quantity: 3 }
    ], note: '晚上6点来取' },
  ];

  sampleOrders.forEach(so => {
    const total = so.items.reduce((s, i) => s + i.price * i.quantity, 0);
    appData.orders.unshift({
      id: genId(), items: so.items, total, customerName: so.customerName,
      customerPhone: so.customerPhone, note: so.note, status: so.status,
      pickupCode: genPickupCode(), createdAt: now()
    });
    if (!appData.points[so.customerPhone]) {
      // 给模拟用户初始积分，让积分抵扣可见
      const initBalance = so.customerPhone === '16866886688' ? 156 : 80;
      appData.points[so.customerPhone] = { balance: initBalance, history: [
        { type: '每日打卡', points: 20, date: now() },
        { type: '分享店铺', points: 15, date: now() },
        { type: '消费赠送（订单）', points: initBalance - 35, date: now() },
      ] };
    }
    if (!appData.users[so.customerPhone]) {
      appData.users[so.customerPhone] = { name: so.customerName, wechatName: so.customerName, registeredAt: now() };
    }
  });
  persist();
}

// 补救：已有用户积分不足时自动补充（兼容旧数据）
let pointsFixed = false;
appData.orders.forEach(o => {
  const pt = appData.points[o.customerPhone];
  if (pt && pt.balance <= 0) {
    pt.balance = o.customerPhone === '16866886688' ? 156 : 80;
    pt.history = pt.history || [];
    if (pt.history.length === 0) {
      pt.history.push({ type: '每日打卡', points: 20, date: now() });
      pt.history.push({ type: '消费赠送（订单）', points: pt.balance - 20, date: now() });
    }
    pointsFixed = true;
  }
});
if (pointsFixed) persist();

// 模拟积分/裂变数据（检测缺失时自动补入）
if (!appData.points['16866886688'] || !appData.points['16866886688'].history.some(h => h.points < 0)) {
  const pt = appData.points['16866886688'] || { balance: 0, history: [] };
  pt.balance = Math.max(pt.balance, 156);
  pt.history = [
    { type: '每日打卡', points: 10, date: now() },
    { type: '分享店铺', points: 5, date: now() },
    { type: '有人通过你的分享关注', points: 3, date: now() },
    { type: '有人通过你的分享注册', points: 5, date: now() },
    { type: '有人通过你的分享下单', points: 10, date: now() },
    { type: '消费赠送（订单）', points: 123, date: now() },
    { type: '积分兑换-抵扣¥5', points: -50, date: now() },
    { type: '积分兑换-抵扣¥3', points: -30, date: now() },
    { type: '活动消耗', points: -20, date: now() },
  ];
  appData.points['16866886688'] = pt;
  if (!appData.users['16866886688']) {
    appData.users['16866886688'] = { name: '张大姐', wechatName: '阿花🌸', registeredAt: now() };
  }
  if (!appData.referrals['16866886688']) {
    appData.referrals['16866886688'] = { views: 28, follows: 8, registrations: 5, orders: 3 };
  }
  persist();
}

// ==================== 购物车 ====================

function addToCart(productId) {
  const p = appData.products.find(p => p.id === productId);
  if (!p) return;
  const existing = cart.find(c => c.productId === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ productId: p.id, name: p.name, price: p.price, quantity: 1 });
  }
  updateCartBadge();
  showToast(`已添加 ${p.name}`);
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.productId !== productId);
  updateCartBadge();
  renderCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.productId === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.productId !== productId);
  }
  updateCartBadge();
  renderCart();
}

function clearCart() {
  cart = [];
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const count = cart.reduce((s, c) => s + c.quantity, 0);
  const badge = document.getElementById('cartBadge');
  const countEl = document.getElementById('cartCount');
  if (count > 0 && currentRole === 'customer') {
    badge.style.display = 'flex';
    countEl.textContent = count;
  } else {
    badge.style.display = 'none';
  }
}

function getCartTotal() {
  return cart.reduce((s, c) => s + c.price * c.quantity, 0);
}

// ==================== 导航 & 角色 ====================

function toggleRole() {
  currentRole = currentRole === 'customer' ? 'merchant' : 'customer';
  const toggle = document.getElementById('roleToggle');
  toggle.textContent = currentRole === 'customer' ? '🏪' : '👤';

  // 切换底部导航
  document.getElementById('navCustomer').style.display = currentRole === 'customer' ? 'flex' : 'none';
  document.getElementById('navMerchant').style.display = currentRole === 'merchant' ? 'flex' : 'none';

  // 购物车角标仅在顾客端显示
  document.getElementById('cartBadge').style.display = currentRole === 'customer' ? 'flex' : 'none';
  updateCartBadge();

  // 切换页面
  if (currentRole === 'customer') {
    switchTab('shop');
  } else {
    switchTab('merchant-analysis');
  }
}

function switchTab(tab) {
  // 重置当前导航栏的活跃按钮
  const navId = currentRole === 'customer' ? 'navCustomer' : 'navMerchant';
  document.querySelectorAll(`#${navId} .nav-btn`).forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`#${navId} .nav-btn[data-tab="${tab}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // 显示对应页面
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + tab);
  if (page) page.classList.add('active');

  // 标题
  const titles = {
    shop: '🥩 鲜品小店', cart: '🛒 购物车', orders: '📋 我的订单', points: '🎁 积分中心',
    'merchant-analysis': '📊 平台分析',
    'merchant-products': '📦 商品管理', 'merchant-orders': '📋 订单管理',
    'merchant-users': '👥 用户管理', 'merchant-points': '⭐ 积分管理'
  };
  document.getElementById('headerTitle').textContent = titles[tab] || '';

  // 角色按钮
  document.getElementById('roleToggle').textContent = currentRole === 'customer' ? '🏪' : '👤';

  // 渲染
  switch (tab) {
    case 'shop': renderShop(); break;
    case 'cart': renderCart(); break;
    case 'orders': renderOrders(); break;
    case 'points': renderPoints(); break;
    case 'merchant-analysis': renderMerchantAnalysis(); break;
    case 'merchant-products': renderMerchantProducts(); break;
    case 'merchant-orders': renderMerchantOrders(); break;
    case 'merchant-users': renderMerchantUsers(); break;
    case 'merchant-points': renderMerchantPoints(); break;
  }
}

// ==================== 1. 店铺 ====================

function renderCategoryTabs() {
  const cats = ['全部', ...appData.categories];
  document.getElementById('categoryTabs').innerHTML = cats.map(cat =>
    `<button class="cat-tab ${currentCategory === cat ? 'active' : ''}" data-cat="${cat}" onclick="filterCategory('${cat}', this)">${cat === '全部' ? '🌐 全部' : cat}</button>`
  ).join('');
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderShop();
}

function renderShop() {
  renderCategoryTabs();
  const search = (document.getElementById('shopSearch').value || '').trim().toLowerCase();

  let products = currentCategory === '全部'
    ? appData.products.filter(p => p.isActive !== false)
    : appData.products.filter(p => p.category === currentCategory && p.isActive !== false);

  if (search) {
    products = products.filter(p => p.name.toLowerCase().includes(search));
  }

  document.getElementById('productGrid').innerHTML = products.length === 0
    ? '<div class="cart-empty" style="grid-column:1/-1"><div class="empty-icon">📦</div><p>暂无商品</p></div>'
    : products.map(p => `
      <div class="product-card">
        <div class="product-image">${p.imageData ? `<img src="${p.imageData}" style="max-width:100%;max-height:80px;border-radius:8px;">` : (p.image || '📦')}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${fmtMoney(p.price)}<span style="font-size:11px;font-weight:400">/${p.unit}</span></div>
        ${p.desc ? `<div class="product-desc">${p.desc}</div>` : ''}
        <button class="btn-add-cart" onclick="addToCart('${p.id}')">加入购物车</button>
      </div>
    `).join('');
}

// ==================== 2. 购物车 ====================

function renderCart() {
  const list = document.getElementById('cartList');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  list.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">${fmtMoney(c.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateCartQty('${c.productId}', -1)">−</button>
        <span class="qty-num">${c.quantity}</span>
        <button class="qty-btn" onclick="updateCartQty('${c.productId}', 1)">+</button>
      </div>
      <button class="btn btn-danger btn-sm" onclick="removeFromCart('${c.productId}')">删除</button>
    </div>
  `).join('');

  document.getElementById('cartTotal').textContent = fmtMoney(getCartTotal());
}

// ==================== 3. 下单 ====================

function showCheckoutModal() {
  if (cart.length === 0) { showToast('购物车为空'); return; }
  document.getElementById('checkoutName').value = '';
  document.getElementById('checkoutPhone').value = '';
  document.getElementById('checkoutNote').value = '';

  document.getElementById('checkoutSummary').innerHTML = `
    ${cart.map(c => `<div class="item-row"><span>${c.name} ×${c.quantity}</span><span>${fmtMoney(c.price * c.quantity)}</span></div>`).join('')}
    <div class="total-row item-row"><span>合计</span><span>${fmtMoney(getCartTotal())}</span></div>
  `;

  openModal('checkoutModal');
}

function submitOrder() {
  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const note = document.getElementById('checkoutNote').value.trim();

  if (!name) { showToast('请输入姓名'); return; }
  if (!phone || !/^1\d{10}$/.test(phone)) { showToast('请输入正确的手机号'); return; }

  const total = getCartTotal();
  const order = {
    id: genId(),
    items: cart.map(c => ({ productId: c.productId, name: c.name, price: c.price, quantity: c.quantity })),
    total,
    customerName: name,
    customerPhone: phone,
    note,
    status: '待支付',
    pickupCode: genPickupCode(),
    createdAt: now()
  };

  appData.orders.unshift(order);

  // 消费积分（自己）
  addPoints(phone, Math.floor(total), `消费赠送（订单 #${order.id.slice(-6)}）`);

  // 裂变返积分：如果有人推荐了这个用户，推荐人按订单金额×5%×10获得积分
  const refPhone = getReferrer(phone);
  if (refPhone && refPhone !== phone) {
    const refPoints = Math.floor(total * 0.5); // 金额×5%×10 = 金额×0.5
    if (refPoints > 0) {
      addPoints(refPhone, refPoints, `用户${phone}通过你的分享下单 ¥${total.toFixed(0)}`);
      if (!appData.referrals[refPhone]) appData.referrals[refPhone] = { views: 0, follows: 0, registrations: 0, orders: 0 };
      appData.referrals[refPhone].orders++;
    }
  }

  // 记录该用户被推荐关系
  markReferred(phone);

  clearCart();
  persist();
  closeModal('checkoutModal');
  showToast('下单成功！请完成支付');
  switchTab('orders');
}

// ==================== 4. 订单 ====================

function filterOrders(status, btn) {
  currentOrderStatus = status;
  document.querySelectorAll('.order-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderOrders();
}

function renderOrders() {
  const searchPhone = document.getElementById('orderSearchPhone').value.trim();

  let orders = [...appData.orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  if (searchPhone) {
    orders = orders.filter(o => o.customerPhone.includes(searchPhone));
  }
  if (currentOrderStatus !== '全部') {
    orders = orders.filter(o => o.status === currentOrderStatus);
  }

  document.getElementById('orderList').innerHTML = orders.length === 0
    ? '<div class="cart-empty"><div class="empty-icon">📋</div><p>暂无订单</p></div>'
    : orders.map(o => `
      <div class="order-card">
        <div class="order-header">
          <span class="order-code">🏷️ 取货码：${o.pickupCode}</span>
          <span class="order-status status-${o.status}">${o.status}</span>
        </div>
        <div class="order-items">
          ${o.items.map(i => `<div class="order-item-row"><span>${i.name} ×${i.quantity}</span><span>${fmtMoney(i.price * i.quantity)}</span></div>`).join('')}
        </div>
        <div class="order-total">合计 ${fmtMoney(o.total)}</div>
        <div class="order-customer">👤 ${o.customerName} | 📱 ${o.customerPhone}</div>
        ${o.note ? `<div class="order-customer">📝 ${o.note}</div>` : ''}
        ${o.status === '待支付' ? `<div class="order-actions"><button class="btn btn-primary btn-sm btn-block" onclick="showPayModal('${o.id}', ${o.total})">💳 去支付</button></div>` : ''}
        <div class="order-time">${timeAgo(o.createdAt)}</div>
      </div>
    `).join('');
}

let currentPayMethod = '微信余额';

function showPayModal(orderId, amount) {
  currentPayMethod = '微信余额';
  document.getElementById('payOrderId').value = orderId;
  document.getElementById('payAmount').textContent = `支付金额：${fmtMoney(amount)}`;
  document.getElementById('redeemPoints').value = '';
  document.getElementById('redeemInfo').style.display = 'none';

  // 重置支付方式按钮
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('active'));
  const defaultBtn = document.querySelector('.pay-method[data-method="微信余额"]');
  if (defaultBtn) defaultBtn.classList.add('active');

  // 积分抵扣
  const phone = appData.orders.find(o => o.id === orderId)?.customerPhone || '';
  const pt = appData.points[phone] || { balance: 0 };
  const maxPoints = Math.min(pt.balance, Math.floor(amount * 10));
  if (pt.balance >= 10) {
    document.getElementById('pointsRedeemGroup').style.display = 'block';
    document.getElementById('availablePoints').textContent = pt.balance;
    document.getElementById('maxRedeem').textContent = fmtMoney(maxPoints / 10);
    document.getElementById('redeemPoints').max = maxPoints;
    document.getElementById('redeemPoints').value = '';
    document.getElementById('redeemInfo').style.display = 'none';
  } else {
    document.getElementById('pointsRedeemGroup').style.display = 'none';
  }

  openModal('payModal');
}

function selectPayMethod(method, btn) {
  currentPayMethod = method;
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function updateRedeemAmount() {
  const orderId = document.getElementById('payOrderId').value;
  const order = appData.orders.find(o => o.id === orderId);
  if (!order) return;
  const inputEl = document.getElementById('redeemPoints');
  let redeemPts = parseInt(inputEl.value) || 0;
  const maxRedeem = parseInt(inputEl.max) || 0;
  // 不强制覆盖输入值，只在展示信息时做取整
  const validPts = Math.min(redeemPts - (redeemPts % 10), maxRedeem);
  const discount = validPts / 10;
  document.getElementById('payAmount').textContent = `支付金额：${fmtMoney(order.total - discount)}`;
  if (validPts > 0) {
    document.getElementById('redeemInfo').style.display = 'block';
    document.getElementById('redeemInfo').textContent = `积分抵扣：-¥${discount.toFixed(2)}（消耗${validPts}积分）`;
  } else {
    document.getElementById('redeemInfo').style.display = 'none';
  }
  // 光标位置保持不变
  inputEl.dataset.lastValidPts = validPts;
}

function confirmPay() {
  const orderId = document.getElementById('payOrderId').value;
  const order = appData.orders.find(o => o.id === orderId);
  if (!order) return;

  // 取整处理积分
  let redeemPts = parseInt(document.getElementById('redeemPoints').value) || 0;
  const maxRedeem = parseInt(document.getElementById('redeemPoints').max) || 0;
  redeemPts = Math.min(redeemPts - (redeemPts % 10), maxRedeem);
  order.status = '已支付';
  order.payMethod = currentPayMethod;

  // 消耗积分
  if (redeemPts > 0 && appData.points[order.customerPhone]) {
    appData.points[order.customerPhone].balance -= redeemPts;
    appData.points[order.customerPhone].history.push({
      type: `积分抵扣（订单）`, points: -redeemPts, date: now()
    });
    order.redeemPoints = redeemPts;
    order.actualPay = order.total - redeemPts / 10;
  }

  persist();
  closeModal('payModal');
  renderOrders();
  if (currentRole === 'merchant') renderMerchantOrders();
  showToast(`支付成功！${redeemPts > 0 ? ' 已抵扣' + redeemPts + '积分' : ''}`);
}

function confirmPickup(orderId) {
  const order = appData.orders.find(o => o.id === orderId);
  if (!order) return;
  if (!confirm(`确认顾客 ${order.customerName}（取货码：${order.pickupCode}）已自提取货？`)) return;
  order.status = '已完成';
  persist();
  renderOrders();
  if (currentRole === 'merchant') renderMerchantOrders();
  showToast('已确认自提');
}

// ==================== 5. 积分中心 ====================

function switchPointsHistory(filter) {
  pointsHistoryFilter = filter;
  renderPoints();
}

function loginPoints() {
  const phone = document.getElementById('pointsPhone').value.trim();
  if (!phone || !/^1\d{10}$/.test(phone)) { showToast('请输入正确的手机号'); return; }
  pointsPhone = phone;
  if (!appData.points[phone]) {
    appData.points[phone] = { balance: 0, history: [] };
    persist();
  }
  document.getElementById('pointsLogin').style.display = 'none';
  document.getElementById('pointsMain').style.display = 'block';
  renderPoints();
}

function getPointsData() {
  return appData.points[pointsPhone] || { balance: 0, history: [] };
}

function addPoints(phone, amount, reason) {
  if (!appData.points[phone]) {
    appData.points[phone] = { balance: 0, history: [] };
  }
  appData.points[phone].balance += amount;
  appData.points[phone].history.push({ type: reason, points: amount, date: now() });
}

function dailyCheckin() {
  if (!pointsPhone) { showToast('请先登录'); return; }
  const today = todayStr();
  if (appData.checkins[pointsPhone] === today) {
    showToast('今天已经打卡过了~');
    return;
  }
  appData.checkins[pointsPhone] = today;
  addPoints(pointsPhone, 10, '每日打卡');
  persist();
  renderPoints();
  showToast('打卡成功！+10积分');
}

function shareShop() {
  try {
    if (!pointsPhone) { showToast('请先点击"进入积分中心"登录'); return; }

    const today = todayStr();
    const ptData = getPointsData();
    const todayShares = (ptData.history || []).filter(
      h => h.type === '分享店铺' && h.date.startsWith(today)
    ).length;

    if (todayShares >= 3) { showToast('今天分享已达上限（3次）'); return; }

    if (!appData.referrals[pointsPhone]) {
      appData.referrals[pointsPhone] = { views: 0, follows: 0, registrations: 0, orders: 0 };
    }

    const doShare = () => {
      try {
        addPoints(pointsPhone, 5, '分享店铺');
        appData.referrals[pointsPhone].views += Math.floor(Math.random() * 5) + 1;
        if (Math.random() > 0.6) { appData.referrals[pointsPhone].follows++; addPoints(pointsPhone, 10, '有人通过你的分享关注'); }
        if (Math.random() > 0.8) { appData.referrals[pointsPhone].registrations++; addPoints(pointsPhone, 50, '有人通过你的分享注册'); }
        if (Math.random() > 0.85) { appData.referrals[pointsPhone].orders++; addPoints(pointsPhone, Math.floor((Math.random() * 200 + 50) * 0.5), '有人通过你的分享下单'); }
        persist();
        renderPoints();
        showToast('分享成功！+5积分，下拉查看裂变数据');
      } catch(e) { console.error(e); showToast('处理出错，请重试'); }
    };

    const shareUrl = window.location.href.split('?')[0] + '?ref=' + pointsPhone;
    const shareText = `🥩鲜品小店-推荐人:${pointsPhone}`;

    // 尝试原生分享（移动端/HTTPS）
    if (navigator.share) {
      navigator.share({ title: '🥩 鲜品小店', text: shareText, url: shareUrl })
        .then(() => doShare())
        .catch(() => {}); // 用户取消分享，不触发积分
    } else {
      // 桌面端/file协议：弹窗展示链接
      showShareResultModal(shareUrl);
    }
  } catch(e) { console.error(e); showToast('分享失败，请重试'); }
}

function showShareResultModal(url) {
  document.getElementById('pointsDetailTitle').textContent = '📤 分享店铺';
  document.getElementById('pointsDetailBody').innerHTML = `
    <div style="text-align:center;padding:10px 0;">
      <div style="font-size:50px;margin-bottom:10px;">📤</div>
      <p style="font-size:14px;margin-bottom:12px;">将以下链接分享给朋友</p>
      <div style="background:var(--bg);padding:12px;border-radius:8px;word-break:break-all;font-size:12px;color:var(--primary);margin-bottom:12px;" id="shareUrlText">${url}</div>
      <button class="btn btn-primary btn-block" onclick="copyAndReward()">📋 复制链接并领取积分</button>
      <p style="font-size:11px;color:var(--text-secondary);margin-top:8px;">分享给朋友后，下方裂变数据将自动增长</p>
    </div>
  `;
  // 暂存回调参数
  window._pendingShareUrl = url;
  openModal('pointsDetailModal');
}

function copyAndReward() {
  const url = window._pendingShareUrl;
  const copy = () => {
    addPoints(pointsPhone, 5, '分享店铺');
    if (!appData.referrals[pointsPhone]) appData.referrals[pointsPhone] = { views: 0, follows: 0, registrations: 0, orders: 0 };
    appData.referrals[pointsPhone].views += Math.floor(Math.random() * 5) + 1;
    if (Math.random() > 0.6) { appData.referrals[pointsPhone].follows++; addPoints(pointsPhone, 10, '有人通过你的分享关注'); }
    if (Math.random() > 0.8) { appData.referrals[pointsPhone].registrations++; addPoints(pointsPhone, 50, '有人通过你的分享注册'); }
    if (Math.random() > 0.85) { appData.referrals[pointsPhone].orders++; addPoints(pointsPhone, Math.floor((Math.random() * 200 + 50) * 0.5), '有人通过你的分享下单'); }
    persist();
    closeModal('pointsDetailModal');
    renderPoints();
    showToast('分享成功！+5积分');
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(copy).catch(copy);
  } else {
    copy();
  }
}

function renderPoints() {
  if (!pointsPhone) return;

  const pt = getPointsData();
  document.getElementById('pointsBalance').textContent = pt.balance;
  document.getElementById('pointsRedeemValue').textContent = fmtMoney(pt.balance / 10);

  // 打卡按钮状态
  const checkinBtn = document.getElementById('checkinBtn');
  if (appData.checkins[pointsPhone] === todayStr()) {
    checkinBtn.classList.add('disabled');
    checkinBtn.querySelector('.points-btn-reward').textContent = '今日已打卡';
  } else {
    checkinBtn.classList.remove('disabled');
    checkinBtn.querySelector('.points-btn-reward').textContent = '+10积分';
  }

  // 裂变数据
  const ref = appData.referrals[pointsPhone] || { views: 0, follows: 0, registrations: 0, orders: 0 };
  document.getElementById('referralGrid').innerHTML = `
    <div class="referral-item">
      <div class="referral-item-icon">👁️</div>
      <div class="referral-item-count">${ref.views}</div>
      <div class="referral-item-label">浏览量</div>
    </div>
    <div class="referral-item">
      <div class="referral-item-icon">⭐</div>
      <div class="referral-item-count">${ref.follows}</div>
      <div class="referral-item-label">关注数</div>
      <div class="referral-item-points">+${ref.follows * 3}分</div>
    </div>
    <div class="referral-item">
      <div class="referral-item-icon">📝</div>
      <div class="referral-item-count">${ref.registrations}</div>
      <div class="referral-item-label">注册数</div>
      <div class="referral-item-points">+${ref.registrations * 5}分</div>
    </div>
    <div class="referral-item">
      <div class="referral-item-icon">🛒</div>
      <div class="referral-item-count">${ref.orders}</div>
      <div class="referral-item-label">下单数</div>
      <div class="referral-item-points">+${ref.orders * 10}分</div>
    </div>
  `;

  // 积分历史（收入/消耗切换）
  const allHistory = [...(pt.history || [])].reverse();
  const filterIncome = pointsHistoryFilter === 'income';
  const history = filterIncome
    ? allHistory.filter(h => h.points > 0)
    : allHistory.filter(h => h.points < 0);

  const incomeCount = allHistory.filter(h => h.points > 0).length;
  const consumeCount = allHistory.filter(h => h.points < 0).length;

  document.getElementById('pointsHistory').innerHTML = `
    <h4>📜 积分记录</h4>
    <div class="points-filter-tabs">
      <button class="points-filter-btn ${filterIncome ? 'active' : ''}" onclick="switchPointsHistory('income')">📥 积分收入 (${incomeCount})</button>
      <button class="points-filter-btn ${!filterIncome ? 'active' : ''}" onclick="switchPointsHistory('consume')">📤 积分消耗 (${consumeCount})</button>
    </div>
    ${history.length === 0 ? '<p style="color:#94a3b8;font-size:13px;padding:10px 0;">暂无记录</p>' : ''}
    ${history.map(h => `
      <div class="points-log-item">
        <span>${h.type}</span>
        <span class="points-log-${h.points >= 0 ? 'positive' : 'negative'}">${h.points >= 0 ? '+' : ''}${h.points}</span>
        <span style="font-size:11px;color:var(--text-secondary)">${timeAgo(h.date)}</span>
      </div>
    `).join('')}
  `;
}

// ==================== 6. 商家端：商品管理 ====================

// ==================== 分类管理 ====================

function renderCategoryList() {
  document.getElementById('categoryList').innerHTML = appData.categories.map((cat, i) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);">
      <span>${cat}</span>
      <button class="btn btn-danger btn-sm" onclick="removeCategory(${i})">删除</button>
    </div>
  `).join('');
}

function addCategory() {
  const name = document.getElementById('newCategoryName').value.trim();
  if (!name) { showToast('请输入分类名称'); return; }
  if (appData.categories.includes(name)) { showToast('分类已存在'); return; }
  appData.categories.push(name);
  persist();
  document.getElementById('newCategoryName').value = '';
  renderCategoryList();
  renderShop();
  renderCategoryTabs();
  showToast('分类已添加');
}

function removeCategory(idx) {
  if (!confirm('删除分类不会删除该分类下的商品，确定？')) return;
  appData.categories.splice(idx, 1);
  if (currentCategory === appData.categories[idx]) currentCategory = '全部';
  persist();
  renderCategoryList();
  renderShop();
  showToast('分类已删除');
}

// ==================== 商家端搜索增强 ====================

function renderMerchantProducts() {
  const search = (document.getElementById('merchantProductSearch').value || '').trim().toLowerCase();
  let products = [...appData.products];
  if (search) products = products.filter(p => p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search));

  document.getElementById('adminProductList').innerHTML = products.map(p => `
    <div class="admin-product-item">
      <div class="admin-product-img">${p.imageData ? `<img src="${p.imageData}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;">` : (p.image || '📦')}</div>
      <div class="admin-product-info">
        <div class="admin-product-name">${p.name}</div>
        <div class="admin-product-meta">${p.category} | ${fmtMoney(p.price)}/${p.unit} | 库存: ${p.stock}</div>
      </div>
      <div class="admin-product-actions">
        <button class="btn btn-primary btn-sm" onclick="editProduct('${p.id}')">编辑</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}')">删除</button>
      </div>
    </div>
  `).join('');
}

// ==================== 7. 商家端：订单管理 ====================

function filterMerchantOrders(status, btn) {
  currentMerchantOrderStatus = status;
  document.querySelectorAll('#page-merchant-orders .order-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMerchantOrders();
}

function renderMerchantOrders() {
  const search = (document.getElementById('merchantOrderSearch').value || '').trim().toLowerCase();
  let orders = [...appData.orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  if (currentMerchantOrderStatus !== '全部') orders = orders.filter(o => o.status === currentMerchantOrderStatus);
  if (search) orders = orders.filter(o => o.customerPhone.includes(search) || o.customerName.toLowerCase().includes(search) || o.pickupCode.includes(search));

  document.getElementById('merchantOrderList').innerHTML = orders.length === 0
    ? '<div class="cart-empty"><div class="empty-icon">📋</div><p>暂无订单</p></div>'
    : orders.map(o => `
      <div class="order-card">
        <div class="order-header">
          <span class="order-code">🏷️ 取货码：${o.pickupCode}</span>
          <span class="order-status status-${o.status}">${o.status}</span>
        </div>
        <div class="order-items">${o.items.map(i => `<div class="order-item-row"><span>${i.name} ×${i.quantity}</span><span>${fmtMoney(i.price * i.quantity)}</span></div>`).join('')}</div>
        <div class="order-total">合计 ${fmtMoney(o.total)}</div>
        <div class="order-customer">👤 ${o.customerName} | 📱 ${o.customerPhone}</div>
        ${o.note ? `<div class="order-customer">📝 ${o.note}</div>` : ''}
        <div class="order-actions">
          ${o.status === '待支付' ? `<button class="btn btn-success btn-sm" onclick="payOrder('${o.id}')">确认支付</button>` : ''}
          ${o.status === '已支付' ? `<button class="btn btn-primary btn-sm" onclick="confirmPickup('${o.id}')">确认自提</button>` : ''}
        </div>
        <div class="order-time">${timeAgo(o.createdAt)}</div>
      </div>
    `).join('');
}

// ==================== 图片上传 ====================

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 500 * 1024) { showToast('图片不能超过500KB'); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('productImageData').value = e.target.result;
    document.getElementById('imageUploadPlaceholder').style.display = 'none';
    const preview = document.getElementById('imageUploadPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

// ==================== 商品管理 ====================

function showProductModal(editId) {
  // 重置上传区域
  document.getElementById('productImageData').value = '';
  document.getElementById('imageUploadPlaceholder').style.display = 'block';
  document.getElementById('imageUploadPreview').style.display = 'none';
  document.getElementById('productImageFile').value = '';

  // 动态更新分类下拉选项
  const catSelect = document.getElementById('productCategory');
  catSelect.innerHTML = appData.categories.map(c => `<option value="${c}">${c}</option>`).join('');

  if (editId) {
    const p = appData.products.find(p => p.id === editId);
    if (!p) return;
    document.getElementById('productEditId').value = editId;
    document.getElementById('productName').value = p.name;
    catSelect.value = p.category;
    document.getElementById('productUnit').value = p.unit;
    document.getElementById('productPrice').value = p.price;
    document.getElementById('productStock').value = p.stock;
    document.getElementById('productImage').value = p.image || '';
    document.getElementById('productDesc').value = p.desc || '';
    document.getElementById('productModalTitle').textContent = '编辑商品';
    if (p.imageData) {
      document.getElementById('productImageData').value = p.imageData;
      document.getElementById('imageUploadPlaceholder').style.display = 'none';
      const preview = document.getElementById('imageUploadPreview');
      preview.src = p.imageData;
      preview.style.display = 'block';
    }
  } else {
    document.getElementById('productEditId').value = '';
    document.getElementById('productName').value = '';
    catSelect.value = appData.categories[0] || '';
    document.getElementById('productUnit').value = '斤';
    document.getElementById('productPrice').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productImage').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('productModalTitle').textContent = '添加商品';
  }
  openModal('productModal');
}

function editProduct(id) { showProductModal(id); }

function saveProduct() {
  const id = document.getElementById('productEditId').value;
  const name = document.getElementById('productName').value.trim();
  const category = document.getElementById('productCategory').value;
  const unit = document.getElementById('productUnit').value;
  const price = parseFloat(document.getElementById('productPrice').value) || 0;
  const stock = parseInt(document.getElementById('productStock').value) || 0;
  const image = document.getElementById('productImage').value.trim();
  const imageData = document.getElementById('productImageData').value;
  const desc = document.getElementById('productDesc').value.trim();

  if (!name) { showToast('请输入商品名称'); return; }
  if (price <= 0) { showToast('请输入有效价格'); return; }

  const product = {
    id: id || genId(),
    name, category, price, unit, stock,
    image: image || '📦',
    imageData: imageData || '',
    desc,
    isActive: true
  };

  if (id) {
    const idx = appData.products.findIndex(p => p.id === id);
    if (idx >= 0) appData.products[idx] = product;
  } else {
    appData.products.push(product);
  }

  persist();
  closeModal('productModal');
  renderMerchantProducts();
  renderShop();
  showToast(id ? '商品已更新' : '商品已添加');
}

function deleteProduct(id) {
  if (!confirm('确定删除这个商品吗？')) return;
  appData.products = appData.products.filter(p => p.id !== id);
  persist();
  renderMerchantProducts();
  renderShop();
  showToast('商品已删除');
}

// ==================== 8. 商家端：用户管理 ====================

function renderMerchantUsers() {
  // 从订单和积分记录中收集所有用户
  const userMap = {};
  appData.orders.forEach(o => {
    if (!userMap[o.customerPhone]) {
      const u = appData.users[o.customerPhone] || {};
      userMap[o.customerPhone] = { phone: o.customerPhone, name: u.name || o.customerName, wechatName: u.wechatName || '', orderCount: 0, totalSpent: 0 };
    }
    userMap[o.customerPhone].orderCount++;
    if (o.status === '已完成') userMap[o.customerPhone].totalSpent += o.total;
  });
  Object.keys(appData.points).forEach(phone => {
    if (!userMap[phone]) {
      const u = appData.users[phone] || {};
      userMap[phone] = { phone, name: u.name || '未知', wechatName: u.wechatName || '', orderCount: 0, totalSpent: 0 };
    }
    userMap[phone].points = appData.points[phone].balance;
  });
  Object.keys(userMap).forEach(phone => {
    if (!userMap[phone].name || userMap[phone].name === '未知') {
      const u = appData.users[phone] || {};
      userMap[phone].name = u.name || '未知';
      userMap[phone].wechatName = u.wechatName || userMap[phone].wechatName || '';
    }
  });

  const users = Object.values(userMap).sort((a, b) => (b.totalSpent || 0) - (a.totalSpent || 0));

  const search = (document.getElementById('merchantUserSearch').value || '').trim().toLowerCase();
  const filteredUsers = search ? users.filter(u => u.phone.includes(search) || u.name.toLowerCase().includes(search) || (u.wechatName || '').toLowerCase().includes(search)) : users;

  document.getElementById('userList').innerHTML = filteredUsers.length === 0
    ? '<div class="cart-empty"><div class="empty-icon">👥</div><p>暂无用户数据</p></div>'
    : filteredUsers.map(u => `
      <div class="user-card">
        <div class="user-card-header">
          <div>
            <div class="user-card-phone">📱 ${u.phone}</div>
            <div class="user-card-name">${u.name}${u.wechatName ? ` | 💬 ${u.wechatName}` : ''}</div>
          </div>
        </div>
        <div class="user-card-stats">
          <div class="user-stat">
            <div class="user-stat-label">下单次数</div>
            <div class="user-stat-val">${u.orderCount || 0}</div>
          </div>
          <div class="user-stat">
            <div class="user-stat-label">消费总额</div>
            <div class="user-stat-val" style="color:var(--primary)">${fmtMoney(u.totalSpent || 0)}</div>
          </div>
          <div class="user-stat">
            <div class="user-stat-label">积分余额</div>
            <div class="user-stat-val" style="color:var(--success)">${u.points || 0}</div>
          </div>
          <div class="user-stat">
            <div class="user-stat-label">裂变人数</div>
            <div class="user-stat-val" style="color:#8b5cf6">${((appData.referrals[u.phone] || {}).registrations || 0) + ((appData.referrals[u.phone] || {}).orders || 0)}</div>
          </div>
        </div>
      </div>
    `).join('');
}

// ==================== 9. 商家端：积分管理 ====================

function renderMerchantPoints() {
  const search = (document.getElementById('merchantPointsSearch').value || '').trim().toLowerCase();
  let items = Object.entries(appData.points).sort((a, b) => b[1].balance - a[1].balance);
  if (search) items = items.filter(([phone]) => phone.includes(search));

  document.getElementById('pointsMgmtList').innerHTML = items.length === 0
    ? '<div class="cart-empty"><div class="empty-icon">⭐</div><p>暂无积分数据</p></div>'
    : items.map(([phone, pt]) => {
      const u = appData.users[phone] || {};
      const ref = appData.referrals[phone] || {};
      return `
      <div class="points-mgmt-item">
        <div>
          <div class="points-mgmt-phone">${u.name || '未知'} | 📱 ${phone}</div>
          <div style="font-size:11px;color:var(--text-secondary)">
            打卡${pt.history.filter(h => h.type === '每日打卡').length}次 |
            分享${pt.history.filter(h => h.type === '分享店铺').length}次 |
            裂变${ref.registrations || 0}人
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="points-mgmt-balance">⭐ ${pt.balance}</span>
          <button class="btn btn-primary btn-sm" onclick="showPointsDetail('${phone}')">详情</button>
        </div>
      </div>`;
    }).join('');
}

function showPointsDetail(phone) {
  const pt = appData.points[phone] || { balance: 0, history: [] };
  const u = appData.users[phone] || {};
  const ref = appData.referrals[phone] || {};
  const checkins = appData.checkins[phone] || '';

  document.getElementById('pointsDetailTitle').textContent = `${u.name || '未知'} - 积分详情`;
  document.getElementById('pointsDetailBody').innerHTML = `
    <div style="margin-bottom:12px;font-size:14px;">
      👤 ${u.name || '未知'}${u.wechatName ? ' | 💬 ' + u.wechatName : ''} | 📱 ${phone}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;">
      <div class="referral-item"><div class="referral-item-icon">⭐</div><div class="referral-item-count">${pt.balance}</div><div class="referral-item-label">当前积分</div></div>
      <div class="referral-item"><div class="referral-item-icon">📅</div><div class="referral-item-count">${pt.history.filter(h => h.type === '每日打卡').length}</div><div class="referral-item-label">打卡次数</div></div>
      <div class="referral-item"><div class="referral-item-icon">📤</div><div class="referral-item-count">${pt.history.filter(h => h.type === '分享店铺').length}</div><div class="referral-item-label">分享次数</div></div>
    </div>
    <div class="referral-grid">
      <div class="referral-item"><div class="referral-item-icon">👁️</div><div class="referral-item-count">${ref.views || 0}</div><div class="referral-item-label">浏览量</div></div>
      <div class="referral-item"><div class="referral-item-icon">⭐</div><div class="referral-item-count">${ref.follows || 0}</div><div class="referral-item-label">关注数</div></div>
      <div class="referral-item"><div class="referral-item-icon">📝</div><div class="referral-item-count">${ref.registrations || 0}</div><div class="referral-item-label">注册数</div></div>
      <div class="referral-item"><div class="referral-item-icon">🛒</div><div class="referral-item-count">${ref.orders || 0}</div><div class="referral-item-label">下单数</div></div>
    </div>
    <h4 style="margin:12px 0 8px;">📜 积分明细</h4>
    ${[...pt.history].reverse().map(h => `
      <div class="points-log-item">
        <span>${h.type}</span>
        <span class="points-log-${h.points >= 0 ? 'positive' : 'negative'}">${h.points >= 0 ? '+' : ''}${h.points}</span>
        <span style="font-size:11px;color:var(--text-secondary)">${timeAgo(h.date)}</span>
      </div>
    `).join('') || '<p style="color:#94a3b8;font-size:13px;">暂无记录</p>'}
  `;
  openModal('pointsDetailModal');
}

// ==================== 分析功能 ====================

let currentAnalysisTab = 'product';

function renderMerchantAnalysis() {
  const orders = appData.orders || [];
  const usersMap = collectAllUsers();
  const totalUsers = Object.keys(usersMap).length;
  const totalOrders = orders.length;
  const paidOrders = orders.filter(o => o.status === '已支付' || o.status === '已完成');
  const completedOrders = orders.filter(o => o.status === '已完成');
  const revenue = paidOrders.reduce((s, o) => s + (o.actualPay || o.total || 0), 0);
  const avgOrder = paidOrders.length > 0 ? revenue / paidOrders.length : 0;

  // 核心指标
  document.getElementById('analysisUserCount').textContent = totalUsers;
  document.getElementById('analysisOrderCount').textContent = totalOrders;
  document.getElementById('analysisRevenue').textContent = fmtMoney(revenue);
  document.getElementById('analysisAvgOrder').textContent = fmtMoney(avgOrder);

  // 初始化banner高亮
  document.querySelectorAll('.analysis-banner').forEach(b => b.classList.remove('active'));
  const activeBanner = document.querySelector(`.analysis-banner[data-analysis="${currentAnalysisTab}"]`);
  if (activeBanner) activeBanner.classList.add('active');

  // 渲染当前tab的详情
  renderAnalysisDetail();
}

function switchAnalysisTab(tab, el) {
  currentAnalysisTab = tab;
  document.querySelectorAll('.analysis-banner').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderAnalysisDetail();
}

function renderAnalysisDetail() {
  const container = document.getElementById('analysisDetailContainer');
  const orders = appData.orders || [];
  switch (currentAnalysisTab) {
    case 'product': container.innerHTML = renderAnalysisProduct(orders); break;
    case 'order-status': container.innerHTML = renderAnalysisOrderStatus(orders); break;
    case 'order-trend': container.innerHTML = renderAnalysisOrderTrend(orders); break;
    case 'payment': container.innerHTML = renderAnalysisPayment(orders); break;
    case 'referral': container.innerHTML = renderAnalysisReferral(); break;
    case 'points-rank': container.innerHTML = renderAnalysisPointsRank(); break;
  }
}

/* ===== 商品销售 ===== */
function renderAnalysisProduct(orders) {
  const productSales = {};
  orders.forEach(o => {
    (o.items || []).forEach(item => {
      const key = item.productId || item.name;
      if (!productSales[key]) productSales[key] = { name: item.name, quantity: 0, revenue: 0 };
      productSales[key].quantity += item.quantity || 0;
      productSales[key].revenue += (item.price || 0) * (item.quantity || 0);
    });
  });
  const sortedProducts = Object.values(productSales).sort((a, b) => b.quantity - a.quantity).slice(0, 10);
  const maxQty = Math.max(...sortedProducts.map(p => p.quantity), 1);
  if (sortedProducts.length === 0) {
    return '<div class="analysis-card visible"><div class="analysis-card-title">🏆 商品销售排行 Top 10</div><div style="text-align:center;padding:20px;color:var(--text-secondary);font-size:13px;">暂无销售数据</div></div>';
  }
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">🏆 商品销售排行 Top 10</div>
    <div class="bar-chart">
      ${sortedProducts.map((p, i) => `
        <div class="bar-item">
          <div class="bar-rank rank-${Math.min(i + 1, 4)}">${i + 1}</div>
          <div class="bar-label" style="flex:0.6;">${p.name}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${(p.quantity / maxQty * 100).toFixed(1)}%;background:${i === 0 ? '#FF3B30' : i === 1 ? '#FF9500' : i === 2 ? '#007AFF' : '#8E8E93'};"></div>
          </div>
          <div class="bar-value">${p.quantity}份 / ${fmtMoney(p.revenue)}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

/* ===== 订单状态 ===== */
function renderAnalysisOrderStatus(orders) {
  const statusCounts = { '待支付': 0, '已支付': 0, '已完成': 0 };
  orders.forEach(o => { if (statusCounts[o.status] !== undefined) statusCounts[o.status]++; });
  const maxStatus = Math.max(...Object.values(statusCounts), 1);
  const total = Object.values(statusCounts).reduce((s, v) => s + v, 0);
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">📊 订单状态分布</div>
    <div class="bar-chart">
      ${Object.entries(statusCounts).map(([status, count]) => `
        <div class="bar-item">
          <div class="bar-label">${status}</div>
          <div class="bar-track">
            <div class="bar-fill status-${status}" style="width:${(count / maxStatus * 100).toFixed(1)}%"></div>
          </div>
          <div class="bar-value">${count}单</div>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center;margin-top:10px;font-size:12px;color:var(--text-secondary);">总订单：${total} 单</div>
  </div>`;
}

/* ===== 订单趋势 ===== */
function renderAnalysisOrderTrend(orders) {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dayStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const dayLabel = `${d.getMonth()+1}/${d.getDate()}`;
    const dayOrders = orders.filter(o => o.createdAt && o.createdAt.startsWith(dayStr));
    const dayRevenue = dayOrders.filter(o => o.status === '已支付' || o.status === '已完成').reduce((s, o) => s + (o.actualPay || o.total || 0), 0);
    days.push({ label: dayLabel, count: dayOrders.length, revenue: dayRevenue });
  }
  const maxDayCount = Math.max(...days.map(d => d.count), 1);
  const maxDayRevenue = Math.max(...days.map(d => d.revenue), 1);
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">📈 每日订单趋势（近7天）</div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">📦 订单数</div>
    <div class="bar-chart bar-chart-horizontal">
      ${days.map(d => `
        <div class="bar-item">
          <div class="bar-label" style="min-width:44px;">${d.label}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${(d.count / maxDayCount * 100).toFixed(1)}%;background:var(--blue);"></div>
          </div>
          <div class="bar-value">${d.count}单</div>
        </div>
      `).join('')}
    </div>
    <div style="font-size:13px;color:var(--text-secondary);margin:12px 0 8px;">💰 收入</div>
    <div class="bar-chart bar-chart-horizontal">
      ${days.map(d => `
        <div class="bar-item">
          <div class="bar-label" style="min-width:44px;">${d.label}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${(d.revenue / maxDayRevenue * 100).toFixed(1)}%;background:var(--green);"></div>
          </div>
          <div class="bar-value">${fmtMoney(d.revenue)}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

/* ===== 支付方式 ===== */
function renderAnalysisPayment(orders) {
  const paidOrders = orders.filter(o => o.status === '已支付' || o.status === '已完成');
  const payMethods = {};
  paidOrders.forEach(o => {
    const method = o.payMethod || '未记录';
    payMethods[method] = (payMethods[method] || 0) + 1;
  });
  const maxPay = Math.max(...Object.values(payMethods), 1);
  const payColors = { '微信余额': '#34C759', '银行卡': '#007AFF', '支付宝': '#1677FF', '现金': '#FF9500' };
  if (Object.keys(payMethods).length === 0) {
    return '<div class="analysis-card visible"><div class="analysis-card-title">💳 支付方式分布</div><div style="text-align:center;padding:20px;color:var(--text-secondary);font-size:13px;">暂无支付数据</div></div>';
  }
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">💳 支付方式分布</div>
    <div class="bar-chart">
      ${Object.entries(payMethods).map(([method, count]) => `
        <div class="bar-item">
          <div class="bar-label">${method}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${(count / maxPay * 100).toFixed(1)}%;background:${payColors[method] || '#8E8E93'}"></div>
          </div>
          <div class="bar-value">${count}笔</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

/* ===== 裂变分析 ===== */
function renderAnalysisReferral() {
  const refTotal = { views: 0, follows: 0, registrations: 0, orders: 0 };
  Object.values(appData.referrals || {}).forEach(r => {
    refTotal.views += r.views || 0;
    refTotal.follows += r.follows || 0;
    refTotal.registrations += r.registrations || 0;
    refTotal.orders += r.orders || 0;
  });
  const maxRef = Math.max(...Object.values(refTotal), 1);
  if (Object.values(refTotal).every(v => v === 0)) {
    return '<div class="analysis-card visible"><div class="analysis-card-title">📤 裂变数据总览</div><div style="text-align:center;padding:20px;color:var(--text-secondary);font-size:13px;">暂无裂变数据</div></div>';
  }
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">📤 裂变数据总览</div>
    <div class="bar-chart">
      <div class="bar-item">
        <div class="bar-label">👁️ 浏览量</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(refTotal.views / maxRef * 100).toFixed(1)}%;background:#8B5CF6;"></div></div>
        <div class="bar-value">${refTotal.views}</div>
      </div>
      <div class="bar-item">
        <div class="bar-label">⭐ 关注数</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(refTotal.follows / maxRef * 100).toFixed(1)}%;background:#8B5CF6;"></div></div>
        <div class="bar-value">${refTotal.follows}</div>
      </div>
      <div class="bar-item">
        <div class="bar-label">📝 注册数</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(refTotal.registrations / maxRef * 100).toFixed(1)}%;background:#8B5CF6;"></div></div>
        <div class="bar-value">${refTotal.registrations}</div>
      </div>
      <div class="bar-item">
        <div class="bar-label">🛒 下单数</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(refTotal.orders / maxRef * 100).toFixed(1)}%;background:#8B5CF6;"></div></div>
        <div class="bar-value">${refTotal.orders}</div>
      </div>
    </div>
  </div>`;
}

/* ===== 用户积分排行 ===== */
function renderAnalysisPointsRank() {
  const pointsRanking = Object.entries(appData.points || {})
    .sort((a, b) => b[1].balance - a[1].balance)
    .slice(0, 10);
  const maxPoints = Math.max(...pointsRanking.map(([, p]) => p.balance), 1);
  if (pointsRanking.length === 0) {
    return '<div class="analysis-card visible"><div class="analysis-card-title">⭐ 用户积分排行 Top 10</div><div style="text-align:center;padding:20px;color:var(--text-secondary);font-size:13px;">暂无积分数据</div></div>';
  }
  return `<div class="analysis-card visible">
    <div class="analysis-card-title">⭐ 用户积分排行 Top 10</div>
    <div class="bar-chart">
      ${pointsRanking.map(([phone, pt], i) => {
        const u = appData.users[phone] || {};
        return `
        <div class="bar-item">
          <div class="bar-rank rank-${Math.min(i + 1, 4)}">${i + 1}</div>
          <div class="bar-label" style="flex:0.6;">${u.name || phone.slice(0, 7)}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${(pt.balance / maxPoints * 100).toFixed(1)}%;background:${i === 0 ? '#FF3B30' : i === 1 ? '#FF9500' : i === 2 ? '#007AFF' : '#5856D6'};"></div>
          </div>
          <div class="bar-value">${pt.balance}分</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function collectAllUsers() {
  const userMap = {};
  appData.orders.forEach(o => {
    if (!userMap[o.customerPhone]) {
      const u = appData.users[o.customerPhone] || {};
      userMap[o.customerPhone] = { phone: o.customerPhone, name: u.name || o.customerName };
    }
  });
  Object.keys(appData.points || {}).forEach(phone => {
    if (!userMap[phone]) {
      const u = appData.users[phone] || {};
      userMap[phone] = { phone, name: u.name || '未知' };
    }
  });
  return userMap;
}

function getReferrer(phone) {
  const stored = localStorage.getItem('ref_' + phone);
  if (stored) return stored;
  const params = new URLSearchParams(window.location.search);
  return params.get('ref') || '';
}

function markReferred(phone) {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (ref && ref !== phone) {
    localStorage.setItem('ref_' + phone, ref);
  }
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// ==================== 初始化 ====================

function init() {
  updateCartBadge();
  renderShop();
}

document.addEventListener('DOMContentLoaded', init);
