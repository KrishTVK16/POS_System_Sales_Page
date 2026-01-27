
import React from 'react';
import { 
  Cloud, BarChart3, Database, Headphones, 
  Lock, Globe, Zap, Settings 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      desc: 'Access your POS from any device, anywhere in the world with 99.99% uptime guaranteed.',
      icon: Cloud,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Real-time Analytics',
      desc: 'Live sales tracking and deep business intelligence reports generated automatically.',
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Inventory Control',
      desc: 'Automated stock management across multiple locations with low-stock SMS alerts.',
      icon: Database,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: '24/7 Support',
      desc: 'Expert technical assistance whenever you need it via chat, email, or priority phone.',
      icon: Headphones,
      color: 'bg-rose-100 text-rose-600'
    },
    {
      title: 'Enterprise Security',
      desc: 'Bank-grade encryption for all transactions and employee access controls.',
      icon: Lock,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Multi-Store Sync',
      desc: 'Manage all your branches from a single dashboard with global product updates.',
      icon: Globe,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Instant Checkout',
      desc: 'Optimized touch-first interface designed for high-speed retail environments.',
      icon: Zap,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Custom Integration',
      desc: 'Robust API to connect with your existing accounting and ERP software.',
      icon: Settings,
      color: 'bg-slate-100 text-slate-600'
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-6">Professional Services</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            More than just a software, we provide the backbone for your entire business operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-indigo-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="opacity-90">Our enterprise team specializes in high-volume retail and complex hospitality workflows.</p>
          </div>
          <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-50 transition-colors whitespace-nowrap">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
