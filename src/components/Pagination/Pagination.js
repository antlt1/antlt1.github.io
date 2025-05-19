import React from 'react';
// import { Container } from './styles';
const Pagination = () => {
    return (React.createElement("div", { className: "flex items-center justify-between mt-4" },
        React.createElement("div", { className: "flex items-center" },
            React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-400" }, "Page 1 of 10")),
        React.createElement("div", { className: "flex items-center space-x-2" },
            React.createElement("button", { className: "px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" }, "Previous"),
            React.createElement("button", { className: "px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" }, "Next"))));
};
export default Pagination;
