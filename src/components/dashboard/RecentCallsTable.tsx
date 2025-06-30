import { Phone, ExternalLink } from 'lucide-react';

// Sample call data
const callData = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    status: 'completed',
    duration: '4:32',
    date: '2025-04-15 09:45 AM',
    agent: 'Sales Agent',
    message: 'Product Introduction',
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 987-6543',
    status: 'scheduled',
    duration: '-',
    date: '2025-04-16 10:30 AM',
    agent: 'Support Agent',
    message: 'Follow-up Call',
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 456-7890',
    status: 'completed',
    duration: '2:18',
    date: '2025-04-15 11:20 AM',
    agent: 'Sales Agent',
    message: 'Special Offer',
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 789-0123',
    status: 'failed',
    duration: '0:42',
    date: '2025-04-15 01:15 PM',
    agent: 'Support Agent',
    message: 'Issue Resolution',
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 234-5678',
    status: 'completed',
    duration: '5:47',
    date: '2025-04-14 03:30 PM',
    agent: 'Sales Agent',
    message: 'Product Demo',
  },
];

// Helper function for status badge
const getStatusBadge = (status: string) => {
  const classes = {
    completed: 'bg-success-50 text-success-700',
    scheduled: 'bg-primary-50 text-primary-700',
    failed: 'bg-error-50 text-error-700',
    canceled: 'bg-gray-100 text-gray-700',
  };
  
  return (
    <span className={`badge ${classes[status as keyof typeof classes]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const RecentCallsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Phone Number
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Date & Time
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Duration
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Agent
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Message
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {callData.map((call) => (
            <tr key={call.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-3">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-gray-400" />
                  <span>{call.phoneNumber}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                {getStatusBadge(call.status)}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                {call.date}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                {call.duration}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                {call.agent}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {call.message}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                <button className="text-primary-600 hover:text-primary-800">
                  <ExternalLink size={16} />
                  <span className="sr-only">View details</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCallsTable;