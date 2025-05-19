import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '~/components/Admin/Auth/Login';
import AdminHome from '~/components/Admin/Home';
import ControlMd from '~/components/Admin/MD/ControlMd';
import ControlAccount from '~/components/Admin/Auth/ControlAccount';
import AdminAddFileMD from '~/components/Admin/MD/AddMd';
import AdminEditFileMD from '~/components/Admin/MD/EditMd';
// import { Container } from './styles';
const RouterAdmin = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/md", element: React.createElement(ControlMd, null) }),
        React.createElement(Route, { path: "/md/add", element: React.createElement(AdminAddFileMD, null) }),
        React.createElement(Route, { path: "/account", element: React.createElement(ControlAccount, null) }),
        React.createElement(Route, { path: "/md/add", element: React.createElement(AdminAddFileMD, null) }),
        React.createElement(Route, { path: "/md/edit/:id", element: React.createElement(AdminEditFileMD, null) }),
        React.createElement(Route, { path: "/login", element: React.createElement(AdminLogin, null) }),
        " ",
        React.createElement(Route, { path: "/", element: React.createElement(AdminHome, null) }),
        " "));
};
export default RouterAdmin;
