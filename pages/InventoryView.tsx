
import React, { useState } from 'react';
import { Search, Filter, AlertTriangle, CheckCircle } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../constants';

const InventoryView: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Retail', 'Events', 'Electronics'];
  const filteredProducts = filter === 'All' 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white">Inventory Management</h1>
            <p className="text-slate-600 dark:text-slate-400">Real-time product status demo</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl w-full sm:w-64 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
             </div>
             <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      filter === cat 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{product.name}</h3>
                  <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    {product.stock > 10 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertTriangle className={`w-5 h-5 ${product.stock === 0 ? 'text-red-500' : 'text-amber-500'}`} />
                    )}
                    <span className={`text-sm font-semibold ${
                      product.stock === 0 ? 'text-red-500' : 
                      product.stock <= 10 ? 'text-amber-500' : 
                      'text-green-600'
                    }`}>
                      {product.stock === 0 ? 'Out of Stock' : 
                       product.stock <= 10 ? `Low Stock: ${product.stock}` : 
                       'In Stock'}
                    </span>
                  </div>
                  <div className="text-slate-400 text-sm">
                    Tax: {(product.tax * 100).toFixed(0)}%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                    <div className="text-xs text-slate-500 mb-1">Stock Level</div>
                    <div className="font-bold dark:text-white">{product.stock} units</div>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                    <div className="text-xs text-slate-500 mb-1">Status</div>
                    <div className="font-bold dark:text-white capitalize">{product.isRental ? 'Rental' : 'Sellable'}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
