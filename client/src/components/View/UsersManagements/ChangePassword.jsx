import React from 'react'
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
    return (
        <div>
            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">User Profile</h3>
                    <div className='flex gap-x-4 items-center'>
                        <input type="text" placeholder=' Search' className='py-[6px]' />
                        <Link to='/users/add' className='btn btn-success btn-icon px-3 w-48'> <AiOutlineEye />Your Profile</Link>
                    </div>
                </div>
            </div>
            <div className="card mt-5 p-5">
                <form>
                    <div className=" space-y-4">
                        <div>
                            <label htmlFor="">Email</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />
                        </div>
                    </div>
                
            
                    <div className='mt-5'>
                        <Link to="/confirm-code" className='btn btn-primary py-2'>Submit</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;