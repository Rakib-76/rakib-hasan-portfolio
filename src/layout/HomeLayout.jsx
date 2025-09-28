import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='bg-gradient-to-br from-[#252541] via-[#191a1d] to-[#28201e]poppins-font p-2'>
            <header className="">
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;