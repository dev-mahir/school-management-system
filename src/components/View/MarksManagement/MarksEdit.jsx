import React from 'react';
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const MarksEdit = () => {
    return (
        <div>

            <ViewCardHeader
               title="Marks Entry"
            />


            <div className="card mt-4 p-5">
                <form action="">

                    <div className="grid grid-cols-5 gap-5">

        
                        <div>
                            <label htmlFor="">Select Class</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Subject</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">One</option>

                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Exam Type</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">1st Semister</option>
                                <option value="">2nd  Semister</option>
                                <option value="">Final</option>                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Optional </label>
                            <input type="text"placeholder='Enter roll' />
               
                        </div>

                        <div className='mt-[26px]'>
                            <button className='btn btn-success'>Search</button>
                        </div>

                    </div>



                </form>
            </div>

            <div class="mt-4 pb-10 overflow-x-auto table-auto  relative  rounded-md">
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
                                Marks
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
                                <input type="text" />
                            </td>


                        </tr>
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
                                <input type="text" />
                            </td>


                        </tr>
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
                                <input type="text" />
                            </td>


                        </tr>
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
                                <input type="text" />
                            </td>


                        </tr>
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
                                <input type="text" />
                            </td>


                        </tr>
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
                                <input type="text" />
                            </td>


                        </tr>


                        <tr>
                            <button className='btn btn-success mt-4'>Submit</button>
                        </tr>


                    </tbody>
                </table>

            </div>

        </div>
    )
}


export default MarksEdit;