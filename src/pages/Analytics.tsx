import { useState } from 'react';
import { BarChart3, PieChart, LineChart, Calendar, ArrowDown, ArrowUp, Download, Phone, MessageSquare, Check, X, Clock } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

// Sample data for the charts
const callVolumeData = [
  { name: 'Jan', calls: 450 },
  { name: 'Feb', calls: 520 },
  { name: 'Mar', calls: 640 },
  { name: 'Apr', calls: 580 },
  { name: 'May', calls: 720 },
  { name: 'Jun', calls: 810 },
  { name: 'Jul', calls: 790 },
  { name: 'Aug', calls: 850 },
  { name: 'Sep', calls: 930 },
  { name: 'Oct', calls: 980 },
  { name: 'Nov', calls: 1050 },
  { name: 'Dec', calls: 1120 },
];

const callOutcomeData = [
  { name: 'Completed', value: 58, color: '#22C55E' },
  { name: 'No Answer', value: 22, color: '#F97316' },
  { name: 'Voicemail', value: 12, color: '#3B82F6' },
  { name: 'Rejected', value: 8, color: '#EF4444' },
];

const callDurationData = [
  { name: '<1 min', count: 86 },
  { name: '1-3 min', count: 234 },
  { name: '3-5 min', count: 328 },
  { name: '5-10 min', count: 187 },
  { name: '>10 min', count: 65 },
];

const dailyCallsData = [
  { day: 'Mon', completed: 34, failed: 8 },
  { day: 'Tue', completed: 45, failed: 7 },
  { day: 'Wed', completed: 38, failed: 8 },
  { day: 'Thu', completed: 52, failed: 8 },
  { day: 'Fri', completed: 48, failed: 9 },
  { day: 'Sat', completed: 25, failed: 5 },
  { day: 'Sun', completed: 20, failed: 5 },
];

// Sample key metrics
const keyMetrics = [
  {
    title: 'Total Calls',
    value: '8,274',
    change: '+12.3%',
    isPositive: true,
    icon: <Phone size={20} />,
  },
  {
    title: 'Success Rate',
    value: '76%',
    change: '+3.8%',
    isPositive: true,
    icon: <Check size={20} />,
  },
  {
    title: 'Avg. Duration',
    value: '4.2 min',
    change: '-0.5 min',
    isPositive: false,
    icon: <Clock size={20} />,
  },
  {
    title: 'Messages Used',
    value: '156',
    change: '+24',
    isPositive: true,
    icon: <MessageSquare size={20} />,
  },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('year');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Monitor call center performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-gray-500" />
            <select
              className="input"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <button className="btn btn-outline">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* Key metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div className={`rounded-md p-2 ${
                metric.title.includes('Success') 
                  ? 'bg-success-50 text-success-700' 
                  : metric.title.includes('Duration')
                  ? 'bg-secondary-50 text-secondary-700'
                  : metric.title.includes('Messages')
                  ? 'bg-accent-50 text-accent-700'
                  : 'bg-primary-50 text-primary-700'
              }`}>
                {metric.icon}
              </div>
              <div className={`flex items-center text-xs font-medium ${
                metric.isPositive ? 'text-success-700' : 'text-error-700'
              }`}>
                {metric.isPositive ? (
                  <ArrowUp size={14} className="mr-1" />
                ) : (
                  <ArrowDown size={14} className="mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">{metric.title}</p>
            <p className="mt-1 text-3xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Call volume over time */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <LineChart size={18} className="mr-2 text-primary-600" />
              <h3 className="font-semibold">Call Volume Trend</h3>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={callVolumeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    padding: '0.75rem',
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="calls" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Daily call distribution */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 size={18} className="mr-2 text-primary-600" />
              <h3 className="font-semibold">Daily Call Distribution</h3>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={dailyCallsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    padding: '0.75rem',
                  }} 
                />
                <Legend />
                <Bar dataKey="completed" fill="#22C55E" barSize={20} name="Completed" />
                <Bar dataKey="failed" fill="#EF4444" barSize={20} name="Failed" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Call outcomes */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <PieChart size={18} className="mr-2 text-primary-600" />
              <h3 className="font-semibold">Call Outcomes</h3>
            </div>
          </div>
          <div className="flex h-72 flex-col items-center justify-center">
            <div className="h-48 w-48">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={callOutcomeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {callOutcomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '0.375rem',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      border: 'none',
                      padding: '0.75rem',
                    }} 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {callOutcomeData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="mr-2 h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call duration distribution */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 size={18} className="mr-2 text-primary-600" />
              <h3 className="font-semibold">Call Duration Distribution</h3>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={callDurationData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    padding: '0.75rem',
                  }} 
                  formatter={(value) => [`${value} calls`, 'Count']}
                />
                <Bar dataKey="count" fill="#14B8A6" barSize={40} name="Call Count" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Performance metrics table */}
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Performance Metrics</h3>
          <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
            View All Metrics
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Metric
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Current
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Previous
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Change
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Target
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                {
                  name: 'Call Success Rate',
                  current: '76%',
                  previous: '72%',
                  change: '+4%',
                  isPositive: true,
                  target: '80%',
                },
                {
                  name: 'Average Call Duration',
                  current: '4:12',
                  previous: '4:45',
                  change: '-0:33',
                  isPositive: true,
                  target: '4:00',
                },
                {
                  name: 'Calls Per Day',
                  current: '285',
                  previous: '240',
                  change: '+45',
                  isPositive: true,
                  target: '300',
                },
                {
                  name: 'Voicemail Rate',
                  current: '12%',
                  previous: '15%',
                  change: '-3%',
                  isPositive: true,
                  target: '10%',
                },
                {
                  name: 'Call Rejection Rate',
                  current: '8%',
                  previous: '7%',
                  change: '+1%',
                  isPositive: false,
                  target: '5%',
                },
              ].map((metric, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {metric.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-700">
                    {metric.current}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-500">
                    {metric.previous}
                  </td>
                  <td className={`whitespace-nowrap px-4 py-3 text-right text-sm ${
                    metric.isPositive ? 'text-success-600' : 'text-error-600'
                  }`}>
                    <div className="flex items-center justify-end">
                      {metric.isPositive ? (
                        <ArrowUp size={14} className="mr-1" />
                      ) : (
                        <ArrowDown size={14} className="mr-1" />
                      )}
                      {metric.change}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-gray-900">
                    {metric.target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;