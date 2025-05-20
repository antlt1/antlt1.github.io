import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import ReadMD from '~/pages/Readme/ReadMD';

// import styles from './styles.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);


const RouterMD: React.FC = () => {
  return (
    <Routes>
      <Route path="/read/:id" element={<ReadMD />} />
    </Routes>
  );
};

export default RouterMD;
// Đoạn code trên là một ví dụ về cách sử dụng React Router để định tuyến trong một ứng dụng React.