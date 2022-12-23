import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination'

const UsersView = () => {
    return (
        <div>
            <div className="card">
                    <div className='card-header'>
                        <h3 className="card-title">Add user</h3>
                        <div className='flex gap-x-4 items-center'>
                            <input type="text" placeholder=' Search' className='py-[6px]' />
                            <Link to='/users/add' className='btn btn-success btn-icon px-3 w-40'> <AiOutlinePlus /> Add User</Link>
                        </div>
                    </div>
                <div>

                    <div class="overflow-x-auto table-auto  relative  rounded-b-md">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        SL
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Role
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Address
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Phone
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Email
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Code
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Status
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
                                        Admin
                                    </td>
                                    <td class="py-4 px-6">
                                        Md Mahir Uddin
                                    </td>
                                    <td class="py-4 px-6">
                                        Madhupur, Tangail
                                    </td>
                                    <td class="py-4 px-6">
                                        01868944080
                                    </td>
                                    <td class="py-4 px-6">
                                        mdmahir.ds@gmail.com
                                    </td>
                                    <td class="py-4 px-6">
                                        code
                                    </td>
                                    <td class="py-4 px-6">
                                        Active
                                    </td>
                                    <td class="py-4 px-6 ">
                                        <div className='flex gap-x-3 items-center'>
                                            <button className="btnicon bg-gray-700  text-white"> <BiEdit /> </button>
                                            <button className='btnicon bg-red-500 text-white'> <BiTrash /> </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                    <td class="py-4 px-6">
                                        1
                                    </td>
                                    <td class="py-4 px-6">
                                        Admin
                                    </td>
                                    <td class="py-4 px-6">
                                        Md Mahir Uddin
                                    </td>
                                    <td class="py-4 px-6">
                                        Madhupur, Tangail
                                    </td>
                                    <td class="py-4 px-6">
                                        01868944080
                                    </td>
                                    <td class="py-4 px-6">
                                        mdmahir.ds@gmail.com
                                    </td>
                                    <td class="py-4 px-6">
                                        code
                                    </td>
                                    <td class="py-4 px-6">
                                        Active
                                    </td>
                                    <td class="py-4 px-6 ">
                                        <div className='flex gap-x-3 items-center'>
                                            <button className="btnicon bg-gray-700  text-white"> <BiEdit /> </button>
                                            <button className='btnicon bg-red-500 text-white'> <BiTrash /> </button>
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
        </div>
    )
}

export default UsersView