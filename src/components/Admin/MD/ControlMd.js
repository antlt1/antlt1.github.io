import React from 'react';
import MarkDownList from './MarkDownList'; // Giả sử MarkDownList.tsx cùng thư mục
import Button from '~/components/Button/Button';
import { ToastContainer } from 'react-toastify';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
// import { Container } from './styles';
const ControlMd = () => {
    return (React.createElement("div", { className: cx('container', 'space-y-12') },
        React.createElement("div", { className: "btn", style: { display: 'flex', justifyContent: 'flex-end', flexDirection: 'row-reverse', margin: "0" } },
            React.createElement(Button, { toLink: '/admin/md/add', nameButton: 'T\u1EA1o m\u1EDBi' }),
            React.createElement(ToastContainer, null)),
        React.createElement(MarkDownList, null)));
};
export default ControlMd;
