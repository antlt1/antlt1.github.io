import React, { useState } from "react";
import "./style.scss";
import dataBases from "~/firebase";
import { child, get, getDatabase, ref } from 'firebase/database';
import { useCookies } from 'react-cookie';

export default function Login() {

  //userState
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
  //cookie

    const [idcookie, setidcookie ] = useCookies(['']);
    
    function login(){
        const refs = ref(dataBases);
        get(child(refs,'account/userID')).then((value)=>{
          Object.keys(value.val()).map((key)=>{
            // console.log(key);
            if(key === username ){
              if(value.val()[key].password === password){
                  setidcookie('lg',key,'/',(10 * 365 * 24 * 60 * 60));
                  window.location.reload();
              }else{
                console.log('Sai tài khoản mật khẩu!!!');
              }
            }
          })
        })
    }
  return (
    <>
      <div className="mainbg">
        <br /><br /><br />
        <div className="mainlogin">
          <div className="content">
            <h2>ĐĂNG NHẬP</h2>
          </div>
          <div></div><br /><br />
          <div className="input">
            <input type="text" name="username" className="username" placeholder="Tên đăng nhập" onChange={e=>{
                setusername(e.target.value)
            }}   />
            <br />
            <input type="password" name="password" className="password"
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
            placeholder="Mật Khẩu" />
            <br />
            <input type="button" value="Đăng nhập" onClick={login} />
          </div>
        </div>
      </div>
    </>
  );
}
