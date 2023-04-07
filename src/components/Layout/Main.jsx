import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css'
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;