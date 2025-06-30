import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
};

const StatsCard = ({ title, value, change, isPositive, icon, color }: StatsCardProps) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-700',
    secondary: 'bg-secondary-50 text-secondary-700',
    accent: 'bg-accent-50 text-accent-700',
    success: 'bg-success-50 text-success-700',
    warning: 'bg-warning-50 text-warning-700',
    error: 'bg-error-50 text-error-700',
  };
  
  const trendClasses = isPositive 
    ? 'text-success-700 bg-success-50' 
    : 'text-error-700 bg-error-50';
  
  return (
    <div className="card transition-all duration-200 hover:translate-y-[-4px]">
      <div className="flex items-center justify-between">
        <span className={`rounded-md p-2 ${colorClasses[color]}`}>
          {icon}
        </span>
        <span className={`flex items-center rounded-full px-2 py-1 text-xs font-medium ${trendClasses}`}>
          {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
          {change}
        </span>
      </div>
      <p className="mt-4 text-sm text-gray-600">{title}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
};

export default StatsCard;