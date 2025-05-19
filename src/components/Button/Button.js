import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ nameButton, onClick, toLink }) => {
    return (
    // check nếu truyền toLink null thì để # bth
    React.createElement(Link, { to: toLink || '#' },
        React.createElement("div", { className: "mt-6 flex items-center justify-end gap-x-6" },
            React.createElement("button", { type: "submit", onClick: onClick, className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" }, nameButton))));
};
export default Button;
