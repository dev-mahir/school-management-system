import React from 'react'
import { AiOutlineEye, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AddFeeAmount = () => {
    const handleAddNewClass = () => { 

    }
    return (
        <div>
            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">Add Group</h3>
                    <div className='flex gap-x-4 items-center'>
                        <Link to='/setup/fee/amount/view' className='btn btn-success btn-icon px-3'> <AiOutlineEye />View Fee Amount</Link>
                    </div>
                </div>
            </div>
            <div className="card mt-5 p-5">
                <form>
                    <div className="space-y-3">
                        <div className='mb-5'>
                            <label htmlFor="">Fee Category</label>
                            <select name="" id="" className='w-1/2'>
                                <option value="">Registrtion Fee</option>
                                <option value="">Monthly Fee</option>
                            </select>
                        </div>

                        <div id='all-class'>
                            <div className='flex items-end  gap-x-3 mb-3'>
                                <div className='w-full'>
                                    <label htmlFor="">Class Name</label>
                                    <select name="" id="">
                                        <option value="">One</option>
                                        <option value="">Two</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="status"> Amount</label>
                                    <input type="number" id='status' />
                                </div>
                                <div className='mr-20 flex'>
                                    <button type='button' onClick={handleAddNewClass} className="bg-success mb-1 h-8 w-8 text-sm flex justify-center items-center rounded-sm  text-white"> <AiOutlinePlus /> </button>
                                    <button className="bg-danger ml-2 mb-1 h-8 w-8 text-sm flex justify-center items-center rounded-sm  text-white"> <AiOutlineMinus /> </button>
                                </div>
                            </div>
                        
                        </div>

                    </div>


                    <div className='mt-5'>
                        <button type='submit' className='btn btn-primary py-2'>Add Group</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFeeAmount;