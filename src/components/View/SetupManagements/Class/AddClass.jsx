import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const AddClass = () => {
    return (
        <div>

            <ViewCardHeader
                title="Add Class"
                link="/setup/student/class/view"
                btnName="View Class"
                icon={< AiOutlinePlus />}
            />

            <div className="card mt-5 p-5">
                <form>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="">Class Name</label>
                            <input id='name' value="" className='w-1/2' type="text" placeholder='Enter class name' />
                        </div>
                        <div className='flex items-center gap-1 mt-2'>
                            <input type="checkbox" id='status' /> <label htmlFor="status" className='mb-0 select-none'> Status</label>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <Link to="/confirm-code" className='btn btn-primary py-2'>Add Class</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddClass;