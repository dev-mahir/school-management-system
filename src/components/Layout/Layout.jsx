import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Navbar/Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar(!sidebar);
    };


    return (
        <div className='flex '>
            <div className='bg-gray-200/25 dark:bg-gray-800'>
                <div className={`duration-200  transition-all sm:static sm:w-auto absolute top-0 left-0 z-[9999]     ${sidebar ? "w-full sm:w-[0] visible opacity-100 sm:opacity-0 sm:invisible  " : "w-[0%] opacity-0 sm:opacity-100 sm:w-[250px]  sm:visible invisible"}`}
                >
                    <Sidebar sidebar={sidebar} handleClick={handleClick} />
                </div>
            </div>
            <div style={{ width: "100%" }}>

                <Navbar handleClick={handleClick} />

                <div className='bg-light_bg dark:bg-gray-600 min-h-[92vh] p-5'>
                    <Outlet />
                </div>
                <div>
                    <div className={`fixed bottom-0 right-0 bg-gray-700 duration-200  transition-all ${sidebar ? "w-full" : " w-[calc(100%-250px)]"}`}>
                        <Footer />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Layout;