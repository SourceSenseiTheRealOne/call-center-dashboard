import { useState } from 'react';
import { Plus, Search, Filter, Clock, Calendar, ArrowRight, GitBranch, Edit, Copy, Trash2, Play, PauseCircle, AlertTriangle, Check } from 'lucide-react';

// Sample workflow data
const SAMPLE_WORKFLOWS = [
  {
    id: '1',
    name: 'New Customer Onboarding',
    description: 'Welcome calls for new customers with follow-up scheduling',
    status: 'active',
    type: 'automated',
    schedule: 'Daily at 9:00 AM',
    lastRun: '2025-04-15 09:00 AM',
    nextRun: '2025-04-16 09:00 AM',
    calls: {
      completed: 128,
      scheduled: 45,
      failed: 7,
    },
    steps: [
      { name: 'Welcome Call', type: 'message', status: 'complete' },
      { name: 'Product Introduction', type: 'message', status: 'complete' },
      { name: 'Schedule Follow-up', type: 'action', status: 'active' },
    ],
  },
  {
    id: '2',
    name: 'Payment Reminder',
    description: 'Automated calls for upcoming payment reminders',
    status: 'active',
    type: 'automated',
    schedule: 'Weekly on Monday',
    lastRun: '2025-04-15 10:00 AM',
    nextRun: '2025-04-22 10:00 AM',
    calls: {
      completed: 87,
      scheduled: 34,
      failed: 5,
    },
    steps: [
      { name: 'Initial Reminder', type: 'message', status: 'complete' },
      { name: 'Payment Options', type: 'message', status: 'active' },
      { name: 'Record Response', type: 'action', status: 'pending' },
    ],
  },
  {
    id: '3',
    name: 'Customer Feedback',
    description: 'Collect feedback after service completion',
    status: 'paused',
    type: 'manual',
    schedule: 'On demand',
    lastRun: '2025-04-10 14:30 PM',
    nextRun: 'Not scheduled',
    calls: {
      completed: 56,
      scheduled: 0,
      failed: 12,
    },
    steps: [
      { name: 'Service Follow-up', type: 'message', status: 'complete' },
      { name: 'Collect Feedback', type: 'message', status: 'complete' },
      { name: 'Schedule Next Contact', type: 'action', status: 'pending' },
    ],
  },
  {
    id: '4',
    name: 'Appointment Reminders',
    description: 'Remind customers of upcoming appointments',
    status: 'error',
    type: 'automated',
    schedule: 'Daily at 3:00 PM',
    lastRun: '2025-04-14 15:00 PM',
    nextRun: 'Error - needs attention',
    calls: {
      completed: 215,
      scheduled: 0,
      failed: 43,
    },
    steps: [
      { name: 'Appointment Reminder', type: 'message', status: 'error' },
      { name: 'Confirmation Request', type: 'message', status: 'pending' },
      { name: 'Update Calendar', type: 'action', status: 'pending' },
    ],
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    active: 'bg-success-50 text-success-700',
    paused: 'bg-gray-100 text-gray-700',
    error: 'bg-error-50 text-error-700',
    complete: 'bg-primary-50 text-primary-700',
    pending: 'bg-warning-50 text-warning-700',
  };

  return (
    <span className={`badge ${statusConfig[status as keyof typeof statusConfig]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Workflows = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);
  
  // Filter workflows based on search, type, and status
  const filteredWorkflows = SAMPLE_WORKFLOWS.filter((workflow) => {
    const matchesSearch =
      searchTerm === '' ||
      workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType =
      selectedType === 'all' || workflow.type === selectedType;
    
    const matchesStatus =
      selectedStatus === 'all' || workflow.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  // Toggle workflow details
  const toggleWorkflowDetails = (id: string) => {
    if (expandedWorkflow === id) {
      setExpandedWorkflow(null);
    } else {
      setExpandedWorkflow(id);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workflows</h1>
          <p className="text-gray-600">Create and manage call workflows</p>
        </div>
        <div>
          <button className="btn btn-primary">
            <Plus size={16} className="mr-2" />
            New Workflow
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
            placeholder="Search workflows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <Filter size={16} className="mr-2 text-gray-500" />
            <span className="mr-2 text-sm font-medium text-gray-700">Type:</span>
            <select
              className="input"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="automated">Automated</option>
              <option value="manual">Manual</option>
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
              <option value="paused">Paused</option>
              <option value="error">Error</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Workflows list */}
      <div className="space-y-4">
        {filteredWorkflows.map((workflow) => (
          <div key={workflow.id} className="card overflow-hidden">
            <div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    workflow.status === 'error' 
                      ? 'bg-error-50 text-error-600' 
                      : workflow.status === 'paused'
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-primary-50 text-primary-600'
                  }`}>
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{workflow.name}</h3>
                      {workflow.status === 'error' && (
                        <div className="ml-2 text-error-600">
                          <AlertTriangle size={16} />
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{workflow.description}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <StatusBadge status={workflow.status} />
                      <span className="badge bg-gray-100 text-gray-700">
                        {workflow.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="mr-3 flex flex-col items-end text-sm">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-gray-500" />
                      <span className="font-medium">
                        {workflow.type === 'automated' ? workflow.nextRun : 'On demand'}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      <span>
                        {workflow.calls.completed} completed / {workflow.calls.failed} failed
                      </span>
                    </div>
                  </div>
                  
                  {workflow.status === 'active' ? (
                    <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-warning-600">
                      <PauseCircle size={18} />
                    </button>
                  ) : workflow.status === 'paused' ? (
                    <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-success-600">
                      <Play size={18} />
                    </button>
                  ) : null}
                  
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
              
              <div className="mt-4 flex cursor-pointer items-center text-sm text-primary-600" onClick={() => toggleWorkflowDetails(workflow.id)}>
                <span className="mr-1 font-medium">{expandedWorkflow === workflow.id ? 'Hide' : 'Show'} workflow details</span>
                <svg
                  className={`h-4 w-4 transform transition-transform ${
                    expandedWorkflow === workflow.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {expandedWorkflow === workflow.id && (
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700">Schedule Information</h4>
                    <div className="mt-2 space-y-2 rounded-md bg-gray-50 p-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          <span className="font-medium">Schedule:</span> {workflow.schedule}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          <span className="font-medium">Last Run:</span> {workflow.lastRun}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          <span className="font-medium">Next Run:</span> {workflow.nextRun}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700">Workflow Steps</h4>
                    <div className="mt-2 space-y-3">
                      {workflow.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                            step.status === 'complete' 
                              ? 'bg-success-500 text-white' 
                              : step.status === 'active'
                              ? 'bg-primary-500 text-white'
                              : step.status === 'error'
                              ? 'bg-error-500 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step.status === 'complete' ? (
                              <Check size={14} />
                            ) : step.status === 'error' ? (
                              <AlertTriangle size={14} />
                            ) : (
                              <span className="text-xs">{index + 1}</span>
                            )}
                          </div>
                          
                          <div className="ml-3 flex-1">
                            <div className="flex items-center">
                              <p className="font-medium text-gray-700">{step.name}</p>
                              <StatusBadge status={step.status} />
                            </div>
                            <p className="text-xs text-gray-500">{step.type}</p>
                          </div>
                          
                          {index < workflow.steps.length - 1 && (
                            <div className="mx-3 flex h-6 items-center">
                              <ArrowRight size={14} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="btn btn-outline">
                    Edit Workflow
                  </button>
                  {workflow.status !== 'error' && (
                    <button className="btn btn-primary ml-3">
                      {workflow.status === 'active' ? 'Pause Workflow' : 'Activate Workflow'}
                    </button>
                  )}
                  {workflow.status === 'error' && (
                    <button className="btn btn-primary ml-3">
                      Troubleshoot
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;