import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import About from '~/pages/About';
import RouterMD from './RouterMD';
import Header from '~/components/layout/header'; // Đường dẫn đến Header component
import Readme from '~/pages/Readme/Readme';
import RouterAdmin from './RouterAdmin';
import LayoutAdmin from '~/components/Admin/Dashboard/LayoutAdmin';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* trang show Readme của các code đang dùng 'trong thẻ <router path sẽ có path="/rm/* để dẫn các component con đi vào root cho thuận tiện */}
        <Route path="/" element={<Home />} />
        <Route path="/md/*" element={
          <>
            <Header />   {/* // Header component sẽ được hiển thị trên tất cả các trang con của RouterMD */}
            <Readme children={
              <RouterMD /> // Readme component sẽ được hiển thị trên tất cả các trang con của RouterMD
            } /> {/* // Readme component sẽ được hiển thị trên tất cả các trang con của RouterMD */}
          </>
        } />

        {/* route admin */}
        <Route path="/admin/*" element={
          <LayoutAdmin children={
            <RouterAdmin /> // RouterAdmin component sẽ được hiển thị trên tất cả các trang con của RouterAdmin
          } />
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
