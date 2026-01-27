
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Mail, Lock, ArrowRight, LayoutDashboard } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center space-x-3 group mb-10">
            <div className="p-2.5 bg-indigo-600 rounded-xl transition-transform group-hover:scale-105">
              <Store className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">OmniPOS</span>
          </Link>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-outfit">Welcome Back</h2>
          <p className="text-slate-500 mt-2 font-medium">Log in to your business dashboard</p>
        </div>

        <form className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white"
                defaultValue="demo@omnipos.io"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between ml-1">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
              <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot?</a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white"
                defaultValue="password123"
              />
            </div>
          </div>

          <div className="flex items-center ml-1">
            <input type="checkbox" id="remember" className="w-5 h-5 text-indigo-600 border-slate-300 rounded-lg focus:ring-indigo-500" defaultChecked />
            <label htmlFor="remember" className="ml-3 text-sm font-medium text-slate-500">Keep me logged in</label>
          </div>

          <Link to="/admin" className="w-full py-4.5 bg-indigo-600 text-white text-center rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-indigo-100 dark:shadow-none">
            <LayoutDashboard className="w-5 h-5" />
            <span>Enter Dashboard</span>
          </Link>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100 dark:border-slate-800"></span></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-slate-900 text-slate-400 font-bold uppercase tracking-widest">or</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button type="button" className="flex items-center justify-center py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100 dark:border-slate-700">
               <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6 mr-2" />
               <span className="text-sm font-bold dark:text-white">Google</span>
             </button>
             <button type="button" className="flex items-center justify-center py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100 dark:border-slate-700">
               <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-6 h-6 mr-2" />
               <span className="text-sm font-bold dark:text-white">LinkedIn</span>
             </button>
          </div>
        </form>

        <p className="text-center mt-12 text-slate-500 font-medium">
          New to OmniPOS? <Link to="/signup" className="text-indigo-600 font-bold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
