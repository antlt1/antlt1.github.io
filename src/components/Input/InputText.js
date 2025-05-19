import React from 'react';
// import { Container } from './styles';
const InputText = ({ placeholder, className, type, onChange, defaultValue }) => {
    return (React.createElement("div", { className: "mt-2" }, type === 'area' ? (React.createElement("textarea", { placeholder: placeholder, name: "about", rows: 3, className: `block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`, defaultValue: defaultValue, onChange: onChange })) : (React.createElement("input", { name: "first-name", type: type || "text", autoComplete: "given-name", className: `block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`, placeholder: placeholder, defaultValue: defaultValue, onChange: onChange }))));
};
export default InputText;
