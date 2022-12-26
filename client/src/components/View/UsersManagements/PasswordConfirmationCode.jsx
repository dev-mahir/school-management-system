import React from 'react'
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const PasswordConfirmationCode = () => {

    const handlePasswordChange = (e) => {
        e.preventDefault();

    }
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
                <form onSubmit={handlePasswordChange}>
                    <div className=" space-y-4">
                        <div>
                            <label htmlFor="code">Code</label>
                            <input id='code' value="" type="text" placeholder='Enter name' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id='password' value="" type="password" placeholder='Enter password' />
                        </div>
                        <div>
                            <label htmlFor="password">Confirm password</label>
                            <input id='password' value="" type="password" placeholder='Confirm password' />
                        </div>

            
                    </div>
                
             
                    <div className='mt-5'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordConfirmationCode;