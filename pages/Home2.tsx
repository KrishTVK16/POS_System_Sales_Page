
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, RefreshCcw, Box, 
  ArrowRight, Users, ClipboardCheck, LayoutGrid, Store, ShoppingBag
} from 'lucide-react';

const Home2: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-20 relative px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 text-sm font-bold shadow-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Event & Rental POS Focus
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
              Powerful POS for <br /> <span className="text-indigo-600">Rental & Events</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Manage inventory availability, deposits, and bookings with a system built specifically for the rental economy.
            </p>
            
            {/* Solution Switcher Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/demo-pos" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none">
                Demo Checkout
              </Link>
              <Link to="/" className="px-10 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:border-indigo-600 transition-all flex items-center">
                Switch to General POS <ShoppingBag className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/rental-pos/900/700" alt="Rental POS" className="rounded-[3rem] shadow-2xl border-4 border-white dark:border-slate-800" />
            <div className="absolute top-10 -left-12 p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 animate-pulse">
               <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold dark:text-white">Next Event</div>
                    <div className="text-sm text-slate-500">In 2 hours, 15 items</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Features */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold font-outfit text-slate-900 dark:text-white">Built for complex rental workflows</h2>
            <p className="text-slate-500 mt-4">Automate your event management from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Availability Matrix', desc: 'See real-time stock levels across any date range.', icon: LayoutGrid },
              { title: 'Deposit Tracking', desc: 'Hold and refund security deposits automatically.', icon: ClipboardCheck },
              { title: 'Booking Calendar', icon: Calendar, desc: 'Drag-and-drop schedule for all your assets.' },
              { title: 'Late Return Alerts', icon: Clock, desc: 'Automated SMS/Email reminders for late items.' },
              { title: 'Asset Maintenance', icon: RefreshCcw, desc: 'Track repairs and cleaning cycles for gear.' },
              { title: 'Bulk Reservations', icon: Box, desc: 'Reserve multiple items for large scale events.' },
            ].map((f, i) => (
              <div key={i} className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-transparent hover:border-indigo-200 dark:hover:border-indigo-900 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <f.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-4">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
