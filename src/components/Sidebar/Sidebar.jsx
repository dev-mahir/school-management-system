import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import { BiMenuAltLeft } from 'react-icons/bi'


const Sidebar = ({ sidebar }) => {


    const handleSubMenu = (e) => {
        const menuBtn = Array.from(
            document.getElementsByClassName('menu-btn')
        );
        menuBtn.forEach(element => {
            element.parentElement.classList.remove('active');
            if (e.target === element) {
                e.target.parentElement.classList.add('active');
            }
        });
    }


    return (
        <div className={`sidebar ${sidebar ? "w-full bg-white h-full overflow-y-auto" : "sm:w-full sm:h-full"}`}>
            <div className=''>
                <div>
                    <div className="logo  pt-3 text-center border-b dark:border-gray-700  pb-[10px]">
                        <Link to="/" className='text-2xl font-medium dark:text-light_white'>AUS</Link>
                    </div>
                    <div className='flex  px-3 py-3 items-center gap-x-2  border-b dark:border-gray-700  '>
                        <div className='_shadow-md inline-block rounded-md overflow-hidden'>
                            <img src="https://avatars.githubusercontent.com/u/95497010?v=4" alt="" className='w-12 p-[2px] rounded-md mx-auto  dark:border-2 dark:border-gray-600' />
                        </div>
                        <div>
                            <p className='leading-3 dark:text-gray-50'>Md Mahir</p>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <ul>
                        <li>
                            <Link to="/" className='menu !dark:bg-black'> <span><AiOutlineDashboard /></span> <span className='mt-[2px]'> Dashboard</span> </Link>
                        </li>
                        <li>
                            <button onClick={handleSubMenu} className='menu w-full font-medium menu-btn'>
                                <span className='flex gap-x-2'><AiOutlineHome />Users Managements</span>
                                <span><FaAngleRight /></span>
                            </button>
                            <div className='sub-menu'>
                                <Link to="/users/view" className='menu !pl-12'><BiMenuAltLeft /> View Users </Link>
                                <Link to="/users/view-profile
                                " className='menu !pl-12'><BiMenuAltLeft />View Profile </Link>
                            </div>
                        </li>
                        <li>
                            <button onClick={handleSubMenu} className='menu w-full font-medium menu-btn'>
                                <span className='flex gap-x-2'><AiOutlineHome />Setup Management</span>
                                <span><FaAngleRight /></span>
                            </button>
                            <div className='sub-menu'>
                                <Link to="/setup/student/group/view" className='menu !pl-12'><BiMenuAltLeft />Group </Link>
                                <Link to="/setup/fee/category/view" className='menu !pl-12'><BiMenuAltLeft />Fee Categories </Link>
                                <Link to="/setup/fee/amount/view" className='menu !pl-12'><BiMenuAltLeft />Fee Amount </Link>
                                <Link to="/setup/fee/amount/add" className='menu !pl-12'><BiMenuAltLeft />Exam  </Link>
                                <Link to='/setup/employee/designation/view' className='menu !pl-12'><BiMenuAltLeft />Designation  </Link>
                                <Link to='/setup/subject-and-class/view' className='menu !pl-12'><BiMenuAltLeft />Subject & Class </Link>
                            </div>
                        </li>
                        <li>
                            <button onClick={handleSubMenu} className='menu w-full font-medium menu-btn'>
                                <span className='flex gap-x-2'><AiOutlineHome />Student Management</span>
                                <span><FaAngleRight /></span>
                            </button>
                            <div className='sub-menu'>
                                <Link to="/student/view" className='menu !pl-12'> View Student </Link>
                                <Link to="/student/roll/generate" className='menu !pl-12'> Roll Generate </Link>
                                <Link to="/student/monthly/fee/view" className='menu !pl-12'> Fee </Link>
                            </div>
                        </li>
                        <li>
                            <button onClick={handleSubMenu} className='menu w-full font-medium menu-btn'>
                                <span className='flex gap-x-2'><AiOutlineHome />Employee Management</span>
                                <span><FaAngleRight /></span>
                            </button>
                            <div className='sub-menu'>
                                <Link to="/employee/view" className='menu !pl-12'> Employee </Link>
                                <Link to="/student/roll/generate" className='menu !pl-12'> Roll Generate </Link>
                                <Link to="/student/monthly/fee/view" className='menu !pl-12'> Fee </Link>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;