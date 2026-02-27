// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
let currentDir = localStorage.getItem('dir') || 'ltr';

function initTheme() {
  document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  document.documentElement.setAttribute('dir', currentDir);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeButtons = document.querySelectorAll('.theme-toggle');
  themeButtons.forEach(btn => {
    const icon = btn.querySelector('svg');
    if (icon) {
      if (currentTheme === 'light') {
        icon.innerHTML = '<path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>';
      } else {
        icon.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
      }
    }
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Navigation Highlighting
function setActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
  const navLinks = document.querySelectorAll('header nav a, #mobile-menu a');

  navLinks.forEach(link => {
    if (!link.href || link.href.includes('#')) return;

    // Normalize link path: treat /index.html and / the same
    const linkPath = link.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');

    const isMobile = link.closest('#mobile-menu');
    const isActionButton = link.classList.contains('py-5') || link.classList.contains('px-6') || link.classList.contains('px-5');

    const isActive = linkPath === currentPath;

    if (isActive && !isActionButton) {
      if (isMobile) {
        link.className = 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 px-4 py-3 rounded-r-2xl font-bold text-2xl transition-all duration-300';
      } else {
        link.className = 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400 py-7 text-sm transition-all';
      }
    } else if (!isActionButton) {
      if (isMobile) {
        link.className = 'px-4 py-3 text-2xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl transition-all duration-300';
      } else {
        link.className = 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-7 text-sm transition-all';
      }
    }
  });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setActiveNavLink();

  // Attach theme toggle handlers
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });
});
