
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-6">Our mission is to empower local commerce</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            OmniPOS started in 2021 with a simple vision: give small businesses the same powerful tools that global enterprises use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <img src="https://picsum.photos/seed/about-img/800/600" className="rounded-3xl shadow-2xl" />
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why OmniPOS?</h2>
            <div className="space-y-6">
              {[
                { title: 'User-First Design', desc: 'We spend thousands of hours in real shops to understand what makes a POS actually usable.', icon: Heart },
                { title: 'Modern Stack', desc: 'Built on high-performance cloud infrastructure to ensure 99.9% uptime and lightning speed.', icon: Target },
                { title: 'Local Expertise', desc: 'Our team comes from diverse retail and hospitality backgrounds.', icon: Award },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl h-fit">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center">
          <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Join 15,000+ businesses today</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
            Ready to take your sales to the next level? Experience the OmniPOS difference with a free 14-day trial.
          </p>
          <Link to="/signup" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
