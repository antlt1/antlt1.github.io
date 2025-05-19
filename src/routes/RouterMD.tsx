import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import NodeSetup from '~/pages/Readme/NodeSetup';
import ViteReact from '~/pages/Readme/ViteReact';
import ReadMD from '~/pages/Readme/ReadMD';

// import styles from './styles.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);


const RouterMD: React.FC = () => {
  return (
    
    <Routes>
      <Route path="/node" element={<NodeSetup />} />
      <Route path="/vite" element={<ViteReact />} />
      <Route path="/read/:id" element={<ReadMD />} />
    </Routes>
  );
};

export default RouterMD;
// Đoạn code trên là một ví dụ về cách sử dụng React Router để định tuyến trong một ứng dụng React.