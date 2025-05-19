import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bg from '~/assets/IMG/wallpaper-win11-default.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);
    return (React.createElement("div", { className: "flex min-h-screen bg-cover backdrop-blur-sm justify-center items-center relative", style: { backgroundImage: `url(${bg})` } },
        React.createElement("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\r\n      backdrop-blur-sm bg-white/90 text-black flex flex-col w-[95%] h-[95%] rounded-md" },
            React.createElement("div", { className: "box-header flex-[1] flex items-center justify-center" },
                React.createElement("div", { className: "w-full px-6 py-4 flex items-center" },
                    React.createElement("div", { className: "w-1/2" },
                        React.createElement("h1", { className: "text-2xl font-bold text-blue-600" }, "MyLogo")),
                    React.createElement("div", { className: "flex-1 flex justify-end items-center space-x-6" },
                        React.createElement("a", { href: "#", className: "text-gray-700 hover:text-blue-500" }, "Home"),
                        React.createElement("a", { href: "#", className: "text-gray-700 hover:text-blue-500" }, "About"),
                        React.createElement(Link, { to: '/md', className: "text-gray-700 hover:text-blue-500" }, "Read MarkDown"),
                        React.createElement("a", { href: "#", className: "text-gray-700 hover:text-blue-500" }, "Contact"),
                        React.createElement("button", { className: "ml-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md" }, "Login")))),
            React.createElement("div", { className: "body flex-[8] flex items-center justify-center" },
                React.createElement("h1", null, "this is content 2")))));
};
export default Home;
