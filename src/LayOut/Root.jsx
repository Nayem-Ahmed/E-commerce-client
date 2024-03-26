import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;