import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Footer from '../Component/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='bg-black'>
            <header className="">
                <Navbar></Navbar>
                <Banner></Banner>
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