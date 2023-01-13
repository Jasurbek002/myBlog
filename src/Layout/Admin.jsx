import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './../index.css'

const Admin = () => {
    return (
        <div className='continer'>
            <Navbar />
              <Outlet />
            <Footer />
        </div>
    );
}

export default Admin;
