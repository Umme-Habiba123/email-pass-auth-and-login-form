import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Register from '../Components/Home/Register/Register';

const Root = () => {
    return (
        <div>
             
             <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;