
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages, Store, LayoutDashboard } from 'lucide-react';
import { Theme, Direction } from '../../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  dir: Direction;
  toggleDir: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, dir, toggleDir }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'General POS', path: '/' },
    { name: 'Rental POS', path: '/home-rental' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const activeClass = (path: string) => 
    location.pathname === path ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all';

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-20 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Logo - Standardized */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="p-2 bg-indigo-600 rounded-xl group-hover:scale-105 transition-transform">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">OmniPOS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8 h-20">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`${activeClass(link.path)} py-7 text-sm`}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Link to="/login" className="px-5 py-2.5 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
              Login
            </Link>
            <Link to="/signup" className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200 dark:shadow-none">
              Sign Up
            </Link>
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <Link to="/admin" className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-all flex items-center space-x-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
             <button onClick={toggleTheme} className="p-2 text-slate-500 rounded-lg">
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white dark:bg-slate-900 z-[60] overflow-y-auto px-6 py-8 animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-2xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full my-4"></div>
            <Link to="/admin" className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center rounded-2xl font-bold text-xl flex items-center justify-center space-x-3" onClick={() => setIsMenuOpen(false)}>
              <LayoutDashboard className="w-6 h-6" />
              <span>Admin Dashboard</span>
            </Link>
            <Link to="/signup" className="w-full py-5 bg-indigo-600 text-white text-center rounded-2xl font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
              Sign Up Free
            </Link>
            <Link to="/login" className="w-full py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-center rounded-2xl font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
