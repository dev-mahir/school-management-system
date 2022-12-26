import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar(!sidebar);
        console.log("ok");
    };


    return (
        <div className=''>

            <div>
                <Sidebar sidebar={sidebar} handleClick={handleClick} />
            </div>
            <div className={` ${sidebar ? "w-full" : "w-[calc(100%-250px)] ml-auto duration-300 transition-all"}`}>
                <Navbar handleClick={handleClick} />
                <div className='bg-light_bg dark:bg-gray-600 min-h-[92vh] p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;