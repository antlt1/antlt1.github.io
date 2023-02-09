import React, { useState } from "react";
import "./style.scss";

export default function Login() {
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    function login(){
        
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
            <input type="password" name="password" className="password" placeholder="Mật Khẩu" />
            <br />
            <input type="button" value="Đăng nhập" onClick={login} />
          </div>
        </div>
      </div>
    </>
  );
}
