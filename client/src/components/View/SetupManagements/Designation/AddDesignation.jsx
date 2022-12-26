import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const AddDesignation = () => {
    return (
        <div>
            <ViewCardHeader
                title="Add Designation"
                link="/setup/employee/designation/view"
                btnName="View Designtion"
                icon={<AiOutlineEye/>}
            />
            
            <div className="card mt-5 p-5">
                <form>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="">Group Name</label>
                            <input id='name' value="" className='w-1/4' type="text" placeholder='Enter class name' />
                        </div>
                      
                    </div>


                    <div className='mt-5'>
                        <Link to="/confirm-code" className='btn btn-primary py-2'>Add Designation</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDesignation;