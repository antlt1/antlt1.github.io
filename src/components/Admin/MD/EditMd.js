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
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import InputText from '~/components/Input/InputText';
import MDEditor from '@uiw/react-md-editor';
import Button from '~/components/Button/Button';
import { useDispatch } from 'react-redux';
import { setMarkDown } from '~/features/Markdown/markDownSlice';
import { getDoc, doc, updateDoc } from 'firebase/firestore'; // DocumentData might not be needed if not used elsewhere
import { db } from '~/firebase/firebaseConfig';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
const OFFLINE_MARKDOWN_TYPES = ['NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End'];
// Lấy id trong router /admin/md/edit/id => id là số hoặc mã á hoặc tên á
const AdminEditFileMD = () => {
    const { id } = useParams(); // Extract id from the router path
    useEffect(() => {
        console.log(`id của page: ${id}`);
        if (id) {
            console.log("Extracted ID from router:", id);
            // Fetch data from Firestore using the id
            const fetchMarkDown = () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const docRef = doc(db, "MarkDown", id); // Reference the document by id
                    const docSnap = yield getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setFormData({
                            typeMarkDown: data.typeMarkDown || '',
                            idMarkDown: id,
                            nameMarkDown: data.nameMarkDown || '',
                            valueMarkDown: data.valueMarkDown || '',
                        });
                        console.log("Fetched data for ID:", id, data);
                    }
                    else {
                        console.log("No such document!");
                    }
                }
                catch (error) {
                    console.error("Error fetching data from Firestore:", error);
                }
            });
            fetchMarkDown();
        }
    }, [id]);
    // Removed redundant 
    // console.log("formData:");
    // Add typeMarkDown to formData and initialize it
    const [formData, setFormData] = useState({
        idMarkDown: id,
        nameMarkDown: "",
        valueMarkDown: "",
        typeMarkDown: "", // Initialize typeMarkDown
    });
    const dispatch = useDispatch();
    // Use the offline array for types
    const [typeMarkDown, setTypeMarkDown] = useState(OFFLINE_MARKDOWN_TYPES);
    // Initialize selectType with the first item from the offline array, or an empty string if the array is empty
    const [selectType, setSelectType] = useState(OFFLINE_MARKDOWN_TYPES.length > 0 ? OFFLINE_MARKDOWN_TYPES[0] : "");
    // Set initial formData.typeMarkDown based on the first offline type
    useEffect(() => {
        if (OFFLINE_MARKDOWN_TYPES.length > 0) {
            const initialType = OFFLINE_MARKDOWN_TYPES[0];
            // Only set if formData.typeMarkDown is not already set (e.g. by user interaction or other logic)
            // and selectType is also matching the initial type.
            // This ensures that if selectType was somehow initialized differently, we align formData.
            if (!formData.typeMarkDown || formData.typeMarkDown !== initialType) {
                setFormData(prev => (Object.assign(Object.assign({}, prev), { typeMarkDown: initialType })));
            }
        }
    }, []); // Run once on mount to set initial form data type
    // Handler for Listbox selection change
    const handleTypeChange = (newlySelectedType) => {
        setSelectType(newlySelectedType);
        const updatedFormData = Object.assign(Object.assign({}, formData), { typeMarkDown: newlySelectedType });
        setFormData(updatedFormData);
        dispatch(setMarkDown({
            typeMarkDown: newlySelectedType,
            idMarkDown: null, // These nulls are based on your original dispatch
            nameMarkDown: null,
            valueMark: null
        }));
        console.log("Selected type:", newlySelectedType);
        console.log("FormData after type selection (this log shows data passed to setFormData):", updatedFormData);
    };
    // tạo và up lên firebase
    const addMarkDown = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!formData.nameMarkDown.trim() || !formData.valueMarkDown.trim()) {
            console.log("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        try {
            if (formData.idMarkDown) {
                yield updateDoc(doc(db, "MarkDown", formData.idMarkDown), formData);
                console.log("????");
                toast.success("Sửa thành công!");
            }
            else {
                console.error("idMarkDown is undefined. Cannot update document.");
            }
        }
        catch (error) {
            toast.error("Sửa thất bại!");
            console.log("Lỗi:", error);
            // an
        }
    });
    return (React.createElement("div", { className: cx('container', 'space-y-12') },
        React.createElement("div", { className: "btn", style: { display: 'flex', justifyContent: 'flex-end', flexDirection: 'row-reverse', margin: "0" } },
            React.createElement(Button, { toLink: '/admin/md', nameButton: 'Tr\u1EDF v\u1EC1' }),
            React.createElement(ToastContainer, null)),
        React.createElement("div", { className: cx('mt-10', 'grid', 'grid-cols-1', 'sm:grid-cols-6') },
            React.createElement("div", { className: cx('sm:col-span-4') },
                React.createElement("label", { htmlFor: "username", className: cx('block', 'text-sm/6', 'font-medium', 'text-gray-900') }, "T\u00EAn MaskDown"),
                React.createElement(InputText, { className: cx('mt-2'), placeholder: "Nh\u1EADp t\u00EAn Markdown", defaultValue: formData.nameMarkDown, onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { nameMarkDown: e.target.value })) })),
            React.createElement("div", { className: cx('sm:col-span-4') },
                React.createElement("label", { htmlFor: "username", className: cx('block', 'text-sm/6', 'font-medium', 'text-gray-900') }, "Lo\u1EA1i MaskDown"),
                React.createElement(Listbox, { value: selectType, onChange: handleTypeChange },
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(ListboxButton, { className: "grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" },
                            React.createElement("span", { className: "col-start-1 row-start-1 flex items-center gap-3 pr-6" },
                                React.createElement("span", { className: "block truncate" }, selectType)),
                            React.createElement(ChevronUpDownIcon, { "aria-hidden": "true", className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" })),
                        React.createElement(ListboxOptions, { transition: true, className: "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm" }, typeMarkDown.map((type) => (React.createElement(ListboxOption, { key: type, value: type, 
                            // onSelect prop is removed
                            className: "group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden" },
                            React.createElement("span", { className: "ml-3 block truncate font-normal group-data-selected:font-semibold" }, type),
                            React.createElement("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white" },
                                React.createElement(CheckIcon, { "aria-hidden": "true", className: "size-5" })))))))))),
        React.createElement("div", { className: cx('box-control-md--') },
            React.createElement("label", { htmlFor: "username", className: cx('block', 'text-sm/6', 'font-medium', 'text-gray-900') }, "N\u1ED9i dung"),
            React.createElement("div", { className: cx('box-tw') },
                React.createElement(MDEditor, { height: "500px", value: formData.valueMarkDown, onChange: (val) => {
                        setFormData(Object.assign(Object.assign({}, formData), { valueMarkDown: val || '' }));
                        dispatch(setMarkDown({
                            valueMark: val || '', nameMarkDown: formData.nameMarkDown || '',
                            idMarkDown: null,
                            typeMarkDown: null
                        }));
                    }, textareaProps: {
                        placeholder: 'Nhấn Enter không xuống dòng. Thêm hai khoảng trắng ở cuối dòng hoặc nhấn Shift + Enter để xuống dòng.',
                    } }))),
        React.createElement(Button, { onClick: addMarkDown, nameButton: 'L\u01B0u l\u1EA1i' })));
};
export default AdminEditFileMD;
