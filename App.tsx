
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Theme, Direction } from './types';

// Layouts
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AdminSidebar from './components/admin/Sidebar';

// Pages
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import InventoryView from './pages/InventoryView';
import DemoPOS from './pages/DemoPOS';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [dir, setDir] = useState<Direction>('ltr');
  const location = useLocation();

  const isAdminPath = location.pathname.startsWith('/admin');
  const isPOSPath = location.pathname === '/demo-pos';
  const isAuthPath = ['/login', '/signup'].includes(location.pathname);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleDir = () => setDir(prev => prev === 'ltr' ? 'rtl' : 'ltr');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('dir', dir);
  }, [theme, dir]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-900' : 'bg-slate-50'}`}>
      {!isAdminPath && !isPOSPath && !isAuthPath && (
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
          dir={dir} 
          toggleDir={toggleDir} 
        />
      )}

      <main className={`${isAdminPath ? 'flex' : ''}`}>
        {isAdminPath && <AdminSidebar theme={theme} toggleTheme={toggleTheme} />}
        
        <div className={`flex-1 ${isAdminPath ? 'p-4 md:p-8' : ''}`}>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/home-rental" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/inventory" element={<InventoryView />} />
            <Route path="/demo-pos" element={<DemoPOS theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </main>

      {!isAdminPath && !isPOSPath && !isAuthPath && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
