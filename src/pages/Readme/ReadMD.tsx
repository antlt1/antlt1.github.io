import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '~/firebase/firebaseConfig';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import MDEditor from '@uiw/react-md-editor';

const cx = classNames.bind(styles);

// import { Container } from './styles';

// get /read/:id in here


const ReadMD: React.FC = () => {
    // lấy id từ //
    const { id } = useParams();
    console.log(id);
    const [markDownContent, setMarkDownContent] = useState('');


    useEffect(() => {
        console.log(`id: ${id}`);

        if (id) {
            const fetchMarkDown = async () => {
                try {
                    if (typeof id === 'string') {
                        const docRef = doc(db, "MarkDown", id);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {

                            setMarkDownContent(docSnap.data().valueMarkDown);
                        } else {
                            console.log("No such document!");
                        }
                    } else {
                        console.log("Invalid document id!");
                    }
                } catch (error) {
                    console.log(error);

                }
            };
            fetchMarkDown();
            console.log(markDownContent);

        }
    }, [id])

    return (
        <>
            {/* <div className={cx('markdown-body')}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markDownContent}
              </ReactMarkdown>
            </div> */}
            <div data-color-mode="dark" className="w-full max-w-10xl mx-auto">
                <MDEditor
                    className='bg-gray-900 text-white p-6 rounded-lg shadow-lg'
                    height="100vh"
                    value={markDownContent}
                    preview='preview'
                    hideToolbar
                />
            </div>
        </>
    );
}

export default ReadMD;