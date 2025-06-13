import React from 'react';
import MyAvatar from '~/components/page/MyAvatar'
import styles from './styles.module.scss'
import classNames from 'classnames';
import MySkill from '~/components/page/MySkill';

// import { Container } from './styles';

const cx = classNames.bind(styles);

const Main = () => {
    return (
        <div className='main flex items-center justify-center h-full'>
            <div className="item-1 left-box w-[29%]">
                 <p>Content goes here</p>     
            </div>
            <div className="item-2 right-box w-[1%]"></div>
            <div className="item-3 right-box w-[70%] bg-red-200 h-full">
                <p>Content goes here</p>        
            </div>
        </div>
    );
}

export default Main;