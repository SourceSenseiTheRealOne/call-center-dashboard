import { Phone, Plus, MessageSquare, Clock, GitBranch, Users, Bot, PlayCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const QuickActions = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  
  // Define action items
  const actions = [
    {
      title: 'New Phone Call',
      description: 'Schedule a call with an AI agent',
      icon: <Phone size={18} />,
      color: 'bg-primary-50 text-primary-700',
    },
    {
      title: 'Create Message',
      description: 'Create a new message template',
      icon: <MessageSquare size={18} />,
      color: 'bg-secondary-50 text-secondary-700',
    },
    {
      title: 'Schedule Call',
      description: 'Set up a call for a future time',
      icon: <Clock size={18} />,
      color: 'bg-accent-50 text-accent-700',
    },
    {
      title: 'Design Workflow',
      description: 'Create a new calling workflow',
      icon: <GitBranch size={18} />,
      color: 'bg-success-50 text-success-700',
    },
  ];
  
  // Admin-specific actions
  const adminActions = [
    {
      title: 'Add User',
      description: 'Create a new user account',
      icon: <Users size={18} />,
      color: 'bg-warning-50 text-warning-700',
    },
    {
      title: 'Train AI Agent',
      description: 'Update AI agent knowledge',
      icon: <Bot size={18} />,
      color: 'bg-error-50 text-error-700',
    },
  ];
  
  const displayActions = isAdmin 
    ? [...actions, ...adminActions] 
    : [...actions, {
        title: 'Run Test Call',
        description: 'Test your call setup',
        icon: <PlayCircle size={18} />,
        color: 'bg-warning-50 text-warning-700',
      }];
  
  return (
    <div className="space-y-3">
      {displayActions.map((action, index) => (
        <button 
          key={index}
          className="flex w-full items-center rounded-md border border-gray-200 p-3 text-left transition-all hover:border-primary-300 hover:bg-gray-50"
        >
          <span className={`mr-3 rounded-md p-2 ${action.color}`}>
            {action.icon}
          </span>
          <div>
            <p className="font-medium">{action.title}</p>
            <p className="text-xs text-gray-600">{action.description}</p>
          </div>
        </button>
      ))}
      
      <button className="flex w-full items-center justify-center rounded-md border border-dashed border-gray-300 p-3 text-gray-600 hover:border-primary-300 hover:text-primary-600">
        <Plus size={18} className="mr-2" />
        Add Custom Action
      </button>
    </div>
  );
};

export default QuickActions;