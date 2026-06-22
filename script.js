        // База товаров (названия + фото Tehnoboom)
        const productsData = {
            atlant4021: {
                name: "Атлант ХМ 4021-000", price: 25000,
                descShort: "Вместительный холодильник с нижней морозильной камерой.",
                descFull: "<p>Надежный холодильник серии SOFT LINE.</p>",
                features: "<ul><li>Габариты: 60х186х63 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlanthm-4021-000-500x500.jpg"]
            },
            atlant4010: {
                name: "Атлант ХМ 4010-022", price: 23500,
                descShort: "Компактная модель высотой 161 см.",
                descFull: "<p>Идеально для небольших кухонь.</p>",
                features: "<ul><li>Габариты: 60х161х63 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlant%C2%A0hm-4010-022-500x500.jpg"]
            },
            atlant4210: {
                name: "Атлант ХМ 4210-000", price: 27200,
                descShort: "Узкий холодильник серии COMPACT.",
                descFull: "<p>Ширина корпуса 54.5 см.</p>",
                features: "<ul><li>Габариты: 54.5х161х60 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlanthm-4210-000-500x500.jpg"]
            },
            atlant4300: {
                name: "Атлант МХМ-2835-08", price: 33000,
                descShort: "Полностью встраиваемая модель.",
                descFull: "<p>Скрывается за мебельным фасадом.</p>",
                features: "<ul><li>Тип: встраиваемый</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlant%C2%A0mhm-2835-08serebristyj%C2%A0-500x500.jpg"]
            },
            atlant4401: {
                name: "Атлант ХМ 4421-000 N", price: 35500,
                descShort: "Система Full No Frost.",
                descFull: "<p>Не требует ручной разморозки.</p>",
                features: "<ul><li></li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlanthm-4421-000-n-500x500.jpg"]
            },
            atlant4601: {
                name: "Атлант ХМ 4621-101", price: 38900,
                descShort: "Серия ADVANCE, скрытые ручки.",
                descFull: "<p>Минималистичный дизайн.</p>",
                features: "<ul><li>Класс энергопотребления: A+</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/atlant/atltant2/holodilnikhm4621-101-500x500.jpg"]
            },
            atlant4710: {
                name: "Атлант ХМ-4421-080- N", price: 30200,
                descShort: "Надежная серия CLASSIC.",
                descFull: "<p>Большой объем морозильной камеры.</p>",
                features: "<ul><li>Высота: 192 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlanthm-4421-080-n-500x500.jpg"]
            },
            atlant4811: {
                name: "Атлант ХМ 2819-90", price: 26800,
                descShort: "Морозилка сверху.",
                descFull: "<p>Классическое расположение камер.</p>",
                features: "<ul><li>Габариты: 60х176х63 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlant%C2%A0mhm-2819-90-500x500.jpg"]
            },
            atlant5010: {
                name: "Атлант ХМ 6025-031", price: 42000,
                descShort: "Двухкомпрессорная модель.",
                descFull: "<p>Независимое управление камерами.</p>",
                features: "<ul><li>Объем: 384 л</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/holodilnikatlanthm-6025-031-500x500.jpg"]
            },
            atlant6010: {
                name: "Атлант ХМ 4625-101", price: 55000,
                descShort: "Флагман с сенсорным дисплеем.",
                descFull: "<p>Максимальный функционал.</p>",
                features: "<ul><li>Высота: 206 см</li></ul>",
                images: ["https://tehnoboom.com/image/cache/catalog/holodilniki/atlant/atltant2/holodilnikhm4625-101-500x500.jpg"]
            }
        };

        /* ── ЭФФЕКТЫ SPOTLIGHT И ЧАСТИЦ ── */
        document.querySelectorAll('.product-card').forEach(card => {
            const spot = card.querySelector('.card-spot');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                spot.style.left = (e.clientX - rect.left) + 'px';
                spot.style.top  = (e.clientY - rect.top) + 'px';
            });
        });

        function spawnParticle(btn) {
            const p = document.createElement('div');
            p.classList.add('particle');
            const angle = Math.random() * 2 * Math.PI;
            const distance = 30 + Math.random() * 50;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            const x = Math.random() * btn.offsetWidth;
            const y = Math.random() * btn.offsetHeight;
            p.style.left = x + 'px'; p.style.top = y + 'px';
            const size = 2 + Math.random() * 4;
            p.style.width = size + 'px'; p.style.height = size + 'px';
            btn.appendChild(p);
            p.animate([
                { opacity: 1, transform: `translate(0, 0) scale(1)` },
                { opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(0)` }
            ], { duration: 500 + Math.random() * 400, easing: 'ease-out', fill: 'forwards' }).onfinish = () => p.remove();
        }

        // Исправлен баг: добавлена проверка наличия элемента .spot, чтобы код не прерывался в случае его отсутствия
        function initSpotlightButtons() {
            document.querySelectorAll('.btn-spot').forEach(btn => {
                if(btn.dataset.initialized) return;
                btn.dataset.initialized = "true";
                
                const spot = btn.querySelector('.spot');
                let particleInterval = null;

                btn.addEventListener('mousemove', (e) => {
                    if(spot) {
                        const rect = btn.getBoundingClientRect();
                        spot.style.left = (e.clientX - rect.left) + 'px';
                        spot.style.top  = (e.clientY - rect.top) + 'px';
                    }
                });

                btn.addEventListener('mouseenter', () => {
                    spawnParticle(btn);
                    particleInterval = setInterval(() => spawnParticle(btn), 80);
                });
                btn.addEventListener('mouseleave', () => clearInterval(particleInterval));
            });
        }
        initSpotlightButtons();

        /* ── КАСТОМНОЕ УВЕДОМЛЕНИЕ ── */
        let notifTimer = null;
        const msgPop = document.getElementById('msg_pop');
        const msgIcon = msgPop.querySelector('i');
        const msgText = msgPop.querySelector('h3');

        function showCustomNotification(message, type = 'success') {
            if (notifTimer) clearTimeout(notifTimer);
            msgPop.classList.remove('fadeInRight', 'fadeOutRight');
            msgPop.style.display = 'none';
            void msgPop.offsetWidth;

            switch(type) {
                case 'success': msgIcon.className = 'fa-solid fa-circle-check'; msgIcon.style.color = '#4CAF50'; break;
                case 'warning': msgIcon.className = 'fa-solid fa-triangle-exclamation'; msgIcon.style.color = '#FFC107'; break;
                case 'error':   msgIcon.className = 'fa-solid fa-circle-xmark'; msgIcon.style.color = '#dc3545'; break;
                default:        msgIcon.className = 'fa-solid fa-circle-info'; msgIcon.style.color = '#fff';
            }

            msgText.textContent = message;
            msgPop.style.display = 'flex';
            msgPop.classList.add('fadeInRight');

            notifTimer = setTimeout(() => {
                msgPop.classList.remove('fadeInRight');
                msgPop.classList.add('fadeOutRight');
                notifTimer = setTimeout(() => {
                    msgPop.style.display = 'none';
                    msgPop.classList.remove('fadeOutRight');
                }, 400);
            }, 2000);
        }

        /* ── АВТОРИЗАЦИЯ ── */
        const authModal = document.getElementById('authModal');
        const authMessage = document.getElementById('authMessage');
        let isLoggedIn = false;
        let currentUser = { name: '', email: '' };
        let orderHistory = [];

        function openAuthModal(message = '') {
            if (isLoggedIn) { showCustomNotification('Вы уже вошли!', 'warning'); return; }
            if (message) { authMessage.textContent = message; authMessage.style.display = 'block'; }
            else { authMessage.style.display = 'none'; }
            authModal.style.display = 'flex';
        }

        function closeAuthModal() { authModal.style.display = 'none'; }

        function switchAuthTab(event, tab) {
            document.querySelectorAll('.auth-tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`form-${tab}`).classList.add('active');
        }

        function processLogin() {
            const email = document.getElementById('loginEmail').value.trim();
            if (!email) { showCustomNotification('Введите email!', 'warning'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showCustomNotification('Некорректный email!', 'warning'); return; }
            const name = email.split('@')[0] || "Пользователь";
            loginSuccess(name, email);
        }

        function processRegister() {
            const login = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPass').value;
            if (!login) { showCustomNotification('Введите логин!', 'warning'); return; }
            if (!email || !pass) { showCustomNotification('Заполните все поля!', 'warning'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showCustomNotification('Некорректный email!', 'warning'); return; }
            loginSuccess(login, email);
        }

        function loginSuccess(name, email) {
            isLoggedIn = true;
            currentUser = { name, email };
            updateAuthUI();
            closeAuthModal();
            showCustomNotification(`Добро пожаловать, ${name}!`, 'success');
        }

        function logout() {
            isLoggedIn = false;
            currentUser = { name: '', email: '' };
            updateAuthUI();
            showCatalog();
            document.getElementById('miniCart').style.display = 'none';
            showCustomNotification('Вы вышли из аккаунта', 'warning');
        }

        function updateAuthUI() {
            const icon = document.getElementById('profileIcon');
            const text = document.getElementById('profileBtnText');
            const logoutBtn = document.getElementById('logoutBtn');
            if (isLoggedIn) {
                icon.className = 'fa-solid fa-user-check';
                icon.style.color = '#4CAF50';
                text.textContent = currentUser.name;
                logoutBtn.style.display = 'flex';
            } else {
                icon.className = 'fa-regular fa-user';
                icon.style.color = '';
                text.textContent = 'Войти';
                logoutBtn.style.display = 'none';
            }
        }

        function handleProfileClick() {
            if (isLoggedIn) showProfilePage();
            else openAuthModal();
        }

        window.addEventListener('click', (e) => { if (e.target === authModal) closeAuthModal(); });

        /* ── ПРОФИЛЬ И ЗАКАЗЫ ── */
        function showProfilePage() {
            hideAllPages();
            document.getElementById('profilePage').style.display = 'block';
            updateProfileContent();
            switchProfileTab(null, 'info');
        }

        function switchProfileTab(event, tabName) {
            document.querySelectorAll('.profile-tab').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.profile === tabName) btn.classList.add('active');
            });
            document.getElementById('profileInfo').classList.add('nonvisible');
            document.getElementById('profileOrders').classList.add('nonvisible');
            if (tabName === 'info') document.getElementById('profileInfo').classList.remove('nonvisible');
            else if (tabName === 'orders') { document.getElementById('profileOrders').classList.remove('nonvisible'); renderOrderHistory(); }
        }

        function updateProfileContent() {
            document.getElementById('profileName').textContent = currentUser.name || '—';
            document.getElementById('profileEmail').textContent = currentUser.email || '—';
        }

        function renderOrderHistory() {
            const container = document.getElementById('profileOrders');
            if (!orderHistory.length) { container.innerHTML = '<p style="color: rgba(255,255,255,0.5);">У вас пока нет заказов.</p>'; return; }
            let html = '';
            [...orderHistory].reverse().forEach(order => {
                const date = new Date(order.date).toLocaleString('ru-RU');
                const statusClass = order.status === 'Оплачен' ? 'status-paid' : 'status-unpaid';
                const payButton = order.status === 'Не оплачен' ? `<button class="pay-btn" onclick="payOrder('${order.id}')"><i class="fa-solid fa-credit-card"></i> Оплатить</button>` : '';
                html += `
                    <div class="order-card">
                        <div class="order-header"><span><strong>Заказ №${order.id.slice(-6)}</strong></span><span>${date}</span></div>
                        <div class="order-items">${order.items.map(item => `<div>${item.name} — ${item.price.toLocaleString('ru-RU')} ₽</div>`).join('')}</div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                            <span><strong>Итого: ${order.total.toLocaleString('ru-RU')} ₽</strong></span>
                            <span class="order-status ${statusClass}">${order.status}</span>
                        </div>
                        ${payButton}
                    </div>`;
            });
            container.innerHTML = html;
        }

        function addOrderToHistory(items, total) {
            const order = {
                id: 'order_' + Date.now() + Math.random().toString(36).substr(2, 5),
                date: new Date().toISOString(),
                items: [...items],
                total,
                status: 'Не оплачен'
            };
            orderHistory.push(order);
            return order;
        }

        function payOrder(orderId) {
            const order = orderHistory.find(o => o.id === orderId);
            if (order && order.status === 'Не оплачен') {
                order.status = 'Оплачен';
                renderOrderHistory();
                showCustomNotification('Заказ оплачен!', 'success');
            }
        }

        /* ── МАГАЗИН ── */
        let cart = [];

        function addToCart(name, price) {
            if (!isLoggedIn) { openAuthModal('Войдите, чтобы добавлять в корзину.'); return; }
            cart.push({ name, price });
            updateCartUI();
            showCustomNotification(`${name} добавлен в корзину`, 'success');
        }

        function removeFromCart(index) {
            const removed = cart.splice(index, 1)[0];
            updateCartUI();
            showCustomNotification(`${removed.name} удалён из корзины`, 'warning');
        }

        function checkout() {
            if (!isLoggedIn) { openAuthModal('Для оформления заказа войдите.'); return; }
            if (!cart.length) { showCustomNotification('Корзина пуста!', 'warning'); return; }
            const total = cart.reduce((s, i) => s + i.price, 0);
            const newOrder = addOrderToHistory([...cart], total);
            cart = [];
            updateCartUI();
            hideAllPages();
            document.getElementById('profilePage').style.display = 'block';
            updateProfileContent();
            switchProfileTab(null, 'orders');
            document.getElementById('miniCart').style.display = 'none';
            showCustomNotification(`Заказ №${newOrder.id.slice(-6)} оформлен!`, 'success');
        }

        function updateCartUI() {
            document.getElementById('cartCount').innerText = cart.length;
            let miniCartHtml = '', fullCartHtml = '', total = 0;

            const goToCartBtn = document.querySelector('.go-to-cart-btn');
            if (!cart.length) {
                miniCartHtml = 'Корзина пуста';
                fullCartHtml = '<p style="color: rgba(255,255,255,0.5)">Здесь пока ничего нет.</p>';
                if (goToCartBtn) goToCartBtn.style.display = 'none';
            } else {
                if (goToCartBtn) goToCartBtn.style.display = 'block';
                cart.forEach((item, index) => {
                    total += item.price;
                    miniCartHtml += `<div class="mini-cart-item"><span>${item.name}</span><div><span>${item.price} ₽</span><button onclick="removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></button></div></div>`;
                    fullCartHtml += `<div class="cart-list-item"><h3>${item.name}</h3><span><strong>${item.price} ₽</strong></span><button onclick="removeFromCart(${index})">Удалить</button></div>`;
                });
                miniCartHtml += `<div class="mini-cart-total">Итого: ${total} ₽</div>`;
                fullCartHtml += `<h3 style="text-align:right; margin-top:20px; color:#4CAF50; font-size: 24px;">Итого: ${total} ₽</h3>
                <button class="checkout-btn" onclick="checkout()">Оформить заказ</button><div style="clear:both;"></div>`;
            }
            document.getElementById('miniCartContent').innerHTML = miniCartHtml;
            document.getElementById('fullCartContent').innerHTML = fullCartHtml;
        }

        function toggleMiniCart() {
            const miniCart = document.getElementById('miniCart');
            miniCart.style.display = miniCart.style.display === 'block' ? 'none' : 'block';
        }

        function hideAllPages() {
            document.getElementById('catalogPage').style.display = 'none';
            document.getElementById('productDetail').style.display = 'none';
            document.getElementById('cartPage').style.display = 'none';
            document.getElementById('profilePage').style.display = 'none';
        }

        function showCatalog() {
            document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.glass-dropdown');
  const btn = document.getElementById('categoryDropdownBtn');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Закрытие при клике в пустое место
  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
  });
});
            hideAllPages();
            document.getElementById('catalogPage').style.display = 'block';
            document.querySelectorAll('.product-card').forEach(c => c.style.display = 'flex');
            document.getElementById('searchInput').value = '';
        }

        function showDetail(productId) {
            const p = productsData[productId];
            if (!p) return;
            document.getElementById('detailTitle').innerText = p.name;
            document.getElementById('detailDescShort').innerText = p.descShort;
            document.getElementById('detailPrice').innerText = p.price.toLocaleString('ru-RU') + ' ₽';
            document.getElementById('detailTabDesc').innerHTML = p.descFull;
            document.getElementById('detailTabFeat').innerHTML = p.features;
            document.getElementById('detailAddToCart').setAttribute('onclick', `addToCart('${p.name}', ${p.price})`);
            document.getElementById('detailMainImg').src = p.images[0];
            document.getElementById('detailGallery').innerHTML = '';
            hideAllPages();
            document.getElementById('productDetail').style.display = 'block';
            initGlassTabs();
            const detailTabs = document.getElementById('detail-tabs');
            if (detailTabs && detailTabs._glassTabs) detailTabs._glassTabs.activate(0);
            initSpotlightButtons();
        }

        function showCartPage() {
            if (!isLoggedIn) { openAuthModal('Войдите, чтобы увидеть корзину.'); return; }
            hideAllPages();
            document.getElementById('cartPage').style.display = 'block';
            document.getElementById('miniCart').style.display = 'none';
        }

        /* ── LIQUID GLASS TABS ── */
        function GlassTabs(containerEl) {
            this.container = containerEl;
            this.tabs = Array.from(containerEl.querySelectorAll('.glass-tab'));
            this.panels = Array.from(containerEl.querySelectorAll('.glass-tab-panel'));
            this._bind();
        }
        GlassTabs.prototype._bind = function () {
            var self = this;
            this.tabs.forEach(function (tab, i) {
                tab.addEventListener('click', function () { self.activate(i); });
                tab.addEventListener('keydown', function (evt) {
                    if (evt.key === 'ArrowRight') { evt.preventDefault(); var n = (i + 1) % self.tabs.length; self.activate(n); self.tabs[n].focus(); }
                    if (evt.key === 'ArrowLeft')  { evt.preventDefault(); var p = (i - 1 + self.tabs.length) % self.tabs.length; self.activate(p); self.tabs[p].focus(); }
                    if (evt.key === 'Home') { evt.preventDefault(); self.activate(0); self.tabs[0].focus(); }
                    if (evt.key === 'End')  { evt.preventDefault(); self.activate(self.tabs.length - 1); self.tabs[self.tabs.length - 1].focus(); }
                });
            });
        };
        GlassTabs.prototype.activate = function (index) {
            this.tabs.forEach(function (t, i) {
                var on = i === index;
                t.setAttribute('aria-selected', String(on));
                t.setAttribute('tabindex', on ? '0' : '-1');
            });
            this.panels.forEach(function (p, i) {
                i === index ? p.classList.add('is-active') : p.classList.remove('is-active');
            });
        };
        function initGlassTabs() {
            document.querySelectorAll('.glass-tabs').forEach(function (el) {
                if (!el._glassTabs) el._glassTabs = new GlassTabs(el);
            });
        }
        initGlassTabs();

        function searchProducts() {
            const q = document.getElementById('searchInput').value.toLowerCase();
            document.querySelectorAll('.product-card').forEach(card => {
                const name = card.getAttribute('data-name').toLowerCase();
                card.style.display = name.includes(q) ? 'flex' : 'none';
            });
            if (document.getElementById('catalogPage').style.display === 'none' && q.length > 0) showCatalog();
        }

        window.addEventListener('click', function(e) {
            if (!e.target.closest('.user-actions') && e.target.id !== 'cartBtn' && !e.target.closest('#cartBtn')) {
                document.getElementById('miniCart').style.display = 'none';
            }
        });

        updateAuthUI();

