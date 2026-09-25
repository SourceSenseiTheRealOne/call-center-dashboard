import { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Phone, 
  MessageSquare, 
  GitBranch, 
  BarChart, 
  Settings, 
  Users, 
  Menu, 
  X, 
  Bell, 
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  
  const isAdmin = user?.role === 'admin';
  
  // Navigation items
  const navItems = [
    { title: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Phone Numbers', path: '/phones', icon: <Phone size={20} /> },
    { title: 'Messages', path: '/messages', icon: <MessageSquare size={20} /> },
    { title: 'Workflows', path: '/workflows', icon: <GitBranch size={20} /> },
    { title: 'Analytics', path: '/analytics', icon: <BarChart size={20} /> },
    { title: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];
  
  // Admin only navigation items
  const adminNavItems = [
    { title: 'User Management', path: '/users', icon: <Users size={20} /> },
  ];
  
  // Toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  // Toggle user menu
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  
  // Handle logout
  const handleLogout = () => {
    logout();
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-primary-600 text-white flex items-center justify-center">
              <Phone size={18} />
            </div>
            <span className="ml-2 text-lg font-semibold">Call Center Prototype</span>
          </div>
          <button 
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden" 
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="mt-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${
                  location.pathname === item.path ? 'sidebar-link-active' : 'sidebar-link-inactive'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </Link>
            ))}
          </div>
          
          {isAdmin && (
            <>
              <div className="my-4 border-t border-gray-200" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Demo admin
              </p>
              <div className="space-y-1">
                {adminNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`sidebar-link ${
                      location.pathname === item.path ? 'sidebar-link-active' : 'sidebar-link-inactive'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <button 
              className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden" 
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center">
              {/* Notification bell */}
              <button className="mr-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <Bell size={20} />
              </button>
              
              {/* User menu */}
              <div className="relative">
                <button
                  className="flex items-center rounded-full text-sm focus:outline-none"
                  onClick={toggleUserMenu}
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user?.avatar || 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt="User"
                  />
                  <span className="ml-2 hidden text-sm font-medium text-gray-700 md:block">
                    {user?.name}
                  </span>
                  <ChevronDown size={16} className="ml-1 text-gray-500" />
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-dropdown ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="border-b border-gray-100 px-4 py-2">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <p>Frontend prototype: all metrics, contacts and statuses are simulated. Demo roles are client-side only; no real calls or business-data persistence.</p>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;