
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Shield, BarChart2, Smartphone, 
  ArrowRight, CheckCircle2, ShoppingBag, 
  Coffee, Pill, Monitor, Calendar
} from 'lucide-react';

const Home1: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-8 animate-fade-in shadow-sm">
            <Zap className="w-4 h-4 mr-2" />
            General Retail POS Solution
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-outfit text-slate-900 dark:text-white mb-8 tracking-tighter">
            Smart Sales for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Retail & Commerce</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for shops, restaurants, and retail chains. Manage inventory, process payments, and grow your customer base with OmniPOS.
          </p>
          
          {/* Solution Switcher Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/demo-pos" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-xl shadow-indigo-200 dark:shadow-none">
              Try POS Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/home-rental" className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:border-indigo-600 transition-all flex items-center justify-center">
              Switch to Rental POS <Calendar className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/admin" className="w-full sm:w-auto px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center">
              Admin Console
            </Link>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <img 
              src="https://picsum.photos/seed/pos-hero/1200/660" 
              alt="Dashboard Preview" 
              className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
            />
            <div className="hidden lg:block absolute -right-12 -bottom-12 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 w-72 animate-bounce">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-base font-bold dark:text-white">Transaction Done</div>
                  <div className="text-xs text-slate-500">$245.00 total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                 <ShoppingBag className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold dark:text-white mb-4">Retail Solution</h3>
               <p className="text-slate-500 dark:text-slate-400 mb-6">Designed for boutiques, groceries, and specialty stores with high turnover.</p>
               <Link to="/" className="text-indigo-600 font-bold flex items-center">Current Page <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </div>
            <div className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                 <Calendar className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold dark:text-white mb-4">Rental Solution</h3>
               <p className="text-slate-500 dark:text-slate-400 mb-6">Built for equipment, event rentals, and booking-based business models.</p>
               <Link to="/home-rental" className="text-blue-500 font-bold flex items-center">Switch Version <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </div>
            <div className="p-10 bg-indigo-600 rounded-[2.5rem] shadow-xl text-white">
               <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
               <p className="opacity-90 mb-8">Dive into our interactive demo to see how the POS handles real-time sales and taxes.</p>
               <Link to="/demo-pos" className="inline-flex px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">Launch Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-outfit text-slate-900 dark:text-white mb-16">The OS for every sector</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Retail', icon: ShoppingBag, color: 'text-indigo-600' },
              { name: 'Restaurant', icon: Coffee, color: 'text-orange-500' },
              { name: 'Pharmacy', icon: Pill, color: 'text-blue-500' },
              { name: 'Electronics', icon: Monitor, color: 'text-purple-500' },
            ].map((sector) => (
              <div key={sector.name} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800 hover:scale-105 transition-all group border border-transparent hover:border-indigo-100">
                <sector.icon className={`w-14 h-14 mx-auto mb-6 ${sector.color}`} />
                <h3 className="text-2xl font-bold dark:text-white">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1;
