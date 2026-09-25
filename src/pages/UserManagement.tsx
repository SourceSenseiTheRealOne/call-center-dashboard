import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Users, Shield, Mail, MoreHorizontal, Check, X } from 'lucide-react';

// Sample user data
const SAMPLE_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    lastActive: '2025-04-15 13:45 PM',
    workflowsManaged: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'user',
    status: 'active',
    lastActive: '2025-04-15 11:23 AM',
    workflowsManaged: 3,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'user',
    status: 'active',
    lastActive: '2025-04-15 09:17 AM',
    workflowsManaged: 2,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    name: 'Emily Wilson',
    email: 'emily@example.com',
    role: 'manager',
    status: 'active',
    lastActive: '2025-04-14 16:32 PM',
    workflowsManaged: 8,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    name: 'David Martinez',
    email: 'david@example.com',
    role: 'user',
    status: 'inactive',
    lastActive: '2025-04-01 10:15 AM',
    workflowsManaged: 0,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Role badge component
const RoleBadge = ({ role }: { role: string }) => {
  const roleConfig = {
    admin: 'bg-error-50 text-error-700',
    manager: 'bg-accent-50 text-accent-700',
    user: 'bg-primary-50 text-primary-700',
  };

  return (
    <span className={`badge ${roleConfig[role as keyof typeof roleConfig]}`}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </span>
  );
};

// Status indicator component
const StatusIndicator = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center">
      <span
        className={`mr-2 h-2.5 w-2.5 rounded-full ${
          status === 'active' ? 'bg-success-500' : 'bg-gray-400'
        }`}
      ></span>
      <span className="text-sm text-gray-700">
        {status === 'active' ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  // Filter users based on search, role, and status
  const filteredUsers = SAMPLE_USERS.filter((user) => {
    const matchesSearch =
      searchTerm === '' ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole =
      selectedRole === 'all' || user.role === selectedRole;
    
    const matchesStatus =
      selectedStatus === 'all' || user.status === selectedStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Sample users and illustrative permissions; not server-enforced access.</p>
        </div>
        <div>
          <button className="btn btn-primary">
            <Plus size={16} className="mr-2" />
            Add User
          </button>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="input w-full pl-10"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <Filter size={16} className="mr-2 text-gray-500" />
            <span className="mr-2 text-sm font-medium text-gray-700">Role:</span>
            <select
              className="input"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-700">Status:</span>
            <select
              className="input"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Users list */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Last Active
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Workflows
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={user.avatar}
                          alt={user.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <StatusIndicator status={user.status} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {user.lastActive}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {user.workflowsManaged}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                    <div className="flex justify-end space-x-2">
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                        <Mail size={16} />
                        <span className="sr-only">Send email</span>
                      </button>
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                        <Shield size={16} />
                        <span className="sr-only">Manage permissions</span>
                      </button>
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                        <Edit size={16} />
                        <span className="sr-only">Edit</span>
                      </button>
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-error-600">
                        <Trash2 size={16} />
                        <span className="sr-only">Delete</span>
                      </button>
                      <div className="relative">
                        <button className="rounded p-1 text-gray-500 hover:bg-gray-100">
                          <MoreHorizontal size={16} />
                          <span className="sr-only">More</span>
                        </button>
                        {/* Dropdown menu would go here */}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="btn btn-outline">Previous</button>
            <button className="btn btn-outline">Next</button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">{filteredUsers.length}</span> of{' '}
                <span className="font-medium">{filteredUsers.length}</span> users
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative z-10 inline-flex items-center bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">1</button>
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* User role permissions */}
      <div className="card">
        <h3 className="mb-4 text-lg font-semibold">Illustrative permissions (not enforced)</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Feature / Permission
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Admin
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Manager
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  User
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                { feature: 'User Management', admin: true, manager: false, user: false },
                { feature: 'Workflow Creation', admin: true, manager: true, user: true },
                { feature: 'Phone Number Management', admin: true, manager: true, user: true },
                { feature: 'Message Template Creation', admin: true, manager: true, user: true },
                { feature: 'Analytics Access', admin: true, manager: true, user: false },
                { feature: 'System Settings', admin: true, manager: false, user: false },
                { feature: 'API Integration', admin: true, manager: false, user: false },
                { feature: 'Data Export', admin: true, manager: true, user: false },
              ].map((permission, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {permission.feature}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-center">
                    {permission.admin ? (
                      <Check size={18} className="mx-auto text-success-500" />
                    ) : (
                      <X size={18} className="mx-auto text-gray-300" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-center">
                    {permission.manager ? (
                      <Check size={18} className="mx-auto text-success-500" />
                    ) : (
                      <X size={18} className="mx-auto text-gray-300" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-center">
                    {permission.user ? (
                      <Check size={18} className="mx-auto text-success-500" />
                    ) : (
                      <X size={18} className="mx-auto text-gray-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="btn btn-primary">
            Edit Permissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;