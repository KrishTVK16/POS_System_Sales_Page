
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold font-outfit text-slate-900 dark:text-white mb-6">Let's talk business</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
              Have questions about our POS solutions? Our team is here to help you find the perfect setup for your shop.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Support', value: 'hello@omnipos.io' },
                { icon: Phone, label: 'Sales Inquiries', value: '+1 (800) 420-1337' },
                { icon: MapPin, label: 'Visit Office', value: '123 Tech Plaza, SF, CA' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">First Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">Last Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">Business Type</label>
              <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                <option>Retail Store</option>
                <option>Restaurant/Cafe</option>
                <option>Event Rental</option>
                <option>Pharmacy</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Tell us how we can help..."></textarea>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 dark:shadow-none">
              <MessageCircle className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
