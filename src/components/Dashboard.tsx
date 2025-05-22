import React from 'react';
import { useAuth } from './contexts/AuthContext';
import { UserProfile } from './UserProfile';
import { Brain, Shield, Code2, Bot, Settings, Users, Activity, Bell } from 'lucide-react';

export const Dashboard = () => {
  const { currentUser } = useAuth();

  const metrics = [
    { label: 'AI Models', value: '3', icon: Brain },
    { label: 'Security Score', value: '95%', icon: Shield },
    { label: 'Active Projects', value: '7', icon: Code2 },
    { label: 'Automations', value: '12', icon: Bot },
  ];

  const recentActivity = [
    { type: 'Model Training', status: 'Completed', time: '2h ago' },
    { type: 'Security Scan', status: 'In Progress', time: '1h ago' },
    { type: 'System Update', status: 'Scheduled', time: '3h ago' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {currentUser?.displayName}</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-[#00ff00]/10">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#00ff00]/10">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <metric.icon className="w-8 h-8 text-[#00ff00]" />
                <span className="text-2xl font-bold">{metric.value}</span>
              </div>
              <p className="mt-2 text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="md:col-span-1">
            <UserProfile />
          </div>

          {/* Activity Feed */}
          <div className="md:col-span-2">
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-[#00ff00]/10">
                    <div>
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      activity.status === 'Completed' ? 'bg-[#00ff00]/20 text-[#00ff00]' :
                      activity.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};