
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, User, Building, Mail, Lock, CheckCircle2 } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex bg-indigo-600 items-center justify-center p-20 text-white">
        <div className="max-w-md">
          <Link to="/" className="inline-flex items-center space-x-2 mb-12">
            <div className="p-2 bg-white rounded-xl">
              <Store className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="text-3xl font-bold font-outfit">OmniPOS</span>
          </Link>
          <h1 className="text-5xl font-bold font-outfit mb-8 leading-tight">Start growing your business today.</h1>
          <div className="space-y-6">
            {[
              '14-day free trial, no credit card required',
              'Unlimited inventory items and users',
              '24/7 priority customer support',
              'Free hardware migration assistance'
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-indigo-300" />
                <span className="text-lg opacity-90">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-md w-full">
          <div className="mb-10 lg:hidden text-center">
             <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="p-2 bg-indigo-600 rounded-xl">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-outfit dark:text-white">OmniPOS</span>
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create your account</h2>
          <p className="text-slate-500 mb-10">Join 15,000+ happy business owners.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">Full Name</label>
                <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input type="text" className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">Business Name</label>
                <div className="relative">
                   <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input type="text" className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Smith Coffee" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@smithcoffee.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="password" className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" />
              </div>
              <p className="text-[10px] text-slate-500">Must be at least 8 characters with one number.</p>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded" />
              <label htmlFor="terms" className="ml-2 text-xs text-slate-500">By signing up, you agree to our <a href="#" className="text-indigo-600">Terms of Service</a> and <a href="#" className="text-indigo-600">Privacy Policy</a>.</label>
            </div>

            <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 dark:shadow-none">
              Start Free Trial
            </button>
          </form>

          <p className="text-center mt-8 text-slate-500">
            Already have an account? <Link to="/login" className="text-indigo-600 font-bold">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
