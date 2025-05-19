import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import RouterMD from './RouterMD';
import Header from '~/components/layout/header'; // Đường dẫn đến Header component
import Readme from '~/pages/Readme/Readme';
import RouterAdmin from './RouterAdmin';
import LayoutAdmin from '~/components/Admin/Dashboard/LayoutAdmin';
const AppRoutes = () => {
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/md/*", element: React.createElement(React.Fragment, null,
                    React.createElement(Header, null),
                    "   ",
                    React.createElement(Readme, { children: React.createElement(RouterMD, null) // Readme component sẽ được hiển thị trên tất cả các trang con của RouterMD
                     }),
                    " ") }),
            React.createElement(Route, { path: "/admin/*", element: React.createElement(LayoutAdmin, { children: React.createElement(RouterAdmin, null) // RouterAdmin component sẽ được hiển thị trên tất cả các trang con của RouterAdmin
                 }) }))));
};
export default AppRoutes;
