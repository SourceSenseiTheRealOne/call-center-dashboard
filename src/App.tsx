import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import PhoneList from './pages/PhoneList';
import Messages from './pages/Messages';
import Workflows from './pages/Workflows';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import UserManagement from './pages/UserManagement';

// Protected route component
const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode, requiredRole?: string }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/dashboard\" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/dashboard\" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="phones" element={<PhoneList />} />
        <Route path="messages" element={<Messages />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        
        {/* Admin only routes */}
        <Route path="users" element={
          <ProtectedRoute requiredRole="admin">
            <UserManagement />
          </ProtectedRoute>
        } />
      </Route>
      
      <Route path="*" element={<Navigate to="/dashboard\" replace />} />
    </Routes>
  );
}

export default App;