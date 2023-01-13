import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({children}) => {
    const navigete = useNavigate()
    const [token,setToken] = useState(localStorage.getItem('token'))

    useEffect(() =>{
        if(!token){
            navigete('/login')
        }
    },[token])
    return (
        <>
           {
            () => children
           } 
        </>
    );
}

export default Protected;
