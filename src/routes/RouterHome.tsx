import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import About from "~/pages/About";
import AdminLogin from "~/components/Admin/Auth/Login";
import NotFound from "~/pages/404";

// import styles from './styles.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const RouterHome: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default RouterHome;
// Đoạn code trên là một ví dụ về cách sử dụng React Router để định tuyến trong một ứng dụng React.
