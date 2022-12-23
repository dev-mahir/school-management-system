import React from 'react'
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SubjectAndClassView = () => {
    const slug = "djkfjdkfkd"
    return (

        <>

            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">Subject and Class</h3>
                    <div className='flex gap-x-3 items-center'>
                        <Link to="/setup/student/class/add" className='btn btn-success btn-icon px-3 '> <AiOutlinePlus/> Add Class </Link>
                        <Link to="/setup/subject/add" className='btn btn-success btn-icon px-3 '> <AiOutlinePlus/> Add Subject </Link>
                        <Link to="/setup/student/assign-subject" className='btn btn-success btn-icon px-3 '> <AiOutlinePlus/> Add Assaign Subject </Link>
                        <Link to="/setup/student/class/view" className='btn btn-success btn-icon px-3 '> <AiFillEye/>Class View </Link>
                        <Link to="/setup/student/view" className='btn btn-success btn-icon px-3 '> <AiFillEye/>Subject View </Link>
                    </div>
                </div>
            </div>
      


            <div className="card mt-5">
                <div class="overflow-x-auto table-auto  relative  rounded-md ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    SL
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Class
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
                                   One
                                </td>
                                <td class="py-4 px-6 ">
                                    <div className='flex gap-x-3 items-center'>
                                        <Link to="/setup/student/assign-subject-marks" className="btnicon bg-gray-700  text-white"> <BiEdit /> </Link>
                                        <Link to="/setup/student/onehjhj/view" className='btnicon bg-blue-500 text-white'> <AiFillEye /> </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td class="py-4 px-6">
                                    1
                                </td>

                                <td class="py-4 px-6">
                                   Two
                                </td>
                             
                                <td class="py-4 px-6 ">
                                    <div className='flex gap-x-3 items-center'>
                                        <Link to ="#" className="btnicon bg-gray-700  text-white"> <BiEdit /> </Link>
                                        <Link to="/setup/student/onehjhj/view" className='btnicon bg-blue-500 text-white'> <AiFillEye /> </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>

            </div>

        </>


    )
}


export default SubjectAndClassView;