import React from 'react';
import { Link } from 'react-router-dom';
import LeftBar from './LeftBar';

const navigation = [
  { 
    name: 'File Mark Down', 
    href: '/admin/md', 
    group: true,
    item: [
      {
        name: 'Quản lý Mark Down',
        href: '/admin/md',
        current: false
      },
      {
        name: 'Thêm Mark Down',
        href: '/admin/md/add',
        current: false
      }
    ]

  },
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
          <p className="text-2xl font-bold text-blue-400">Dashboard</p>
        </div>
        {/* Divider */}
        <div className="h-1 bg-gray-800 w-full mt-2"></div>
        {/* Navigation */}
        <LeftBar ListElement={navigation} />
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