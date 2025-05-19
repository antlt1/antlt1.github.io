var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig';
// import { Container } from './styles';
const cx = classNames.bind(styles);
const Readme = ({ 
// sai gan component de sai trong router
children }) => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAndGroupMarkdownData = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            setError(null);
            try {
                const markDownCollectionRef = collection(db, "MarkDown");
                const querySnapshot = yield getDocs(markDownCollectionRef);
                const allItems = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Đảm bảo các trường cần thiết tồn tại
                    if (data.nameMarkDown && data.typeMarkDown) {
                        allItems.push({
                            id: doc.id, // Sử dụng ID của document làm ID cho link
                            name: data.nameMarkDown,
                            type: data.typeMarkDown,
                        });
                    }
                });
                // Nhóm các items theo typeMarkDown
                const groupedData = allItems.reduce((acc, currentItem) => {
                    const group = acc.find(g => g.typeName === currentItem.type);
                    if (group) {
                        group.items.push({ id: currentItem.id, name: currentItem.name });
                    }
                    else {
                        acc.push({
                            typeName: currentItem.type,
                            items: [{ id: currentItem.id, name: currentItem.name }],
                        });
                    }
                    return acc;
                }, []);
                setMenuData(groupedData);
            }
            catch (err) {
                console.error("Lỗi khi lấy dữ liệu menu từ Firestore:", err);
                setError("Không thể tải dữ liệu menu. Vui lòng thử lại sau.");
            }
            finally {
                setLoading(false);
            }
        });
        fetchAndGroupMarkdownData();
    }, []); // Chạy một lần khi component được mount
    return (React.createElement("div", { className: cx("flex-left", "flex", "h-screen", "bg-gray-900", "text-white") },
        React.createElement("aside", { className: cx("w-64", "bg-gray-800", "shadow-md", "tab-left") },
            React.createElement("div", { className: cx("p-4") },
                React.createElement("div", { className: cx("text-blue-400", "font-bold", "text-lg") }, "ReadMe Step Code")),
            React.createElement("div", { className: cx("border-b", "border-gray-700", "mx-4") }),
            loading && React.createElement("div", { className: cx("p-4", "text-gray-400") }, "\u0110ang t\u1EA3i menu..."),
            error && React.createElement("div", { className: cx("p-4", "text-red-500") }, error),
            !loading && !error && (React.createElement("nav", { className: cx("flex", "flex-col", "gap-2", "p-2") },
                menuData.length === 0 && React.createElement("div", { className: cx("p-2", "text-gray-500") }, "Kh\u00F4ng c\u00F3 m\u1EE5c n\u00E0o \u0111\u1EC3 hi\u1EC3n th\u1ECB."),
                menuData.map((group) => (React.createElement("div", { key: group.typeName, className: cx("group") },
                    React.createElement("div", { className: cx("font-bold", "text-gray-300", "px-2", "py-1") }, group.typeName),
                    group.items.map((item) => (React.createElement(Link, { key: item.id, to: `/md/read/${item.id}`, className: cx("group", "relative", "flex", "rounded-sm", "px-2", "py-1.5", "text-gray-400", "hover:bg-gray-700", "hover:text-white", "transition-colors", "duration-150", "ease-in-out" // Thêm hiệu ứng chuyển đổi mượt mà
                        ) }, item.name))))))))),
        React.createElement("main", { className: cx("main-flex", "flex-1", "grid", "grid-cols-1", "gap-1", "p-1") },
            React.createElement("div", { className: cx(
                // "border-dashed",
                // "border-2",
                // "border-gray-300",
                // "rounded-lg"
                ) }, children))));
};
export default Readme;
