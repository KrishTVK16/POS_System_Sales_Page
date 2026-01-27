// Demo POS JavaScript
const SAMPLE_PRODUCTS = [
  { id: '1', name: 'Artisanal Coffee Beans', category: 'Retail', price: 18.50, stock: 45, image: 'https://picsum.photos/seed/coffee/200/200', tax: 0.08 },
  { id: '2', name: 'Organic Green Tea', category: 'Retail', price: 12.00, stock: 12, image: 'https://picsum.photos/seed/tea/200/200', tax: 0.08 },
  { id: '3', name: 'Camera Tripod Rental', category: 'Events', price: 25.00, stock: 5, image: 'https://picsum.photos/seed/tripod/200/200', tax: 0.10, isRental: true },
  { id: '4', name: 'Wireless Headphones', category: 'Electronics', price: 149.99, stock: 0, image: 'https://picsum.photos/seed/audio/200/200', tax: 0.15 },
  { id: '5', name: 'Smart Watch Pro', category: 'Electronics', price: 299.00, stock: 20, image: 'https://picsum.photos/seed/watch/200/200', tax: 0.15 },
  { id: '6', name: 'Luxury Event Chair', category: 'Events', price: 45.00, stock: 100, image: 'https://picsum.photos/seed/chair/200/200', tax: 0.10, isRental: true },
];

let cart = [];
let search = '';
let discount = 0;

function renderProducts() {
  const container = document.getElementById('products-grid');
  const filtered = SAMPLE_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  
  container.innerHTML = filtered.map(product => `
    <button 
      onclick="addToCart('${product.id}')"
      ${product.stock === 0 ? 'disabled' : ''}
      class="flex flex-col p-6 bg-white dark:bg-slate-900 rounded-[2rem] text-left transition-all hover:scale-[1.02] border-2 border-transparent hover:border-indigo-600 group ${product.stock === 0 ? 'opacity-50 grayscale' : 'shadow-sm shadow-slate-200/50 dark:shadow-none'}"
    >
      <div class="h-32 w-full rounded-2xl mb-6 overflow-hidden">
        <img src="${product.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div class="font-bold text-lg truncate w-full mb-1 dark:text-white">${product.name}</div>
      <div class="text-slate-500 text-sm mb-4">${product.category}</div>
      <div class="flex justify-between items-center mt-auto">
        <span class="text-2xl font-bold text-indigo-600">$${product.price.toFixed(2)}</span>
        <span class="text-xs font-bold px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
          ${product.stock} left
        </span>
      </div>
    </button>
  `).join('');
}

function addToCart(productId) {
  const product = SAMPLE_PRODUCTS.find(p => p.id === productId);
  if (!product || product.stock === 0) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    renderCart();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = cart.reduce((acc, item) => acc + (item.price * item.quantity * item.tax), 0);
  const total = subtotal + tax - discount;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-slate-400 opacity-30">
        <div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <p class="text-lg font-bold">Cart is empty</p>
        <p class="text-sm">Scan items to start checkout</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="flex items-center space-x-4 animate-fade-in">
        <div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0">
          <img src="${item.image}" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold truncate text-base dark:text-white">${item.name}</div>
          <div class="text-sm text-slate-500">$${item.price.toFixed(2)} / unit</div>
        </div>
        <div class="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-700">
          <button onclick="updateQuantity('${item.id}', -1)" class="p-1.5 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
          </button>
          <span class="w-8 text-center text-base font-bold dark:text-white">${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', 1)" class="p-1.5 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
        <div class="font-bold text-lg dark:text-white w-20 text-right">
          $${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    `).join('');
  }
  
  // Update totals
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('complete-payment').disabled = cart.length === 0;
}

function showReceipt() {
  if (cart.length === 0) return;
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = cart.reduce((acc, item) => acc + (item.price * item.quantity * item.tax), 0);
  const total = subtotal + tax - discount;
  
  const receiptItems = cart.map(item => `
    <div class="flex justify-between text-sm font-medium">
      <span class="text-slate-600">${item.quantity}x ${item.name}</span>
      <span class="font-bold text-slate-900">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');
  
  document.getElementById('receipt-items').innerHTML = receiptItems;
  document.getElementById('receipt-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('receipt-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('receipt-total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('receipt-modal').classList.remove('hidden');
}

function closeReceipt() {
  document.getElementById('receipt-modal').classList.add('hidden');
  clearCart();
}

function updateDiscount(value) {
  discount = parseFloat(value) || 0;
  renderCart();
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      search = e.target.value;
      renderProducts();
    });
  }
  
  const discountInput = document.getElementById('discount-input');
  if (discountInput) {
    discountInput.addEventListener('input', (e) => {
      updateDiscount(e.target.value);
    });
  }
  
  renderProducts();
  renderCart();
});
