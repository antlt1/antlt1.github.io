import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';




// import { Container } from './styles';
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <>
    <div className="container max-w-[100%] text-xl text-center">
            <ul className={cx('menu','flex align-center justify-between max-h-full mt-2')}>
                <div className="item-1">
                  <li className={cx('item', 'logo')}>
                      <Link to="/">
                          <h2 style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2rem' }}>Ng.VanAn</h2>
                      </Link>
                  </li>
                </div>
                <div className="item-2">{/* <li>  </li> */}</div>
                <div className="item-3 flex align-center justify-between min-w-[30%]">
                  <li className='item'><Link to="/">Home</Link></li>
                  <li className='item'><Link to="/about">About</Link></li>
                  <li className='item'><Link to="/timeline">Time Line</Link></li>
                </div>
            </ul>
            <br />
        </div>
    </>
  );
}

export default Header;