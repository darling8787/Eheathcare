import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/contexts/Authcontext';
import { 
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Stethoscope,
  Settings,
  LogOut,
  Plus,
  Menu
} from 'lucide-react';

const SideNav = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeGroup, setActiveGroup] = useState('');

  // Navigation items
  const navGroups = [
    {
      title: 'Main',
      items: [
        { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/appointments', icon: CalendarCheck, label: 'Appointments' },
        { to: '/records', icon: FileText, label: 'Medical Records' }
      ]
    },
    {
      title: 'Health',
      items: [
        { to: '/doctors', icon: Stethoscope, label: 'My Doctors' },
        { to: '/prescriptions', icon: FileText, label: 'Prescriptions' },
        { to: '/lab-results', icon: FileText, label: 'Lab Results' }
      ]
    }
  ];

  return (
    <aside className={`h-screen bg-gray-900 border-r border-gray-700 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden p-4 text-gray-400 hover:text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
            {currentUser?.displayName?.[0] || 'U'}
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-white font-medium truncate">
                {currentUser?.displayName || 'User'}
              </p>
              <p className="text-sm text-gray-400">
                {currentUser?.role || 'Patient'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.title} className="border-b border-gray-700">
            {!isCollapsed && (
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {group.title}
              </h3>
            )}
            <ul className="space-y-1 p-2">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `flex items-center gap-3 p-3 rounded-lg transition-colors
                      ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'text-gray-300 hover:bg-gray-800'}`
                    }
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-2 border-t border-gray-700">
        <button
          onClick={() => navigate('/book-appointment')}
          className="w-full flex items-center gap-3 p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          {!isCollapsed && 'New Appointment'}
        </button>
      </div>

      {/* Settings & Logout */}
      <div className="p-2">
        <NavLink
          to="/settings"
          className={({ isActive }) => 
            `flex items-center gap-3 p-3 rounded-lg transition-colors
            ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`
          }
        >
          <Settings className="w-5 h-5" />
          {!isCollapsed && 'Settings'}
        </NavLink>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && 'Log Out'}
        </button>
      </div>
    </aside>
  );
};

export default SideNav;