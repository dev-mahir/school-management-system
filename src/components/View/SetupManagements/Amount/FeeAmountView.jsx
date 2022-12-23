
import React from 'react'
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Pagination from '../../../Pagination/Pagination'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader'

const FeeAmountView = () => {
  return (
  
      <>
       
          <ViewCardHeader
              title="Fee Amount"
              link='/setup/fee/amount/add' 
              btnName="Add Fee Amount "
              icon={<AiOutlineEye />}
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
                                  Fee Category
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
                                 Registration Fee
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
                                 Monthly Fee
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

      </>
  )
}

export default FeeAmountView;