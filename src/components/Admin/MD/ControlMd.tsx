import React from 'react';
import MarkDownList from './MarkDownList'; // Giả sử MarkDownList.tsx cùng thư mục
import Button from '~/components/Button/Button';
import { ToastContainer } from 'react-toastify';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


// import { Container } from './styles';

const ControlMd: React.FC = () => {
  return (
    <div className={cx('container', 'space-y-12')}>
      <div className="btn" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row-reverse', margin: "0" }}>
        <Button toLink='/admin/md/add' nameButton='Tạo mới' />
        <ToastContainer />
      </div>
      {/* Các chức năng quản lý khác có thể thêm ở đây */}
      <MarkDownList />
    </div>
  );
}

export default ControlMd;