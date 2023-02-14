import React from 'react';
import Login from '~/thuecode/admin/compoments/account/login';
import { useCookies } from 'react-cookie';
import './style.scss';


export default function Layout() {

    // check cookie from my web
    const [cookie, setcookie, removecookie] = useCookies(['']);

    function logout(){
        removecookie('lg');
        window.location.reload();
    }
    return (
        <>
            {cookie.lg ? (
                <h1>Xin chào: {cookie.lg}</h1>
            ) : (
                <div>
                    <Login/>
                </div>
            )}
            <div>
                    <a href='#' onClick={logout}>Đăng Xuất</a>
                </div>
        </>
    );
}
