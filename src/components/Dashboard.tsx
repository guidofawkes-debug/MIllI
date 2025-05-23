import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserProfile } from './UserProfile';
import { 
  Brain, 
  Shield, 
  Code2, 
  Bot, 
  Settings, 
  Bell, 
  LineChart,
  Users,
  Calendar,
  FileText,
  Layers,
  Terminal,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    { label: 'AI Models', value: '3', icon: Brain, change: '+2', trend: 'up' },
    { label: 'Security Score', value: '95%', icon: Shield, change: '+5%', trend: 'up' },
    { label: 'Active Projects', value: '7', icon: Code2, change: '+1', trend: 'up' },
    { label: 'Automations', value: '12', icon: Bot, change: '+3', trend: 'up' },
  ];

  const recentActivity = [
    { 
      type: 'Model Training', 
      status: 'Completed', 
      time: '2h ago',
      details: 'GPT-4 fine-tuning completed successfully'
    },
    { 
      type: 'Security Scan', 
      status: 'In Progress', 
      time: '1h ago',
      details: 'Vulnerability assessment ongoing'
    },
    { 
      type: 'System Update', 
      status: 'Scheduled', 
      time: '3h ago',
      details: 'Core system update planned for midnight'
    },
  ];

  const navigationItems = [
    { name: 'Overview', icon: Layers, tab: 'overview' },
    { name: 'Analytics', icon: LineChart, tab: 'analytics' },
    { name: 'Projects', icon: Terminal, tab: 'projects' },
    { name: 'Team', icon: Users, tab: 'team' },
    { name: 'Calendar', icon: Calendar, tab: 'calendar' },
    { name: 'Documents', icon: FileText, tab: 'documents' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white/10 dark:bg-black/10 backdrop-blur-md border-r border-[#00ff00]/20 transition-all duration-300 z-50 
        ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/GlaCK0N Transparent symbol.png" 
              alt="Logo" 
              className="w-10 h-10"
            />
            {isSidebarOpen && <span className="font-bold">MIllI</span>}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-[#00ff00]/10 transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="mt-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors
                ${activeTab === item.tab ? 'bg-[#00ff00]/10 text-[#00ff00]' : 'hover:bg-[#00ff00]/5'}
                ${!isSidebarOpen && 'justify-center'}`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-[#00ff00]/20 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Welcome, {currentUser?.displayName}</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-[#00ff00]/10 transition-colors relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#00ff00] rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-[#00ff00]/10 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <UserProfile />
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-[#00ff00]" />
                  <div className={`text-sm px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-[#00ff00]/20 text-[#00ff00]' : 'bg-red-500/20 text-red-500'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <p className="text-gray-400">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Activity Feed */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/5 transition-colors"
                    >
                      <div>
                        <p className="font-medium">{activity.type}</p>
                        <p className="text-sm text-gray-400">{activity.details}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        activity.status === 'Completed' ? 'bg-[#00ff00]/20 text-[#00ff00]' :
                        activity.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {activity.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/10 transition-colors text-left">
                  <Brain className="w-6 h-6 mb-2 text-[#00ff00]" />
                  <p className="font-medium">Train Model</p>
                </button>
                <button className="p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/10 transition-colors text-left">
                  <Shield className="w-6 h-6 mb-2 text-[#00ff00]" />
                  <p className="font-medium">Security Scan</p>
                </button>
                <button className="p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/10 transition-colors text-left">
                  <Code2 className="w-6 h-6 mb-2 text-[#00ff00]" />
                  <p className="font-medium">New Project</p>
                </button>
                <button className="p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/10 transition-colors text-left">
                  <Bot className="w-6 h-6 mb-2 text-[#00ff00]" />
                  <p className="font-medium">Add Agent</p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};