import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedAdmin = ({children}) => {
    const navigete = useNavigate()
    const [supper,setSupper] = useState(localStorage.getItem('supperToken'))

    useEffect(() =>{
        if(!supper){
            navigete('/admin/login')
        }
    },[supper])
    return (
        <>
           {
            () => children
           } 
        </>
    );
}

export default ProtectedAdmin;
