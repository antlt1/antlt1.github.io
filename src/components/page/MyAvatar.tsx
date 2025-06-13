import React from 'react';
import MyAvt from '~/assets/An.png'
import styles from './styles.module.scss'
import classNames from 'classnames/bind';
// import { Container } from './styles';


const cx = classNames.bind(styles)
const MyAvatar = () => {
  return (
    <div className="flex items-center justify-center" style={{ backgroundImage:`url(${MyAvt})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>
      
    </div>
  );
}

export default MyAvatar;