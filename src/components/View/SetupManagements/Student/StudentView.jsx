import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Pagination from '../../../Pagination/Pagination'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const StudentView = () => {
    return (
        <div>

            <ViewCardHeader
                title="All Student"
                link="/student/registration"
                btnName="Student Registration"
                icon={<AiOutlinePlus />}
            />

            <div className="card mt-5 p-5" >
                <form action="">

                    <div className='flex gap-x-4 items-end'>
                        <div className='w-1/5'>
                            <label htmlFor="">Select Year</label>
                            <select name="" id="">
                                <option value="">2022</option>
                            </select>
                        </div>
                        <div className='w-1/5'>
                            <label htmlFor="">Select Class</label>
                            <select name="" id="">
                                <option value="">One</option>
                            </select>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Search</button>
                        </div>
                  </div>

                </form>
            </div>


            <div className="card mt-4">
                <div class="overflow-x-auto table-auto  relative  rounded-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    SL
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    ID No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Roll
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Year
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Class
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Phone
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
                                    Md Mahir Uddin
                                </td>
                                <td class="py-4 px-6">
                                    2022001
                                </td>
                                <td class="py-4 px-6">
                                    01
                                </td>
                                <td class="py-4 px-6">
                                    2022
                                </td>
                                <td class="py-4 px-6">
                                    One
                                </td>
                                <td class="py-4 px-6">
                                    <img className='w-14 rounded-md' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                                </td>
                                <td class="py-4 px-6">
                                    mdmahir.ds@gmail
                                </td>
                                <td class="py-4 px-6">
                                    01868944080
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
    )
}


export default StudentView;