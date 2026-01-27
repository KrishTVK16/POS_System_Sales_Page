
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Trash2, Plus, Minus, 
  Receipt, Wallet, CreditCard, Banknote, 
  X, Printer, Sun, Moon, Home, Store, LayoutDashboard,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../constants';
import { CartItem, Product, Theme } from '../types';

interface DemoPOSProps {
  theme: Theme;
  toggleTheme: () => void;
}

const DemoPOS: React.FC<DemoPOSProps> = ({ theme, toggleTheme }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product: Product) => {
    if (product.stock === 0) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = cart.reduce((acc, item) => acc + (item.price * item.quantity * item.tax), 0);
  const total = subtotal + tax - discount;

  const filteredProducts = SAMPLE_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'}`}>
      {/* Top Header - Standardized to match site logo */}
      <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-indigo-600 rounded-xl">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white">OmniPOS</span>
          </Link>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">POS Term-01</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="flex items-center space-x-2 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90">
             <LayoutDashboard className="w-4 h-4" />
             <span>Exit to Admin</span>
          </Link>
          <button onClick={toggleTheme} className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-100 dark:border-slate-700">
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Products Section */}
        <div className="flex-1 flex flex-col p-8 overflow-hidden bg-slate-50 dark:bg-slate-950">
          <div className="relative mb-8 max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search products by name or SKU..."
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border-0 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-4 focus:ring-indigo-500/10 outline-none text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 scrollbar-hide">
            {filteredProducts.map(product => (
              <button 
                key={product.id}
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`flex flex-col p-6 bg-white dark:bg-slate-900 rounded-[2rem] text-left transition-all hover:scale-[1.02] border-2 border-transparent hover:border-indigo-600 group ${product.stock === 0 ? 'opacity-50 grayscale' : 'shadow-sm shadow-slate-200/50 dark:shadow-none'}`}
              >
                <div className="h-32 w-full rounded-2xl mb-6 overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="font-bold text-lg truncate w-full mb-1 dark:text-white">{product.name}</div>
                <div className="text-slate-500 text-sm mb-4">{product.category}</div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {product.stock} left
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-[450px] flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-20">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-2xl font-bold flex items-center dark:text-white font-outfit">
              <ShoppingCart className="w-6 h-6 mr-3 text-indigo-600" /> Order Details
            </h2>
            <button 
              onClick={() => setCart([])}
              className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-30">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart className="w-12 h-12" />
                </div>
                <p className="text-lg font-bold">Cart is empty</p>
                <p className="text-sm">Scan items to start checkout</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex items-center space-x-4 animate-fade-in">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold truncate text-base dark:text-white">{item.name}</div>
                    <div className="text-sm text-slate-500">${item.price.toFixed(2)} / unit</div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all"><Minus className="w-4 h-4" /></button>
                    <span className="w-8 text-center text-base font-bold dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all"><Plus className="w-4 h-4" /></button>
                  </div>
                  <div className="font-bold text-lg dark:text-white w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Totals */}
          <div className="p-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="space-y-3 text-base text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (GST)</span>
                <span className="font-bold dark:text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="group-hover:text-indigo-600 transition-colors">Apply Discount</span>
                <div className="flex items-center space-x-2">
                   <span className="text-indigo-600 font-bold">-$</span>
                   <input 
                    type="number" 
                    className="w-20 text-right bg-transparent border-b-2 border-indigo-100 dark:border-indigo-900 focus:border-indigo-600 outline-none text-indigo-600 font-bold text-lg transition-all"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                   />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-2xl font-bold dark:text-white">Total Amount</span>
              <span className="text-4xl font-bold text-indigo-600">${total.toFixed(2)}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
               <button className="flex flex-col items-center p-4 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-indigo-600 rounded-[1.5rem] shadow-sm transition-all group">
                 <Banknote className="w-6 h-6 mb-2 text-slate-400 group-hover:text-indigo-600" />
                 <span className="text-xs font-bold dark:text-white">Cash</span>
               </button>
               <button className="flex flex-col items-center p-4 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-indigo-600 rounded-[1.5rem] shadow-sm transition-all group">
                 <CreditCard className="w-6 h-6 mb-2 text-slate-400 group-hover:text-indigo-600" />
                 <span className="text-xs font-bold dark:text-white">Card</span>
               </button>
               <button className="flex flex-col items-center p-4 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-indigo-600 rounded-[1.5rem] shadow-sm transition-all group">
                 <Wallet className="w-6 h-6 mb-2 text-slate-400 group-hover:text-indigo-600" />
                 <span className="text-xs font-bold dark:text-white">Wallet</span>
               </button>
            </div>

            <button 
              onClick={() => cart.length > 0 && setShowReceipt(true)}
              disabled={cart.length === 0}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 disabled:opacity-50 disabled:grayscale transition-all shadow-xl shadow-indigo-200 dark:shadow-none"
            >
              Complete Payment
            </button>
          </div>
        </div>
      </div>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden animate-scale-up shadow-2xl">
            <div className="p-10 border-b border-slate-50 relative">
               <button onClick={() => setShowReceipt(false)} className="absolute top-6 right-6 p-3 hover:bg-slate-50 rounded-full transition-all">
                 <X className="w-6 h-6 text-slate-400" />
               </button>
               <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {/* Fix: CheckCircle2 was not imported from lucide-react */}
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold font-outfit text-slate-900">Payment Success</h3>
                  <p className="text-slate-500 font-medium mt-1">Transaction #TXN-90421</p>
               </div>
            </div>
            <div className="px-10 py-8 space-y-4 max-h-[350px] overflow-y-auto scrollbar-hide">
              <div className="text-center mb-8">
                <div className="font-bold text-xl text-indigo-600 font-outfit">OmniPOS Demo Shop</div>
                <div className="text-sm text-slate-500 font-medium">123 Marketplace Dr, Level 4</div>
              </div>
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm font-medium">
                    <span className="text-slate-600">{item.quantity}x {item.name}</span>
                    <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-dashed border-slate-200 space-y-3">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Sales Tax (8%)</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                   <div className="flex justify-between text-sm text-indigo-600">
                    <span>Loyalty Discount</span>
                    <span className="font-bold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-2xl font-bold pt-4 text-slate-900">
                  <span>Total Paid</span>
                  <span className="text-indigo-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="p-10 bg-slate-50 flex gap-4">
               <button onClick={() => { setShowReceipt(false); setCart([]); }} className="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-100 transition-all">New Order</button>
               <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all">
                 <Printer className="w-5 h-5" />
                 <span>Print Bill</span>
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoPOS;
