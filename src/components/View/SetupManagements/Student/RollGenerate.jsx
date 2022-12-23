import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Pagination from '../../../Pagination/Pagination'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const RollGenerate = () => {
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
                                    ID No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Student Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                   Father's Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Gender
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Roll No
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td class="py-4 px-6">
                                    20220001
                                </td>
                                <td class="py-4 px-6">
                                    Md Mahir Uddin
                                </td>
                                <td class="py-4 px-6">
                                    Abu Taher Ali
                                </td>
                                <td class="py-4 px-6">
                                   Male
                                </td>
                                <td class="py-4 px-6 w-1/5">
                                    <input type="text"  />
                                </td>
                                
                               
                            </tr>


                        </tbody>
                    </table>


                    <div className='p-5 flex justify-between items-center'>
                        <button className='btn btn-success'>Roll Generate</button>
                        <Pagination />
                    </div>

                </div>








            </div>
        </div>
    )
}





export default RollGenerate