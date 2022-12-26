import React from 'react';
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination'
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const EmployeeView = () => {
    return (
        <div>

            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">All Employee</h3>
                    <div className='flex gap-x-4 items-center'>
                        <input type="text" placeholder='Search employee' />
                        <Link to='/employee/registration' className='btn btn-success btn-icon px-3 w-80'><AiOutlinePlus /> Employee Registrtion</Link>
                    </div>
                </div>
            </div>


            <div className="card mt-4">
                <div class=" rounded-md">
                    <table class="text-sm w-full text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    SL
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    ID No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>

                                <th scope="col" class="py-3 px-6">
                                    Mobile No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                
                                <th scope="col" class="py-3 px-6">
                                    Address
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td class="py-4 px-6">
                                    1
                                </td>
                                <td class="py-4 px-6">
                                    2022001
                                </td>
                                <td class="py-4">
                                    Md Mahir Uddin
                                </td>

                                <td class="py-4 px-6">
                                    01868944080
                                </td>
                                <td class="py-4 px-6">
                                    mdmahir.ds@gmail.com
                                </td>
                       
                                <td class="py-4 px-6 ">
                                    Madhupur, Tangail
                                </td>
                                <td class="py-4 px-6">
                                    <img className='w-10 rounded-md' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                                </td>
                        
                                <td class="py-4 px-6 ">
                                    <div className='flex gap-x-1'>
                                        <Link to="/employee/view/md-mahir-uddin" className="btnicon bg-blue-600  text-white"> <AiFillEye /> </Link>
                                        <button className="btnicon bg-gray-700  text-white"> <BiEdit /> </button>
                                        <button className='btnicon bg-red-500 text-white '> <BiTrash /> </button>
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>


                    <div className='py-4 text-end pr-5'>
                        <Pagination />
                    </div>

                </div>

            </div>
        </div>
    )
}


export default EmployeeView;