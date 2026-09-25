import { Phone, Plus, MessageSquare, Clock, GitBranch, Users, Bot, PlayCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const QuickActions = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  
  // Define action items
  const actions = [
    {
      title: 'New Phone Call',
      description: 'Demo only; calling is not implemented',
      icon: <Phone size={18} />,
      color: 'bg-primary-50 text-primary-700',
    },
    {
      title: 'Create Message',
      description: 'Demo only; template creation is not implemented',
      icon: <MessageSquare size={18} />,
      color: 'bg-secondary-50 text-secondary-700',
    },
    {
      title: 'Schedule Call',
      description: 'Demo only; scheduling is not implemented',
      icon: <Clock size={18} />,
      color: 'bg-accent-50 text-accent-700',
    },
    {
      title: 'Design Workflow',
      description: 'Demo only; workflow creation is not implemented',
      icon: <GitBranch size={18} />,
      color: 'bg-success-50 text-success-700',
    },
  ];
  
  // Admin-specific actions
  const adminActions = [
    {
      title: 'Add User',
      description: 'Demo only; account creation is not implemented',
      icon: <Users size={18} />,
      color: 'bg-warning-50 text-warning-700',
    },
    {
      title: 'AI Training Mockup',
      description: 'Demo only; AI training is not implemented',
      icon: <Bot size={18} />,
      color: 'bg-error-50 text-error-700',
    },
  ];
  
  const displayActions = isAdmin 
    ? [...actions, ...adminActions] 
    : [...actions, {
        title: 'Run Test Call',
        description: 'Demo only; test calls are not implemented',
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