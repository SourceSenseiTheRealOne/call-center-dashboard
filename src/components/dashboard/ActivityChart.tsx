import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data
const data = [
  { name: 'Mon', completed: 34, scheduled: 42, abandoned: 8 },
  { name: 'Tue', completed: 45, scheduled: 52, abandoned: 7 },
  { name: 'Wed', completed: 38, scheduled: 46, abandoned: 8 },
  { name: 'Thu', completed: 52, scheduled: 60, abandoned: 8 },
  { name: 'Fri', completed: 48, scheduled: 57, abandoned: 9 },
  { name: 'Sat', completed: 25, scheduled: 30, abandoned: 5 },
  { name: 'Sun', completed: 20, scheduled: 25, abandoned: 5 },
];

const ActivityChart = () => {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
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
          <Legend 
            iconType="circle" 
            wrapperStyle={{ paddingTop: 12 }}
          />
          <Line 
            type="monotone" 
            dataKey="scheduled" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="completed" 
            stroke="#14B8A6" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="abandoned" 
            stroke="#EF4444" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;