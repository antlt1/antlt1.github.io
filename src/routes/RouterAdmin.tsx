import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AdminLogin from '~/components/Admin/Auth/Login';
import AdminHome from '~/components/Admin/Home';
import ControlMd from '~/components/Admin/MD/ControlMd';
import ControlAccount from '~/components/Admin/Auth/ControlAccount';
import AdminAddFileMD from '~/components/Admin/MD/AddMd';
import AdminEditFileMD from '~/components/Admin/MD/EditMd';

// import { Container } from './styles';

const RouterAdmin: React.FC = () => {
  return (
    <Routes>
      {/* Add your route components here */}
      <Route path="/md" element={<ControlMd />} />
      <Route path="/md/add" element={<AdminAddFileMD />} />
      <Route path="/account" element={<ControlAccount />} />
      <Route path="/md/add" element={<AdminAddFileMD />} />
      <Route path="/md/edit/:id" element={<AdminEditFileMD />} />
      <Route path="/login" element={<AdminLogin />} /> {/* Add AdminLogin route */}
      <Route path="/" element={<AdminHome />} /> {/* Add AdminHome route */}
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default RouterAdmin;