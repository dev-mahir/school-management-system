import React from 'react';
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination'
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const EmployeeLeave = () => {
    return (
        <div>

            <ViewCardHeader
                title="Employee Leave"
                link="/employee/leave/add"
                btnName="Add Employee Leave"
                icon={<AiOutlinePlus />}
            />


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
                                    Purpose
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Date
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
                                    Physical Problem
                                </td>
                                <td class="py-4 px-6">
                               01-12-2022 - 03/12/2022
                                </td>

                    

                                <td class="py-4 px-6 ">
                                    <div className='flex gap-x-1'>
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


export default EmployeeLeave;