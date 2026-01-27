
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingCart, Users, 
  CreditCard, Settings, BarChart3, Bell, LogOut, Store,
  ChevronLeft, ChevronRight, Sun, Moon
} from 'lucide-react';
import { Theme } from '../../types';

interface SidebarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const AdminSidebar: React.FC<SidebarProps> = ({ theme, toggleTheme }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Products', icon: Package, path: '/admin/products' },
    { name: 'Sales', icon: ShoppingCart, path: '/admin/sales' },
    { name: 'Customers', icon: Users, path: '/admin/customers' },
    { name: 'Payments', icon: CreditCard, path: '/admin/payments' },
    { name: 'Reports', icon: BarChart3, path: '/admin/reports' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-72'} min-h-screen bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col sticky top-0 z-40`}>
      {/* Brand - Standardized to Header size */}
      <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-900">
        {!isCollapsed && (
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <div className="p-1.5 bg-indigo-600 rounded-xl">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight text-slate-900 dark:text-white">OmniPOS</span>
          </Link>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:text-indigo-600 transition-all ${isCollapsed ? 'mx-auto' : ''}`}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-1 mt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 dark:shadow-none' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              {!isCollapsed && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-900 space-y-2">
        <button 
          onClick={toggleTheme}
          className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          {!isCollapsed && <span className="font-bold text-sm">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
        </button>
        <Link 
          to="/login"
          className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all"
        >
          <LogOut className="w-6 h-6" />
          {!isCollapsed && <span className="font-bold text-sm">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
