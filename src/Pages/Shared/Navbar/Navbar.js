import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../AuthContext/UserContext';
import Logo from '../../../assets/images/dental logo.png'

const Navbar = () => {

    const { user, logOutUser, } = useContext(AuthContext);
    const [userss, setData] = useState('')

    const url = `https://doctors-portal-server-site-zeta.vercel.app/users/${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setData(data);

            })
    }, [user?.email])
    // console.log(userss)


    // user logOut 
    const LogOut = () => {
        logOutUser()
            .then(result => {
                toast.success('User log Out successfully')
            })
    }

    const menuItems = <React.Fragment>

        {
            userss?.role === "admin" &&
            <>
                <li className='li'><Link to="/">Home</Link></li>
                <li className='li'><Link to="/appointment">Appointment</Link></li>
                <li className='li'><Link to="/allDoctior">All Doctors</Link></li>
                <li className='li'><Link to="/dasbord">Dashbord</Link></li>
            </>
        }
        {
            userss?.role !== "admin" &&
            <>
                <li className='li'><Link to="/">Home</Link></li>
                <li className='li'><Link to="/appointment">Appointment</Link></li>
                <li className='li'><Link to="/allDoctior">All Doctors</Link></li>
                <li className='li'><Link to="/userBooking">User Booking Lisht</Link></li>
            </>

        }

        <li className='li'><Link to="/about">About us</Link></li>
        {/* <img align='right' width='400' src="" /> */}
        {
            user?.uid ?
                <li className='li'><Link onClick={LogOut} to="/login">Log Out</Link></li>
                :
                <>
                    <li className='li'><Link to="/singUP">Sing Up</Link></li>
                    <li className='li'><Link to="/login">Login</Link></li>
                </>

        }

    </React.Fragment>

    return (
        <div className="navbar navsbottom flex justify-between w-[100%] mx-auto fixed top-0 z-50 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="flex "><div className="w-[60px] overflow-hidden"><img className='w-[100%]' src={Logo} alt="" /></div><h1 className='mt-[34px] ml-0 text-[12px] font-extrabold text-[#3A4255]'>CLINIC</h1> </Link>
            </div>
            <div className="navbar-center hidden lg:flex mr-10">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                {
                    user?.uid ?

                        <div className="avatar online mr-5">
                            <label htmlFor="my-modal" className=" w-[45px] h-[45px] rounded-full img-border cursor-pointer">
                                <img className='p-[1px] rounded-full' src={user?.photoURL} />
                            </label>

                        </div>
                        :
                        <>
                            <div className="avatar online mr-5">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </>
                }
            </div>
            <div className="block lg:hidden">
                {
                    user?.uid ?

                        <div className="avatar online mr-5">
                            <label htmlFor="my-modal" className=" w-[45px] h-[45px] rounded-full img-border cursor-pointer">
                                <img className='p-[1px] rounded-full h-16' src={user?.photoURL} />
                            </label>

                        </div>
                        :
                        <>
                            <div className="avatar online mr-5">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;