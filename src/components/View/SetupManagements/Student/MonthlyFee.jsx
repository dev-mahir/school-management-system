import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import Pagination from '../../../Pagination/Pagination'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const MonthlyFee = () => {
    return (
        <div>

            <ViewCardHeader
                title="All Student"
                link="/student/exam/fee/view"
                btnName="Exam Fee"
                icon={<AiFillEye />}
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
                        <div className='w-1/5'>
                            <label htmlFor="">Select Month</label>
                            <select name="" id="">
                                <option value="">January</option>
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
                        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    SL
                                </th>
                         
                                <th scope="col" class="py-3 px-6">
                                    ID No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Student Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Roll No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Monthly Fee
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Discount Amount
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Fee
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
                                <td class="py-4 px-6">
                                    Md Mahir Uddin
                                </td>
                                <td class="py-4 px-6">
                                    01
                                </td>
                                <td class="py-4 px-6">
                                    2022 Tk
                                </td>
                                <td class="py-4 px-6">
                                   30%
                                </td>
                                <td class="py-4 px-6">
                                    1850
                                </td>
                                <td class="py-4 px-6 ">
                                    <div className='flex gap-x-3 items-center'>
                                        <button className="btn btn-success  text-white"> Fee Slip </button>
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


export default MonthlyFee;






