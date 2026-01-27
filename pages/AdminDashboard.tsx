
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  TrendingUp, Users, ShoppingBag, 
  AlertCircle, ArrowUpRight, ArrowDownRight,
  MoreVertical, Search, Filter, Download
} from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../constants';

const data = [
  { name: 'Mon', sales: 4000, revenue: 2400 },
  { name: 'Tue', sales: 3000, revenue: 1398 },
  { name: 'Wed', sales: 2000, revenue: 9800 },
  { name: 'Thu', sales: 2780, revenue: 3908 },
  { name: 'Fri', sales: 1890, revenue: 4800 },
  { name: 'Sat', sales: 2390, revenue: 3800 },
  { name: 'Sun', sales: 3490, revenue: 4300 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white">Good Morning, Alex</h1>
          <p className="text-slate-500 dark:text-slate-400">Here's what's happening in your shop today.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-50">
            <Download className="w-4 h-4" />
            <span>Export Reports</span>
          </button>
          <div className="p-2 bg-indigo-600 text-white rounded-xl">
             <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$12,482.00', trend: '+12.5%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100/50' },
          { label: 'Active Customers', value: '1,482', trend: '+2.4%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100/50' },
          { label: 'Total Sales', value: '156', trend: '-1.2%', icon: ShoppingBag, color: 'text-red-600', bg: 'bg-red-100/50' },
          { label: 'Low Stock Items', value: '12', trend: 'Critical', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-100/50' },
        ].map((kpi, i) => (
          <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 ${kpi.bg} rounded-2xl`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <div className={`flex items-center text-xs font-bold ${kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.trend}
                {kpi.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3 ml-1" /> : <ArrowDownRight className="w-3 h-3 ml-1" />}
              </div>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{kpi.label}</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold dark:text-white">Revenue Performance</h3>
            <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-semibold px-3 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
          <h3 className="text-lg font-bold dark:text-white mb-8">Recent Transactions</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-bold dark:text-white">John Doe</div>
                    <div className="text-xs text-slate-500">2 minutes ago</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-green-600">+$128.50</div>
              </div>
            ))}
            <button className="w-full py-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              View All Transactions
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800">
           <h3 className="text-lg font-bold dark:text-white">Product Inventory</h3>
           <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm outline-none w-full sm:w-48" />
              </div>
              <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl"><Filter className="w-4 h-4" /></button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4">Product Name</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Stock</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {SAMPLE_PRODUCTS.map(product => (
                <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center space-x-3">
                       <img src={product.image} className="w-8 h-8 rounded-lg object-cover" />
                       <span className="font-bold text-sm dark:text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm text-slate-600 dark:text-slate-400">{product.category}</td>
                  <td className="px-8 py-4 text-sm font-bold dark:text-white">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-4 text-sm text-slate-600 dark:text-slate-400">{product.stock}</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      product.stock > 10 ? 'bg-green-100 text-green-700' : 
                      product.stock === 0 ? 'bg-red-100 text-red-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {product.stock > 10 ? 'In Stock' : product.stock === 0 ? 'Out of Stock' : 'Low Stock'}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                       <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
           <span>Showing 6 of 42 products</span>
           <div className="flex space-x-2">
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
