
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Twitter, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-outfit text-slate-900 dark:text-white">OmniPOS</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering local businesses with enterprise-grade sales and inventory tools. Seamless, fast, and secure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:text-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:text-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:text-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/inventory" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Inventory Management</Link></li>
              <li><Link to="/demo-pos" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Point of Sale Demo</Link></li>
              <li><Link to="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Pricing Plans</Link></li>
              <li><Link to="/home-rental" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Rental Solution</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Contact Support</Link></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li>123 Commerce Way, Suite 400</li>
              <li>San Francisco, CA 94103</li>
              <li>+1 (555) 123-4567</li>
              <li>support@omnipos.io</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2026 OmniPOS Systems. Built with passion for business growth.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-indigo-600 font-semibold"
          >
            <span>Back to top</span>
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
