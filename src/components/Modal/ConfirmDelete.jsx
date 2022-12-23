import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

const ConfirmDelete = ({ show, setShow, confirmDelete }) => {

    const handleCancel = () => {
        setShow(!show)
    }

  

    return (

        <>

            <div className={`flex justify-center items-center absolute top-0 left-0 h-full w-full bg-gray-500/30 z-[99999] overflow-hidden  duration-300 ${show ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className={`bg-white pt-4 rounded-md w-[400px] duration-300   ${show ? "translate-y-0" : "-translate-y-4"}`}>
                    <div className='flex items-center justify-between border-b border-gray-100  px-5 pb-2'>
                        <h4>Confirm delete</h4>
                        <button onClick={handleCancel}> <MdOutlineClose className='text-xl' /> </button>
                    </div>
                    <div className=' px-5 py-5'>
                        <p>Are you sure want to delete it?</p>
                    </div>
                    <div className='text-end border-t border-gray-100 pt-2  px-5 pb-2'>
                        <button onClick={handleCancel} className=" btn text-[#444] bg-gray-300 ">Cancel</button>
                        <button onClick={confirmDelete} className="ml-2 btn btn-danger"> Delete  </button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ConfirmDelete