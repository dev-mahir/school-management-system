import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineBell, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { change_theme_mode } from '../../redux/themeMode/action';

const Navbar = ({ handleClick }) => {
    const dispatch = useDispatch()


    const [theme, setTheme] = useState("light");

    // user state 
    const [user, setUser] = useState(false);

    const handleUser = () => {
        setUser(!user)
    }


    // handle theme dark / light mode 
    // const handleThemeMode = () => {
    // if (localStorage.getItem('theme') === 'light') {
    //     setTheme('dark');
    //     localStorage.setItem('theme', 'dark');
    // } else {
    //     setTheme('light');
    //     localStorage.setItem('theme', 'light');
    // }


    // }




    return (
        <div className='flex justify-between items-center px-5 py-2 drop-shadow-md dark:bg-gray-800'>
            <div>
                <button onClick={handleClick}> <AiOutlineMenu className='text-lg mt-1 dark:text-white' /></button>

            </div>
            <div className='flex items-center gap-x-5'>
                <div>
                    <button className='dark:text-white'><AiOutlineBell /></button>
                </div>
                <div className='relative'>
                    <button onClick={handleUser}>
                        <img src="https://www.einfosoft.com/templates/admin/spiceangular/source/light/assets/images/user.jpg" alt="" className='h-8 w-8 rounded-full ' />
                    </button>

                    <div className={`duration-150 absolute top-10 right-0 bg-white !z-[9999] drop-shadow rounded-md py-5 w-36 ${user ? "visible opacity-100  " : "invisible opacity-0 "}`}>
                        <ul>
                            <li>
                                <Link to="/user/profile" className=' flex items-center gap-x-2  py-[6px] pl-4 hover:bg-light_bg '>
                                    <span><AiOutlineUser /> </span>
                                    <span className='mt-1'>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking/all-booking" className=' flex items-center gap-x-2 pl-4 py-[6px] hover:bg-light_bg  '>
                                    <span><BiLogOut /> </span>
                                    <span className='mt-1'>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className='dark:text-white' onClick={() => dispatch(change_theme_mode())}>{theme === "light" ? <BsSun /> : <BsMoon />} </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;