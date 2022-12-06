import React from 'react';
import { FaArrowRight, FaGripLinesVertical, FaRegCaretSquareRight, FaRegWindowClose } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import DashBord from '../Pages/Dash-Bord/DashBord';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBordLayOut = () => {
    return (
        <div className=''>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">

                <input id="Rightdrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="header flex w-[100%] justify-between mt-[80px] fixed top-2">
                        <label htmlFor="Rightdrawer" className=" drawer-button lg:hidden ml-2 flex "><span className='text-[18px] text-bold'>Drawer</span>  <span className='mt-2'><FaArrowRight></FaArrowRight></span></label>

                        <h1 className='text-[18px] text-bold pr-5 lg:hidden'>All Presents</h1>
                    </div>

                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">
                    <label htmlFor="Rightdrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content w-[280px] block">
                        <div className="flex justify-between mt-[55px] relative">
                            <h1></h1>
                            <label htmlFor="Rightdrawer" className="text-3xl  drawer-button lg:hidden absolute right-0 pr-3 pt-1 text-red-600"><FaRegWindowClose></FaRegWindowClose></label>
                        </div>
                        <DashBord></DashBord>
                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBordLayOut;