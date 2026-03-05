// Dashboard JavaScript for charts (using Chart.js CDN)
document.addEventListener('DOMContentLoaded', () => {
  // Sample data
  const revenueData = [
    { name: 'Mon', sales: 4000, revenue: 2400 },
    { name: 'Tue', sales: 3000, revenue: 1398 },
    { name: 'Wed', sales: 2000, revenue: 9800 },
    { name: 'Thu', sales: 2780, revenue: 3908 },
    { name: 'Fri', sales: 1890, revenue: 4800 },
    { name: 'Sat', sales: 2390, revenue: 3800 },
    { name: 'Sun', sales: 3490, revenue: 4300 },
  ];
  
  // Sidebar Toggle Logic
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // slight delay for opacity transition
    setTimeout(() => {
      sidebarOverlay.classList.remove('opacity-0');
    }, 10);
  }

  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('opacity-0');
    // wait for opacity transition to finish
    setTimeout(() => {
      sidebarOverlay.classList.add('hidden');
    }, 300);
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', openSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  console.log('Dashboard loaded');
});
