
import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold font-outfit text-slate-900 dark:text-white mb-6">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No hidden fees. Choose the plan that scales with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-8 rounded-3xl bg-white dark:bg-slate-900 border transition-all hover:shadow-xl ${
                plan.isPopular 
                  ? 'border-indigo-500 scale-105 shadow-xl shadow-indigo-100 dark:shadow-none' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold uppercase rounded-full tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                    <Check className="w-5 h-5 text-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.isPopular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
