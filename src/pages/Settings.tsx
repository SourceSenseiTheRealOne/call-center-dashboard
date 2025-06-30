import { useState } from 'react';
import { Save, Bot, VolumeX, Volume2, Mic, UploadCloud, Server, BellRing, Clock, CheckSquare, Edit, Check, AlertTriangle, Plus } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // Sample settings
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'Acme Corp',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    language: 'en-US',
  });
  
  // AI agent settings
  const [aiSettings, setAiSettings] = useState({
    voiceType: 'female',
    speakingRate: 1.0,
    volume: 0.8,
    toneStyle: 'professional',
    accentRegion: 'us',
    responseDelay: 'natural',
    enableSpeechRecognition: true,
    enableTranscription: true,
    maxCallDuration: 10, // minutes
  });
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    callFailureAlerts: true,
    successSummaries: true,
    dailyReports: true,
    soundAlerts: false,
  });
  
  // Handle settings tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">General Settings</h3>
              <p className="text-sm text-gray-600">Manage basic account settings and preferences.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="input mt-1 block w-full"
                  value={generalSettings.companyName}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, companyName: e.target.value })
                  }
                />
              </div>
              
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  id="timezone"
                  className="input mt-1 block w-full"
                  value={generalSettings.timezone}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, timezone: e.target.value })
                  }
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
                  Date Format
                </label>
                <select
                  id="dateFormat"
                  className="input mt-1 block w-full"
                  value={generalSettings.dateFormat}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, dateFormat: e.target.value })
                  }
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeFormat" className="block text-sm font-medium text-gray-700">
                  Time Format
                </label>
                <select
                  id="timeFormat"
                  className="input mt-1 block w-full"
                  value={generalSettings.timeFormat}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, timeFormat: e.target.value })
                  }
                >
                  <option value="12h">12-hour (AM/PM)</option>
                  <option value="24h">24-hour</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  className="input mt-1 block w-full"
                  value={generalSettings.language}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, language: e.target.value })
                  }
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'ai':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">AI Agent Settings</h3>
              <p className="text-sm text-gray-600">Customize how your AI agents interact with customers.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="voiceType" className="block text-sm font-medium text-gray-700">
                  Voice Type
                </label>
                <select
                  id="voiceType"
                  className="input mt-1 block w-full"
                  value={aiSettings.voiceType}
                  onChange={(e) =>
                    setAiSettings({ ...aiSettings, voiceType: e.target.value })
                  }
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="neutral">Gender Neutral</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="accentRegion" className="block text-sm font-medium text-gray-700">
                  Accent Region
                </label>
                <select
                  id="accentRegion"
                  className="input mt-1 block w-full"
                  value={aiSettings.accentRegion}
                  onChange={(e) =>
                    setAiSettings({ ...aiSettings, accentRegion: e.target.value })
                  }
                >
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="toneStyle" className="block text-sm font-medium text-gray-700">
                  Tone Style
                </label>
                <select
                  id="toneStyle"
                  className="input mt-1 block w-full"
                  value={aiSettings.toneStyle}
                  onChange={(e) =>
                    setAiSettings({ ...aiSettings, toneStyle: e.target.value })
                  }
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="casual">Casual</option>
                  <option value="empathetic">Empathetic</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="responseDelay" className="block text-sm font-medium text-gray-700">
                  Response Delay
                </label>
                <select
                  id="responseDelay"
                  className="input mt-1 block w-full"
                  value={aiSettings.responseDelay}
                  onChange={(e) =>
                    setAiSettings({ ...aiSettings, responseDelay: e.target.value })
                  }
                >
                  <option value="natural">Natural (with pauses)</option>
                  <option value="minimal">Minimal Delay</option>
                  <option value="none">No Delay</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="speakingRate" className="block text-sm font-medium text-gray-700">
                  Speaking Rate
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    id="speakingRate"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    className="h-2 w-full rounded-lg bg-gray-200 accent-primary-600"
                    value={aiSettings.speakingRate}
                    onChange={(e) =>
                      setAiSettings({ ...aiSettings, speakingRate: parseFloat(e.target.value) })
                    }
                  />
                  <span className="w-12 text-sm text-gray-700">{aiSettings.speakingRate}x</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-gray-700">
                  Volume
                </label>
                <div className="flex items-center space-x-4">
                  <VolumeX size={16} className="text-gray-400" />
                  <input
                    type="range"
                    id="volume"
                    min="0"
                    max="1"
                    step="0.1"
                    className="h-2 w-full rounded-lg bg-gray-200 accent-primary-600"
                    value={aiSettings.volume}
                    onChange={(e) =>
                      setAiSettings({ ...aiSettings, volume: parseFloat(e.target.value) })
                    }
                  />
                  <Volume2 size={16} className="text-gray-700" />
                  <span className="w-12 text-sm text-gray-700">{Math.round(aiSettings.volume * 100)}%</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="maxCallDuration" className="block text-sm font-medium text-gray-700">
                  Max Call Duration
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    id="maxCallDuration"
                    className="input mt-1 block w-full"
                    min="1"
                    max="30"
                    value={aiSettings.maxCallDuration}
                    onChange={(e) =>
                      setAiSettings({ ...aiSettings, maxCallDuration: parseInt(e.target.value) })
                    }
                  />
                  <span className="text-sm text-gray-700">minutes</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 rounded-md bg-gray-50 p-4">
              <h4 className="text-sm font-medium text-gray-900">Advanced Settings</h4>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mic size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Speech Recognition</p>
                    <p className="text-xs text-gray-500">Enable AI to understand customer responses</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={aiSettings.enableSpeechRecognition}
                    onChange={() =>
                      setAiSettings({
                        ...aiSettings,
                        enableSpeechRecognition: !aiSettings.enableSpeechRecognition,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckSquare size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Call Transcription</p>
                    <p className="text-xs text-gray-500">Save text transcripts of all calls</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={aiSettings.enableTranscription}
                    onChange={() =>
                      setAiSettings({
                        ...aiSettings,
                        enableTranscription: !aiSettings.enableTranscription,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-secondary mr-3">Test Voice</button>
              <button className="btn btn-primary">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
              <p className="text-sm text-gray-600">Configure how and when you receive alerts and notifications.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BellRing size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                    <p className="text-xs text-gray-500">Receive important notifications via email</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={notificationSettings.emailNotifications}
                    onChange={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        emailNotifications: !notificationSettings.emailNotifications,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Call Failure Alerts</p>
                    <p className="text-xs text-gray-500">Get notified immediately when calls fail</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={notificationSettings.callFailureAlerts}
                    onChange={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        callFailureAlerts: !notificationSettings.callFailureAlerts,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Check size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Success Summaries</p>
                    <p className="text-xs text-gray-500">Receive summaries of successful calls</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={notificationSettings.successSummaries}
                    onChange={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        successSummaries: !notificationSettings.successSummaries,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Daily Reports</p>
                    <p className="text-xs text-gray-500">Receive daily activity reports</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={notificationSettings.dailyReports}
                    onChange={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        dailyReports: !notificationSettings.dailyReports,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Volume2 size={18} className="mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Sound Alerts</p>
                    <p className="text-xs text-gray-500">Play sound notifications in browser</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={notificationSettings.soundAlerts}
                    onChange={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        soundAlerts: !notificationSettings.soundAlerts,
                      })
                    }
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            
            <div className="rounded-md bg-gray-50 p-4">
              <h4 className="mb-3 text-sm font-medium text-gray-900">Notification Email Addresses</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">admin@example.com</span>
                  <div className="flex items-center space-x-2">
                    <span className="badge bg-primary-50 text-primary-700">Primary</span>
                    <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">notifications@example.com</span>
                  <div className="flex items-center space-x-2">
                    <button className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary-600">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700">
                + Add another email
              </button>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">API & Integrations</h3>
              <p className="text-sm text-gray-600">Connect with other services and manage API access.</p>
            </div>
            
            <div className="rounded-md border border-gray-200 bg-white">
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-blue-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D4ED8" className="h-6 w-6">
                        <path d="M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25Z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">Salesforce</h4>
                      <p className="text-xs text-gray-500">Sync customer data and call logs</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="badge bg-success-50 text-success-700">Connected</span>
                    <button className="ml-3 text-sm font-medium text-primary-600 hover:text-primary-700">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-green-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#15803D" className="h-6 w-6">
                        <path d="M11.25 3v4.5H15a.75.75 0 0 1 0 1.5h-3.75V15a.75.75 0 0 1-1.5 0V9H6a.75.75 0 0 1 0-1.5h3.75V3a.75.75 0 0 1 1.5 0Z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">HubSpot</h4>
                      <p className="text-xs text-gray-500">Connect to your HubSpot CRM</p>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">Connect</button>
                </div>
              </div>
              
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-purple-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E22CE" className="h-6 w-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">Twilio</h4>
                      <p className="text-xs text-gray-500">Phone number provider and SMS integration</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="badge bg-success-50 text-success-700">Connected</span>
                    <button className="ml-3 text-sm font-medium text-primary-600 hover:text-primary-700">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-amber-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D97706" className="h-6 w-6">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">Zapier</h4>
                      <p className="text-xs text-gray-500">Create custom workflow automations</p>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">Connect</button>
                
                </div>
              </div>
            </div>
            
            <div className="rounded-md border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">API Keys</h4>
                  <p className="text-xs text-gray-500">Manage your API keys for programmatic access</p>
                </div>
                <button className="btn btn-primary btn-sm">
                  <Plus size={16} className="mr-1" />
                  Generate Key
                </button>
              </div>
              
              <div className="mt-4">
                <div className="rounded-md bg-gray-50 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Production Key</p>
                      <p className="text-xs text-gray-500">Created: April 10, 2025</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-mono text-gray-700">••••••••••••••••</span>
                      <button className="rounded p-1 text-gray-500 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'data':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Data Management</h3>
              <p className="text-sm text-gray-600">Manage your data storage and export options.</p>
            </div>
            
            <div className="rounded-md border border-gray-200 bg-white p-4">
              <h4 className="mb-2 font-medium text-gray-900">Data Storage</h4>
              
              <div className="mb-4 h-4 rounded-full bg-gray-200">
                <div
                  className="h-4 rounded-full bg-primary-600"
                  style={{ width: '35%' }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  350 MB used of 1 GB
                </span>
                <button className="font-medium text-primary-600 hover:text-primary-700">
                  Upgrade Storage
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="flex items-center">
                  <Server size={18} className="mr-2 text-gray-500" />
                  <h4 className="font-medium text-gray-900">Data Backup</h4>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Configure automatic backups of your call data and settings.
                </p>
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="backupFrequency"
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Daily Backup</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="backupFrequency"
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Weekly Backup</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="backupFrequency"
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Monthly Backup</span>
                    </label>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm mt-4">
                  Configure Backup
                </button>
              </div>
              
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="flex items-center">
                  <UploadCloud size={18} className="mr-2 text-gray-500" />
                  <h4 className="font-medium text-gray-900">Export Data</h4>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Export your data in various formats for analysis or backup.
                </p>
                <div className="mt-4 space-y-2">
                  <button className="btn btn-outline btn-sm w-full justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#15803D" className="mr-2 h-4 w-4">
                      <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 14.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm1.5-1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z" clipRule="evenodd" />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg>
                    Export as Excel
                  </button>
                  <button className="btn btn-outline btn-sm w-full justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D4ED8" className="mr-2 h-4 w-4">
                      <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg>
                    Export as CSV
                  </button>
                  <button className="btn btn-outline btn-sm w-full justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#B91C1C" className="mr-2 h-4 w-4">
                      <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm.75 17.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" clipRule="evenodd" />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg>
                    Export as PDF
                  </button>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-yellow-50 p-4 text-yellow-800">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-medium">Data Retention Notice</h4>
                  <p className="mt-1 text-sm">
                    Call recordings and transcripts are retained for 90 days by default. You can modify this in your data retention policy.
                  </p>
                  <button className="mt-2 text-sm font-medium text-yellow-800 underline">
                    View Data Retention Policy
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and AI agent settings</p>
      </div>
      
      {/* Settings tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'general'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('general')}
          >
            General
          </button>
          <button
            className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'ai'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('ai')}
          >
            <div className="flex items-center">
              <Bot size={16} className="mr-2" />
              AI Agent Settings
            </div>
          </button>
          <button
            className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'notifications'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('notifications')}
          >
            Notifications
          </button>
          <button
            className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'integrations'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('integrations')}
          >
            Integrations
          </button>
          <button
            className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'data'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('data')}
          >
            Data Management
          </button>
        </nav>
      </div>
      
      {/* Settings content */}
      <div className="card">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;