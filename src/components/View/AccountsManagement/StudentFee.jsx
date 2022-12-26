import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { month } from '../../../utlility/date';
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const StudentFee = () => {




    return (
        <div>

            <ViewCardHeader
                title="Student Fee"
                btnName="Student Fee List"
                link=""
                icon={<AiFillEye />}
            />


            <div className="card mt-4 p-5">
                <form action="">

                    <div className="grid grid-cols-4 gap-5 items-end">

                        <div>
                            <label htmlFor="">Class</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">One</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Fee Category</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">1st Semister</option>
                                <option value="">2nd  Semister</option>
                                <option value="">Final</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="">Month</label>
                            <select name="" id="">
                                <option value="">Select month</option>

                                {month.map((item, i) =>
                                    <option value={item}>{item}</option>
                                )}

                            </select>
                        </div>


                        <div>
                            <button className='btn btn-success'>Search</button>
                        </div>
                    </div>



                </form>
            </div>



            <div class="mt-4 pb-10 overflow-x-auto table-auto  relative  rounded-md">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                ID No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Student Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Original Fee
                            </th>

                            <th scope="col" class="py-3 px-6">
                                Discount
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Fee
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Select
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="py-4 px-6">
                                20220001
                            </td>
                            <td class="py-4 px-6">
                                Md Mahir
                            </td>
                            <td class="py-4 px-6">
                                1000
                            </td>
                            <td class="py-4 px-6 ">
                                30%
                            </td>
                            <td class="py-4 px-6">
                                700
                            </td>
                            <td class="py-4 px-6 w-1/6">
                                <input type="checkbox" />
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div>
                    <button className='btn btn-success mt-5'>Submit</button>
                </div>
            </div>









        </div>
    )
}


export default StudentFee;