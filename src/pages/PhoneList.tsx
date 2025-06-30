import { useState } from 'react';
import { Plus, Search, Upload, Download, MoreHorizontal, Phone, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

// Sample phone data
const SAMPLE_PHONES = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    name: 'John Smith',
    status: 'active',
    lastCalled: '2025-04-15 09:45 AM',
    totalCalls: 12,
    tags: ['customer', 'sales'],
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 987-6543',
    name: 'Alice Johnson',
    status: 'inactive',
    lastCalled: '2025-04-10 11:20 AM',
    totalCalls: 8,
    tags: ['prospect', 'demo'],
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 456-7890',
    name: 'Robert Davis',
    status: 'active',
    lastCalled: '2025-04-14 02:35 PM',
    totalCalls: 5,
    tags: ['customer', 'support'],
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 789-0123',
    name: 'Emily Wilson',
    status: 'active',
    lastCalled: '2025-04-13 10:15 AM',
    totalCalls: 15,
    tags: ['customer', 'premium'],
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 234-5678',
    name: 'Michael Brown',
    status: 'do-not-call',
    lastCalled: '2025-03-28 04:50 PM',
    totalCalls: 3,
    tags: ['prospect'],
  },
  {
    id: '6',
    phoneNumber: '+1 (555) 345-6789',
    name: 'Sarah Taylor',
    status: 'active',
    lastCalled: '2025-04-15 01:30 PM',
    totalCalls: 7,
    tags: ['customer', 'sales'],
  },
  {
    id: '7',
    phoneNumber: '+1 (555) 567-8901',
    name: 'James Anderson',
    status: 'inactive',
    lastCalled: '2025-04-05 09:20 AM',
    totalCalls: 4,
    tags: ['prospect'],
  },
];

// Tags with their colors
const TAG_COLORS: Record<string, string> = {
  customer: 'bg-primary-50 text-primary-700',
  prospect: 'bg-secondary-50 text-secondary-700',
  sales: 'bg-accent-50 text-accent-700',
  support: 'bg-success-50 text-success-700',
  premium: 'bg-warning-50 text-warning-700',
  demo: 'bg-gray-100 text-gray-700',
};

// Status indicator
const StatusIndicator = ({ status }: { status: string }) => {
  const statusConfig = {
    active: {
      color: 'text-success-500',
      icon: <CheckCircle size={16} className="mr-1 text-success-500" />,
      text: 'Active',
    },
    inactive: {
      color: 'text-gray-400',
      icon: <XCircle size={16} className="mr-1 text-gray-400" />,
      text: 'Inactive',
    },
    'do-not-call': {
      color: 'text-error-500',
      icon: <XCircle size={16} className="mr-1 text-error-500" />,
      text: 'Do Not Call',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <div className="flex items-center">
      {config.icon}
      <span className={config.color}>{config.text}</span>
    </div>
  );
};

const PhoneList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(SAMPLE_PHONES.flatMap((phone) => phone.tags))
  );
  
  // Filter phones based on search, tags, and status
  const filteredPhones = SAMPLE_PHONES.filter((phone) => {
    const matchesSearch =
      searchTerm === '' ||
      phone.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => phone.tags.includes(tag));
    
    const matchesStatus =
      selectedStatus === 'all' || phone.status === selectedStatus;
    
    return matchesSearch && matchesTags && matchesStatus;
  });
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Phone Numbers</h1>
          <p className="text-gray-600">Manage phone numbers for AI calling</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-primary">
            <Plus size={16} className="mr-2" />
            Add Number
          </button>
          <div className="relative">
            <button className="btn btn-outline">
              <MoreHorizontal size={16} />
            </button>
            {/* Dropdown menu would go here */}
          </div>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="input w-full pl-10"
            placeholder="Search phone numbers or names..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`badge transition-colors ${
                selectedTags.includes(tag)
                  ? TAG_COLORS[tag] || 'bg-gray-100 text-gray-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <select
            className="input min-w-32"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="do-not-call">Do Not Call</option>
          </select>
          
          <button className="btn btn-outline p-2">
            <Upload size={18} />
            <span className="sr-only">Import</span>
          </button>
          
          <button className="btn btn-outline p-2">
            <Download size={18} />
            <span className="sr-only">Export</span>
          </button>
        </div>
      </div>
      
      {/* Phone list table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Phone Number
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Last Called
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Total Calls
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Tags
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredPhones.map((phone) => (
                <tr key={phone.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gray-400" />
                      <span className="font-medium">{phone.phoneNumber}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm">
                    {phone.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm">
                    <StatusIndicator status={phone.status} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {phone.lastCalled}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {phone.totalCalls}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {phone.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`badge ${TAG_COLORS[tag] || 'bg-gray-100 text-gray-700'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                    <div className="flex justify-end space-x-2">
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                        <Edit size={16} />
                        <span className="sr-only">Edit</span>
                      </button>
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-error-600">
                        <Trash2 size={16} />
                        <span className="sr-only">Delete</span>
                      </button>
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
                <span className="font-medium">{filteredPhones.length}</span> of{' '}
                <span className="font-medium">{filteredPhones.length}</span> results
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
    </div>
  );
};

export default PhoneList;