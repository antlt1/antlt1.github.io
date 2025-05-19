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
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig'; // Đảm bảo đường dẫn này chính xác
import { Link } from 'react-router-dom';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid';
const MarkDownList = () => {
    const [markDowns, setMarkDowns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const OFFLINE_MARKDOWN_TYPES = ['All', 'NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End']; //dùng để lọc lại list xem cho dễ
    const [typeMarkDown] = useState(OFFLINE_MARKDOWN_TYPES);
    const [selectType, setSelectType] = useState(OFFLINE_MARKDOWN_TYPES[0] || '');
    // fun tìm và render dl
    // ...existing code...
    // fun tìm và render dl
    const fetchMarkDowns = (filter) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        setError(null);
        try {
            const markDownCollectionRef = collection(db, 'MarkDown');
            const querySnapshot = yield getDocs(markDownCollectionRef);
            const fetchedMarkDowns = [];
            // Nếu có filter thì chỉ lấy những markdown có typeMarkDown đúng filter, không thì lấy hết
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (!filter || data.typeMarkDown === filter || filter === 'All') {
                    fetchedMarkDowns.push({
                        idMarkDown: doc.id,
                        nameMarkDown: data.nameMarkDown || 'Không có tên',
                        valueMark: data.valueMarkDown || 'Không có nội dung',
                        typeMarkDown: data.typeMarkDown || 'Không có loại',
                    });
                }
            });
            setMarkDowns(fetchedMarkDowns);
        }
        catch (err) {
            console.error('Lỗi khi lấy dữ liệu MarkDown:', err);
            setError('Không thể tải danh sách MarkDown.');
        }
        finally {
            setLoading(false);
        }
    });
    // cập nhật nếu click cái type
    const handleTypeChange = (newlySelectedType) => {
        setSelectType(newlySelectedType);
        fetchMarkDowns(newlySelectedType); // Gọi lại fetchMarkDowns với filter mới
        // console.log(newlySelectedType);
    };
    useEffect(() => {
        fetchMarkDowns();
    }, []);
    // ...existing code...
    if (loading) {
        return (React.createElement("div", { className: "flex items-center justify-center min-h-[200px] text-white text-lg bg-gray-900 rounded-lg" }, "\u0110ang t\u1EA3i danh s\u00E1ch..."));
    }
    if (error) {
        return (React.createElement("div", { className: "flex items-center justify-center min-h-[200px] text-red-400 text-lg bg-gray-900 rounded-lg" }, error));
    }
    if (markDowns.length === 0) {
        return (React.createElement("div", null,
            React.createElement(Listbox, { value: selectType, onChange: handleTypeChange },
                React.createElement("div", { className: "relative mt-2" },
                    React.createElement(ListboxButton, { className: "w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" },
                        React.createElement("span", { className: "block truncate" }, selectType),
                        React.createElement(ChevronUpDownIcon, { "aria-hidden": "true", className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" })),
                    React.createElement(ListboxOptions, { transition: true, className: "absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0" }, typeMarkDown.map((type) => (React.createElement(ListboxOption, { key: type, value: type, className: "relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white" },
                        React.createElement("span", { className: "block truncate font-normal data-[selected]:font-semibold" }, type),
                        React.createElement("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden" },
                            React.createElement(CheckIcon, { "aria-hidden": "true", className: "h-5 w-5" })))))))),
            React.createElement("div", { className: "flex items-center justify-center min-h-[200px] text-gray-400 text-lg bg-gray-900 rounded-lg" }, "Kh\u00F4ng c\u00F3 t\u00E0i li\u1EC7u MarkDown n\u00E0o.")));
    }
    return (React.createElement("div", { className: "w-full max-w-12xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg" },
        React.createElement(Listbox, { value: selectType, onChange: handleTypeChange },
            React.createElement("div", { className: "relative mt-2" },
                React.createElement(ListboxButton, { className: "w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" },
                    React.createElement("span", { className: "block truncate" }, selectType),
                    React.createElement(ChevronUpDownIcon, { "aria-hidden": "true", className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" })),
                React.createElement(ListboxOptions, { transition: true, className: "absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0" }, typeMarkDown.map((type) => (React.createElement(ListboxOption, { key: type, value: type, className: "relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white" },
                    React.createElement("span", { className: "block truncate font-normal data-[selected]:font-semibold" }, type),
                    React.createElement("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden" },
                        React.createElement(CheckIcon, { "aria-hidden": "true", className: "h-5 w-5" })))))))),
        React.createElement("h2", { className: "text-2xl font-semibold mb-6" }, "Danh s\u00E1ch MarkDown"),
        React.createElement("ul", { className: "space-y-4" }, markDowns.map((md) => (React.createElement(Link, { to: `/admin/md/edit/${md.idMarkDown}`, key: md.idMarkDown, className: "block" },
            React.createElement("li", { className: "p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700" },
                React.createElement("h3", { className: "text-lg font-medium text-blue-300" }, md.nameMarkDown),
                React.createElement("p", { className: "text-sm text-gray-400 truncate mt-1" }, md.valueMark))))))));
};
export default MarkDownList;
