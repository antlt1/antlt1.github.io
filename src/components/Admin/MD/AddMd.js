var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Button from '~/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkDown } from '~/features/Markdown/markDownSlice';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';
const OFFLINE_MARKDOWN_TYPES = ['NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End'];
const AdminAddFileMD = () => {
    const valueMarkdown = useSelector((state) => state.markdown.valueMark);
    const nameMarkDown = useSelector((state) => state.markdown.nameMarkDown);
    const [formData, setFormData] = useState({
        nameMarkDown: '',
        valueMarkDown: '',
        typeMarkDown: '',
    });
    const dispatch = useDispatch();
    const [typeMarkDown] = useState(OFFLINE_MARKDOWN_TYPES);
    const [selectType, setSelectType] = useState(OFFLINE_MARKDOWN_TYPES[0] || '');
    useEffect(() => {
        if (OFFLINE_MARKDOWN_TYPES.length > 0) {
            const initialType = OFFLINE_MARKDOWN_TYPES[0];
            setFormData((prev) => (Object.assign(Object.assign({}, prev), { typeMarkDown: initialType })));
        }
    }, []);
    const handleTypeChange = (newlySelectedType) => {
        setSelectType(newlySelectedType);
        const updatedFormData = Object.assign(Object.assign({}, formData), { typeMarkDown: newlySelectedType });
        setFormData(updatedFormData);
        dispatch(setMarkDown({
            typeMarkDown: newlySelectedType,
            idMarkDown: null,
            nameMarkDown: null,
            valueMark: null,
        }));
    };
    const addMarkDown = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!formData.nameMarkDown.trim() || !formData.valueMarkDown.trim()) {
            toast.error('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        try {
            const useRef = collection(db, 'MarkDown');
            yield addDoc(useRef, formData);
            toast.success('Thêm thành công!');
        }
        catch (error) {
            toast.error('Thêm thất bại!');
            console.error('Lỗi:', error);
        }
    });
    return (
    // width 100% full screen
    React.createElement("div", { "data-color-mode": "dark", className: "w-full text-white bg-gray-900 p-10 rounded-lg shadow-lg h-full" },
        React.createElement("div", { className: "flex justify-end" },
            React.createElement(Button, { toLink: "/admin/md", nameButton: "Tr\u1EDF v\u1EC1" }),
            React.createElement(ToastContainer, { theme: "dark", position: "top-right", autoClose: 3000 })),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8 mt-10" },
            React.createElement("div", { className: "sm:col-span-4" },
                React.createElement("label", { htmlFor: "nameMarkDown", className: "block text-sm font-medium text-gray-200" }, "T\u00EAn Markdown"),
                React.createElement("input", { type: 'text', className: "mt-2 w-full bg-gray-800 text-white border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500", placeholder: "Nh\u1EADp t\u00EAn Markdown", onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { nameMarkDown: e.target.value })) })),
            React.createElement("div", { className: "sm:col-span-4" },
                React.createElement("label", { htmlFor: "typeMarkDown", className: "block text-sm font-medium text-gray-200" }, "Lo\u1EA1i Markdown"),
                React.createElement(Listbox, { value: selectType, onChange: handleTypeChange },
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(ListboxButton, { className: "w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" },
                            React.createElement("span", { className: "block truncate" }, selectType),
                            React.createElement(ChevronUpDownIcon, { "aria-hidden": "true", className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" })),
                        React.createElement(ListboxOptions, { transition: true, className: "absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0" }, typeMarkDown.map((type) => (React.createElement(ListboxOption, { key: type, value: type, className: "relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white" },
                            React.createElement("span", { className: "block truncate font-normal data-[selected]:font-semibold" }, type),
                            React.createElement("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden" },
                                React.createElement(CheckIcon, { "aria-hidden": "true", className: "h-5 w-5" })))))))))),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "valueMarkDown", className: "block text-sm font-medium text-gray-200" }, "N\u1ED9i dung"),
            React.createElement("div", { className: "mt-5 w-full bg-gray-800 rounded-md h-full" },
                React.createElement(MDEditor, { value: valueMarkdown || '', height: "400px", onChange: (val) => {
                        setFormData(Object.assign(Object.assign({}, formData), { valueMarkDown: val || '' }));
                        dispatch(setMarkDown({
                            valueMark: val || '',
                            nameMarkDown: nameMarkDown || '',
                            idMarkDown: null,
                            typeMarkDown: null,
                        }));
                    }, textareaProps: {
                        placeholder: 'Nhấn Enter không xuống dòng. Thêm hai khoảng trắng ở cuối dòng hoặc nhấn Shift + Enter để xuống dòng.',
                    }, 
                    // preview="edit"
                    className: "bg-gray-800 rounded-md" }))),
        React.createElement(Button, { onClick: addMarkDown, nameButton: "L\u01B0u l\u1EA1i" })));
};
export default AdminAddFileMD;
