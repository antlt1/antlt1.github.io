import React, { useEffect } from 'react'
import AdminIndex from './admin'
import Login from './admin/compoments/account/login'
import { Link } from 'react-router-dom'
import {getDatabase, ref, child, get } from 'firebase/database';
import dataBases from '../firebase';


export default function ThueCode() {

useEffect(()=>{
  const refs = ref(dataBases);
get(child(refs, 'account/admin')).then((value)=>{
  console.log('anz')
  if(value.exists()){
    console.log(value.val());
  }else{
  }
}).catch((error)=>{
  
  console.log(error);
})
})

  return (
    <>
     <h1>Đang tiến hành code ....</h1>
     {/* <a href="/">Trở về trang chủ</a>    */}
     <Link to='/'>Back Home</Link>
    </>
  )
}
