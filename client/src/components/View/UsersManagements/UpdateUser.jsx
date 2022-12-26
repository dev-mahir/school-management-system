import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
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
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="">Name</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />
                        </div>
                        <div>
                            <label htmlFor="name">Gender</label>
                            <select name="" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name">Mobile</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />

                        </div>
                        <div>
                            <label htmlFor="name">Adress</label>
                            <input id='name' value="" type="text" placeholder='Enter name' />

                        </div>
                        <div>
                            <label htmlFor="name">Image</label>
                            <input id='name' value="" type="file" placeholder='Enter name' />

                        </div>
                    </div>
                    <div className='w-[150px] mt-3'>
                        <img className='rounded-md' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    </div>
             
                    <div className='mt-5'>
                        <button className='btn btn-primary'>Update</button>
                        <Link to="/users/change-password" className='btn btn-danger py-2 ml-2'>Change Password</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;