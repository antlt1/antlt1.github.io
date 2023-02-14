import React, { useEffect } from 'react';
import AdminIndex from './admin';
import Login from './admin/compoments/account/login';
import { Link } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import dataBases from '../firebase';

import Layout from '~/thuecode/layout';

export default function ThueCode() {


    // this space connect fire base
    // useEffect(()=>{
    //   const refs = ref(dataBases);
    // get(child(refs, 'account/userID')).then((value)=>{
    //   console.log('anz')
    //   if(value.exists()){
    //     console.log(value.val());
    //   }else{
    //   }
    // }).catch((error)=>{

    //   console.log(error);
    // })
    // })

    return (
        <>
        <Layout/>
        
            <Link to="/">Back to CV</Link>
        </>
    );
}
