import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Copy, Play, MessageSquare, Check, Info } from 'lucide-react';

// Sample message templates
const SAMPLE_MESSAGES = [
  {
    id: '1',
    title: 'Welcome Call',
    content: `Hello, this is [Company] calling to welcome you as our new customer. We're excited to have you on board and wanted to check if you have any initial questions about our service.`,
    category: 'onboarding',
    created: '2025-03-15',
    lastUsed: '2025-04-15',
    useCount: 87,
    successRate: 92,
  },
  {
    id: '2',
    title: 'Product Announcement',
    content: `Hello, this is [Company] with an exciting announcement. We've just released a new feature that we think you'll love. It's called [Feature] and it allows you to [Benefit].`,
    category: 'marketing',
    created: '2025-02-20',
    lastUsed: '2025-04-14',
    useCount: 124,
    successRate: 78,
  },
  {
    id: '3',
    title: 'Payment Reminder',
    content: `Hello, this is [Company] calling to remind you about an upcoming payment due on [Date]. You can easily make your payment through our website or mobile app.`,
    category: 'billing',
    created: '2025-01-10',
    lastUsed: '2025-04-15',
    useCount: 203,
    successRate: 85,
  },
  {
    id: '4',
    title: 'Appointment Confirmation',
    content: `Hello, this is [Company] calling to confirm your appointment scheduled for [Date] at [Time]. Please let us know if you need to reschedule or have any questions.`,
    category: 'scheduling',
    created: '2025-03-05',
    lastUsed: '2025-04-13',
    useCount: 156,
    successRate: 94,
  },
  {
    id: '5',
    title: 'Service Follow-up',
    content: `Hello, this is [Company] following up on the recent service you received. We'd like to know if everything was satisfactory and if there's anything else we can help you with.`,
    category: 'support',
    created: '2025-02-28',
    lastUsed: '2025-04-12',
    useCount: 92,
    successRate: 88,
  },
];

// Category colors
const CATEGORY_COLORS: Record<string, string> = {
  onboarding: 'bg-primary-50 text-primary-700',
  marketing: 'bg-accent-50 text-accent-700',
  billing: 'bg-error-50 text-error-700',
  scheduling: 'bg-secondary-50 text-secondary-700',
  support: 'bg-success-50 text-success-700',
};

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  
  // Get all unique categories
  const categories = Array.from(
    new Set(SAMPLE_MESSAGES.map((message) => message.category))
  );
  
  // Filter messages based on search and category
  const filteredMessages = SAMPLE_MESSAGES.filter((message) => {
    const matchesSearch =
      searchTerm === '' ||
      message.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'all' || message.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Toggle message preview
  const toggleMessagePreview = (id: string) => {
    if (activeMessage === id) {
      setActiveMessage(null);
    } else {
      setActiveMessage(id);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Message Templates</h1>
          <p className="text-gray-600">Sample scripts; no message delivery or template persistence.</p>
        </div>
        <div>
          <button className="btn btn-primary">
            <Plus size={16} className="mr-2" />
            New Template
          </button>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="input w-full pl-10"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Filter size={16} className="mr-2 text-gray-500" />
            <span className="mr-2 text-sm font-medium text-gray-700">Category:</span>
          </div>
          <select
            className="input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Messages list */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <div key={message.id} className="card overflow-hidden">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{message.title}</h3>
                  <div className="mt-1 flex items-center space-x-2">
                    <span
                      className={`badge ${
                        CATEGORY_COLORS[message.category] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {message.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      Created: {message.created}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="mr-3 flex flex-col text-right">
                  <div className="flex items-center text-sm">
                    <Check size={14} className="mr-1 text-success-500" />
                    <span className="font-medium">{message.successRate}%</span>
                    <span className="ml-1 text-xs text-gray-500">success</span>
                  </div>
                  <div className="text-xs text-gray-500">{message.useCount} uses</div>
                </div>
                <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                  <Play size={18} />
                </button>
                <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                  <Copy size={18} />
                </button>
                <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                  <Edit size={18} />
                </button>
                <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-error-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            
            <div className="mt-2 flex cursor-pointer items-center text-sm text-primary-600" onClick={() => toggleMessagePreview(message.id)}>
              <span className="mr-1 font-medium">{activeMessage === message.id ? 'Hide' : 'Show'} message</span>
              <svg
                className={`h-4 w-4 transform transition-transform ${
                  activeMessage === message.id ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {activeMessage === message.id && (
              <div className="mt-4 rounded-md bg-gray-50 p-4">
                <div className="flex items-start space-x-2 text-sm">
                  <Info size={16} className="mt-0.5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-700">Message Content</p>
                    <p className="mt-1 text-gray-600">{message.content}</p>
                    <div className="mt-4 rounded-md bg-primary-50 p-3 text-sm text-primary-700">
                      <p className="font-medium">Dynamic Variables</p>
                      <p className="mt-1">
                        Placeholders are illustrative; automatic substitution is not implemented:
                      </p>
                      <ul className="mt-2 list-disc pl-5">
                        <li>[Company] - Your company name</li>
                        <li>[Date] - Scheduled date</li>
                        <li>[Time] - Scheduled time</li>
                        <li>[Feature] - Product feature name</li>
                        <li>[Benefit] - Feature benefit description</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;