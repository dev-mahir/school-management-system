import React from 'react';
import { AiOutlineCopy } from 'react-icons/ai'
import LineProgressBar from '../../ProgressBar/LineProgressBar';

const CardItem = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>

            <div className='_card'>
                <div className='flex justify-between '>
                    <div className='text-white h-10 w-10 bg-[#6f42c1] flex items-center justify-center rounded-md '>
                        <AiOutlineCopy className='text-2xl' />
                    </div>
                    <div>
                        <h6 className="text-[17px] font-medium  dark:text-gray-300 ">Total Projects</h6>
                        <span className='text-2xl font-bold  dark:text-gray-300 '>1,254</span>
                    </div>
                </div>

                <div className='mt-7'>
                    <LineProgressBar />
                </div>
            </div>
            <div className='_card'>
                <div className='flex justify-between '>
                    <div className='text-white h-10 w-10 bg-[#6f42c1] flex items-center justify-center rounded-md '>
                        <AiOutlineCopy className='text-2xl' />
                    </div>
                    <div>
                        <h6 className="text-[17px] font-medium  dark:text-gray-300 ">Total Client</h6>
                        <span className='text-2xl font-bold  dark:text-gray-300 '>1,254</span>
                    </div>
                </div>

                <div className='mt-7'>
                    <LineProgressBar />
                </div>
            </div>
            <div className='_card'>
                <div className='flex justify-between '>
                    <div className='text-white h-10 w-10 bg-[#6f42c1] flex items-center justify-center rounded-md '>
                        <AiOutlineCopy className='text-2xl' />
                    </div>
                    <div>
                        <h6 className="text-[17px] font-medium  dark:text-gray-300 ">Total Booking</h6>
                        <span className='text-2xl font-bold  dark:text-gray-300 '>1,254</span>
                    </div>
                </div>

                <div className='mt-7'>
                    <LineProgressBar />
                </div>
            </div>
            <div className='_card'>
                <div className='flex justify-between '>
                    <div className='text-white dark:text-gray-300 h-10 w-10 bg-[#6f42c1] flex items-center justify-center rounded-md '>
                        <AiOutlineCopy className='text-2xl' />
                    </div>
                    <div>
                        <h6 className="text-[17px] font-medium  dark:text-gray-300 ">Total Booking</h6>
                        <span className='text-2xl font-bold  dark:text-gray-300 '>1,254</span>
                    </div>
                </div>

                <div className='mt-7'>
                    <LineProgressBar />
                </div>
            </div>
  

        </div>
    )
}

export default CardItem