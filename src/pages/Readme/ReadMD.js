var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '~/firebase/firebaseConfig';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import MDEditor from '@uiw/react-md-editor';
const cx = classNames.bind(styles);
// import { Container } from './styles';
// get /read/:id in here
const ReadMD = () => {
    // lấy id từ //
    const { id } = useParams();
    console.log(id);
    const [markDownContent, setMarkDownContent] = useState('');
    useEffect(() => {
        console.log(`id: ${id}`);
        if (id) {
            const fetchMarkDown = () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    if (typeof id === 'string') {
                        const docRef = doc(db, "MarkDown", id);
                        const docSnap = yield getDoc(docRef);
                        if (docSnap.exists()) {
                            setMarkDownContent(docSnap.data().valueMarkDown);
                        }
                        else {
                            console.log("No such document!");
                        }
                    }
                    else {
                        console.log("Invalid document id!");
                    }
                }
                catch (error) {
                    console.log(error);
                }
            });
            fetchMarkDown();
            console.log(markDownContent);
        }
    }, [id]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-color-mode": "dark", className: "w-full max-w-10xl mx-auto" },
            React.createElement(MDEditor, { className: 'bg-gray-900 text-white p-6 rounded-lg shadow-lg', height: "100vh", value: markDownContent, preview: 'preview', hideToolbar: true }))));
};
export default ReadMD;
