import React from 'react';
import { AiFillEdit, AiOutlinePlus } from 'react-icons/ai';
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const GradePoint = () => {
    return (
        <div>

            <ViewCardHeader
                title="Grade Point"
                btnName="Add Grade Point"
                link="/marks/grade-point/add"
                icon={<AiOutlinePlus/>}
            />

            <div class="mt-4 pb-10 overflow-x-auto table-auto  relative  rounded-md">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                SL
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Grade Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Marks Range
                            </th>

                            <th scope="col" class="py-3 px-6">
                                Point Range
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Remarks
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="py-4 px-6">
                                1
                            </td>
                            <td class="py-4 px-6">
                                A+
                            </td>

                            <td class="py-4 px-6">
                                80-100
                            </td>

                            <td class="py-4 px-6 w-1/5">
                                5.00
                            </td>
                            <td class="py-4 px-6 w-1/5">
                                Excellent
                            </td>
                            <td class="py-4 px-6 w-1/5">
                                <button className='btnicon btn-primary'><AiFillEdit /></button>
                            </td>

                        </tr>
               
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default GradePoint;