import React from 'react'
import { AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SingleEmployee = () => {
    return (
        <>
            <div>
                <div className="card mt-5 p-5">
                    <div className='flex justify-start gap-x-10 items-center'>
                        <div className='w-[400px]'>
                            <img className='rounded-md' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        </div>
                        <div className='text-light_white'>
                            <h4 className='text-gray-300 text-2xl'>Md Mahir Uddin</h4>
                            <span className='text-gray-300'>Head Master</span>
                            <div className='mt-5'>
                                <ul className='space-y-2'>
                                    <li className='flex gap-x-2 items-center'> <span> <AiOutlineCalendar /> </span> <span> 19 Decembar 1972</span></li>
                                    <li className='flex gap-x-2 items-center'> <span> <BsTelephone /> </span> <span> 01868944080</span></li>
                                    <li className='flex gap-x-2 items-center'> <span> <BsEnvelope /> </span> <span> mdmahir.ds@gmail.com</span></li>
                                </ul>
                            </div>
                            <div className='mt-5'>
                                <ul className='flex items-center gap-x-2'>
                                    <li className='flex gap-x-2 items-center'> <a target="_blank" rel="noreferrer" href="https://www.facebook.com/devmahir.bd" className='text-xl text-gray-300 hover:text-gray-400'> <FaFacebookSquare /> </a></li>
                                    <li className='flex gap-x-2 items-center'> <a target="_blank" rel="noreferrer" href="https://www.facebook.com/devmahir.bd" className='text-xl text-gray-300 hover:text-gray-400'> <FaTwitterSquare /> </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>





                </div>
            </div>
        </>
    )
}

export default SingleEmployee