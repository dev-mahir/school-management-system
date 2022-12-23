import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader';

const AddSubject = () => {
    return (
        <div>
            <ViewCardHeader
                title="Add Subject"
                link="/setup/subject/view"
                btnName="View Subject"
                icon={<AiOutlineEye />}
            />


            <div className="card mt-5 p-5">
                <form>
                    <div className=" space-y-3">
                        <div>
                            <label htmlFor="">Subject Name</label>
                            <input id='name' value="" className='w-1/2' type="text" placeholder='Enter class name' />
                        </div>
                   </div>

                    <div className='mt-5'>
                        <Link to="/confirm-code" className='btn btn-primary py-2'>Add Group</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddSubject;