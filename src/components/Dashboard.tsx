import React, { useState, useEffect } from 'react';
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
  X,
  CreditCard,
  Database,
  Cloud,
  Activity,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [alerts, setAlerts] = useState(3);

  const metrics = [
    { 
      label: 'AI Models', 
      value: '3', 
      icon: Brain, 
      change: '+2', 
      trend: 'up',
      details: {
        active: 2,
        training: 1,
        total: 3
      }
    },
    { 
      label: 'Security Score', 
      value: '95%', 
      icon: Shield, 
      change: '+5%', 
      trend: 'up',
      details: {
        threats: 0,
        vulnerabilities: 2,
        lastScan: '2h ago'
      }
    },
    { 
      label: 'Active Projects', 
      value: '7', 
      icon: Code2, 
      change: '+1', 
      trend: 'up',
      details: {
        inProgress: 4,
        completed: 3,
        delayed: 0
      }
    },
    { 
      label: 'Resource Usage', 
      value: '68%', 
      icon: Database, 
      change: '-5%', 
      trend: 'down',
      details: {
        cpu: '45%',
        memory: '68%',
        storage: '52%'
      }
    },
  ];

  const recentActivity = [
    { 
      type: 'Model Training', 
      status: 'Completed', 
      time: '2h ago',
      details: 'GPT-4 fine-tuning completed successfully',
      resource: 'AI-Model-001',
      user: 'System'
    },
    { 
      type: 'Security Alert', 
      status: 'Warning', 
      time: '1h ago',
      details: 'Unusual API access pattern detected',
      resource: 'API Gateway',
      user: 'Security System'
    },
    { 
      type: 'Deployment', 
      status: 'In Progress', 
      time: '30m ago',
      details: 'Deploying v2.1.0 to production',
      resource: 'Pipeline',
      user: 'CI/CD'
    },
    { 
      type: 'Resource Scale', 
      status: 'Completed', 
      time: '15m ago',
      details: 'Auto-scaled compute resources',
      resource: 'Cluster',
      user: 'System'
    }
  ];

  const navigationItems = [
    { name: 'Overview', icon: Layers, tab: 'overview' },
    { name: 'Analytics', icon: LineChart, tab: 'analytics' },
    { name: 'Projects', icon: Terminal, tab: 'projects' },
    { name: 'Team', icon: Users, tab: 'team' },
    { name: 'Resources', icon: Database, tab: 'resources' },
    { name: 'Billing', icon: CreditCard, tab: 'billing' },
    { name: 'Calendar', icon: Calendar, tab: 'calendar' },
    { name: 'Documents', icon: FileText, tab: 'documents' },
  ];

  const quickActions = [
    {
      title: 'Train Model',
      icon: Brain,
      action: () => console.log('Train Model'),
      description: 'Start a new model training session'
    },
    {
      title: 'Security Scan',
      icon: Shield,
      action: () => console.log('Security Scan'),
      description: 'Run a comprehensive security audit'
    },
    {
      title: 'New Project',
      icon: Code2,
      action: () => console.log('New Project'),
      description: 'Create a new project workspace'
    },
    {
      title: 'Add Agent',
      icon: Bot,
      action: () => console.log('Add Agent'),
      description: 'Deploy a new AI agent'
    }
  ];

  const systemStatus = {
    api: { status: 'operational', latency: '45ms' },
    database: { status: 'operational', latency: '12ms' },
    ml: { status: 'operational', load: '65%' },
    storage: { status: 'warning', usage: '82%' }
  };

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

        {/* System Status */}
        {isSidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#00ff00]/20">
            <h3 className="text-sm font-semibold mb-2 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              System Status
            </h3>
            <div className="space-y-2 text-sm">
              {Object.entries(systemStatus).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="capitalize">{key}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    value.status === 'operational' ? 'bg-[#00ff00]/20 text-[#00ff00]' : 
                    'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {value.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-[#00ff00]/20 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {currentUser?.displayName}</h1>
              <p className="text-sm text-gray-400">Last login: Today at 9:42 AM</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-[#00ff00]/10 transition-colors relative">
                <Bell className="w-6 h-6" />
                {alerts > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00ff00] rounded-full flex items-center justify-center text-xs text-black">
                    {alerts}
                  </span>
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-[#00ff00]/10 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <UserProfile />
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Alerts Banner */}
          {alerts > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/40 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3" />
                <span>You have {alerts} pending security alerts that require attention</span>
              </div>
              <button className="px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-lg transition-colors">
                View Alerts
              </button>
            </motion.div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6 cursor-pointer hover:border-[#00ff00]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-[#00ff00]" />
                  <div className={`text-sm px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-[#00ff00]/20 text-[#00ff00]' : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <p className="text-gray-400">{metric.label}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#00ff00]/10 text-sm space-y-1">
                  {Object.entries(metric.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
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
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{activity.type}</p>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            activity.status === 'Completed' ? 'bg-[#00ff00]/20 text-[#00ff00]' :
                            activity.status === 'Warning' ? 'bg-yellow-500/20 text-yellow-500' :
                            activity.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                            'bg-gray-500/20 text-gray-500'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{activity.details}</p>
                        <div className="flex items-center text-xs text-gray-400 mt-2">
                          <span>{activity.resource}</span>
                          <span className="mx-2">•</span>
                          <span>{activity.user}</span>
                          <span className="mx-2">•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index}
                      onClick={action.action}
                      className="p-4 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-[#00ff00]/10 transition-colors text-left group"
                    >
                      <action.icon className="w-6 h-6 mb-2 text-[#00ff00] group-hover:scale-110 transition-transform" />
                      <p className="font-medium">{action.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{action.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Resource Usage */}
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Resource Usage
                </h2>
                <div className="space-y-4">
                  {Object.entries(systemStatus).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key}</span>
                        <span>{Object.values(value)[1]}</span>
                      </div>
                      <div className="h-2 bg-white/5 dark:bg-black/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#00ff00] rounded-full transition-all"
                          style={{ 
                            width: typeof Object.values(value)[1] === 'string' && 
                                  Object.values(value)[1].includes('%') ? 
                                  Object.values(value)[1] : '100%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};