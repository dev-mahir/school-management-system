import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader'

const SubjectView = () => {
    return (

        <>

            <ViewCardHeader
                title="Assaign Subject Details"
                link='/setup/subject/add'
                btnName="View All Class"
                icon={< AiOutlinePlus />}
            />



            <div className="card mt-5">
                <div class="overflow-x-auto table-auto  relative  rounded-md ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    SL
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Subject
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Full Mark
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Pass Mark
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Subjective Mark
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td class="py-4 px-6">
                                    1
                                </td>

                                <td class="py-4 px-6">
                                    Bangla
                                </td>
                                <td class="py-4 px-6">
                                    100
                                </td>
                                <td class="py-4 px-6">
                                    33
                                </td>
                                <td class="py-4 px-6">
                                    100
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </>


    )
}

export default SubjectView