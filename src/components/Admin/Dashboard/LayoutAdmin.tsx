import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Quản lý Readme', href: '/admin/md', current: true },
  { name: 'Quản lý Account', href: '/admin/account', current: false },
  { name: 'Projects', href: '/admin/projects', current: false },
  { name: 'Calendar', href: '/admin/calendar', current: false },
  { name: 'Đăng Xuất', href: '/admin/SignOut', current: false },
];

interface LayoutAdminPop {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminPop> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden text-sm">
      {/* Sidebar */}
      <div className="hidden lg:block w-48 xl:w-72 flex-shrink-0 border-r border-gray-800 h-full overflow-y-auto p-5">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-blue-400">Dashboard</h1>
        </div>
        {/* Divider */}
        <div className="h-1 bg-gray-800 w-full mt-2"></div>
        {/* Navigation */}
        <div className="mt-4 flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              to={item.href}
              key={item.name}
              className={`flex items-center h-10 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                item.current
                  ? 'bg-gray-800 text-blue-300'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow flex flex-col h-full overflow-hidden">
        {/* Top Navigation */}
        <div className="hidden lg:flex h-16 w-full border-b border-gray-800 px-10">
          <div className="flex h-full text-gray-400">
            {/* <a
              href="#"
              className="h-full border-b-2 border-transparent inline-flex items-center mr-8 hover:text-white"
            >
              Company
            </a> */}
            {/* Thanh Header */}
          </div>
        </div>
        {/* Content Area */}
        <div className="flex-grow overflow-x-hidden">
          <div className="flex-grow bg-gray-900 overflow-y-auto p-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;