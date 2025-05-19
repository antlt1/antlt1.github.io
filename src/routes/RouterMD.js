import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import NodeSetup from '~/pages/Readme/NodeSetup';
import ViteReact from '~/pages/Readme/ViteReact';
import ReadMD from '~/pages/Readme/ReadMD';
// import styles from './styles.module.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);
const RouterMD = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/node", element: React.createElement(NodeSetup, null) }),
        React.createElement(Route, { path: "/vite", element: React.createElement(ViteReact, null) }),
        React.createElement(Route, { path: "/read/:id", element: React.createElement(ReadMD, null) })));
};
export default RouterMD;
// Đoạn code trên là một ví dụ về cách sử dụng React Router để định tuyến trong một ứng dụng React.
