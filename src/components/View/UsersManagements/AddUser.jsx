import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const AddUser = () => {
    return (
        <div>
            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">Add user</h3>
                    <div className='flex gap-x-4 items-center'>
                        <input type="text" placeholder=' Search' className='py-[6px]' />
                        <Link to='/users/add' className='btn btn-success btn-icon px-3 w-44'> <AiOutlinePlus /> View User</Link>
                    </div>
                </div>
            </div>
            <div className="card mt-5 p-5">
                <form>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div>
                            <label htmlFor="">User Role</label>
                            <select name="" id="">
                                <option value="Admin">Admin</option>
                                <option value="Operator">Operator</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>
                            <input id='name' value="" type="text"  placeholder='Enter email address'/>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" id='status'  /> <label htmlFor="status" className='mb-0 select-none'> Status</label>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-primary'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;