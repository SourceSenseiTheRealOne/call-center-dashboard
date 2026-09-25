import { Phone, MessageSquare, GitBranch, Users, Clock, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import StatsCard from '../components/dashboard/StatsCard';
import RecentCallsTable from '../components/dashboard/RecentCallsTable';
import ActivityChart from '../components/dashboard/ActivityChart';
import QuickActions from '../components/dashboard/QuickActions';

const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Sample dashboard for {user?.name}</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-primary">
            <Phone size={16} className="mr-2" />
            New Call (demo only)
          </button>
          <button className="btn btn-outline">
            <GitBranch size={16} className="mr-2" />
            New Workflow (demo only)
          </button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Calls" 
          value="1,284" 
          change="+12.3%" 
          isPositive={true}
          icon={<Phone size={20} />}
          color="primary"
        />
        <StatsCard 
          title="Active Messages" 
          value="46" 
          change="+7.8%" 
          isPositive={true}
          icon={<MessageSquare size={20} />}
          color="secondary"
        />
        <StatsCard 
          title="Active Workflows" 
          value="12" 
          change="-2.1%" 
          isPositive={false}
          icon={<GitBranch size={20} />}
          color="accent"
        />
        {isAdmin && (
          <StatsCard 
            title="Total Users" 
            value="28" 
            change="+3.6%" 
            isPositive={true}
            icon={<Users size={20} />}
            color="success"
          />
        )}
        {!isAdmin && (
          <StatsCard 
            title="Scheduled Calls" 
            value="37" 
            change="+15.2%" 
            isPositive={true}
            icon={<Clock size={20} />}
            color="success"
          />
        )}
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Activity chart - takes 2/3 of the width on large screens */}
        <div className="card lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Sample call activity</h3>
            <div className="flex items-center space-x-2">
              <select className="input py-1 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
          
          <ActivityChart />
          
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Total Duration</p>
              <p className="text-xl font-semibold">124.5 hrs</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Avg. Call Time</p>
              <p className="text-xl font-semibold">5.8 min</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-xl font-semibold">78.3%</p>
            </div>
          </div>
        </div>
        
        {/* Quick actions - takes 1/3 of the width on large screens */}
        <div className="card">
          <h3 className="mb-4 text-lg font-semibold">Action mockups (not implemented)</h3>
          <QuickActions />
        </div>
      </div>
      
      {/* Recent calls table */}
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sample recent calls</h3>
          <a href="/analytics" className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
            View all
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
        
        <RecentCallsTable />
      </div>
    </div>
  );
};

export default Dashboard;