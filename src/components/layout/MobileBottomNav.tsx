import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, Activity, PlayCircle } from 'lucide-react';
export function MobileBottomNav() {
  const location = useLocation();
  const navItems = [
  {
    icon: Home,
    label: 'Home',
    path: '/'
  },
  {
    icon: Calendar,
    label: 'Matches',
    path: '/matches'
  },
  {
    icon: PlayCircle,
    label: 'Live',
    path: '/live',
    isCenter: true
  },
  {
    icon: Activity,
    label: 'Stats',
    path: '/stats'
  },
  {
    icon: Users,
    label: 'Teams',
    path: '/teams'
  }];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-lightgray z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          if (item.isCenter) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative -top-5 flex flex-col items-center justify-center">
                
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${isActive ? 'bg-emerald shadow-lg shadow-emerald/30' : 'bg-orangeGlow shadow-lg shadow-orangeGlow/30'} text-white transition-all duration-300`}>
                  
                  <Icon className="w-7 h-7 text-white" fill="currentColor" />
                </div>
                <span className="text-[10px] font-oswald tracking-wider mt-1 text-slate font-medium">
                  {item.label}
                </span>
              </Link>);

          }
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${isActive ? 'text-emerald font-bold' : 'text-slate-600 hover:text-slate'}`}>
              
              <Icon
                className={`w-5 h-5 mb-1 ${isActive ? '' : ''}`} />
              
              <span className="text-[10px] font-oswald tracking-wider">
                {item.label}
              </span>
            </Link>);

        })}
      </div>
    </div>);

}