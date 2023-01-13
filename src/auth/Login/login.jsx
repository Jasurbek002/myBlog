import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss'
const Login = () => {
    const navgete = useNavigate()
 const hendlerClick = () =>{
    localStorage.setItem("supperToken","skdksdowdow")
    navgete('/admin')
 }
    return (
        <form className='Login'>
           <div className='Login__box'>
           <input className='Login__box__input' type="text" placeholder='username' />
           </div>
           <div className='Login__box'>
           <input className='Login__box__input' type="password"  placeholder='password'/>
           </div>
           <button onClick={hendlerClick} className='Login__btn' type='submit'>Login</button>
        </form>
    );
}

export default Login;
