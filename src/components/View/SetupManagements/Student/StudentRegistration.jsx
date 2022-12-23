import React from 'react'
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ViewCardHeader from '../../../ViewCardHeader/ViewCardHeader'

const StudentRegistration = () => {
  return (
    <div className='pb-5'>

      <ViewCardHeader
        title="Student Registration"
        link="/student/view"
        btnName="View Student"
        icon={<AiFillEye />}

      />

      <div className="card mt-5 p-5">
        <form>
          <div className="grid grid-cols-3 gap-x-4 gap-y-5  ">
            <div>
              <label htmlFor="">Student's Full Name</label>
              <input id='name' value="" type="text" placeholder='Enter name' />
            </div>
            <div>
              <label htmlFor="name">Father's Name</label>
              <input id='name' value="" type="text" placeholder='Enter name' />
            </div>
            <div>
              <label htmlFor="name">Mother's Name</label>
              <input id='name' value="" type="text" placeholder='Enter email address' />
            </div>
            <div>
              <label htmlFor="name">Phone Number</label>
              <input id='name' value="" type="number" placeholder='Enter email address' />
            </div>

            <div>
              <label htmlFor="name">Email Address</label>
              <input id='name' value="" type="email" placeholder='Enter email address' />
            </div>

            <div>
              <label htmlFor="name">Address</label>
              <input id='name' value="" type="text" placeholder='Enter email address' />
            </div>

            <div>
              <label htmlFor="name">Address</label>
              <input id='name' value="" type="text" placeholder='Enter email address' />
            </div>
            <div>
              <label htmlFor="name">Gender</label>
              <select name="" id="">
                <option> Select Gender </option>
                <option value="Male"> Male</option>
                <option value="Female">Femaile</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Religion</label>
              <select name="" id="">
                <option> Select Religion</option>
                <option value="Female">Femaile</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Date of Birth</label>
              <input type="date" />
            </div>

            <div>
              <label htmlFor="name">Monthly Fee Discount</label>
              <input id='name' value="" type="text" placeholder='Enter discount (%)' />
            </div>
            <div>
              <label htmlFor="name">Year</label>
              <select name="" id="">
                <option value="">2020</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Class</label>
              <select name="" id="">
                <option value="">Select Class</option>
              </select>
            </div>

          </div>


          <div className='flex items-center gap-1 mt-2'>
            <input type="checkbox" id='status' /> <label htmlFor="status" className='mb-0 select-none'> Status</label>
          </div>
          <div className='mt-5'>
            <button className='btn btn-primary'>Add User</button>
          </div>
        </form>
      </div>
    </div>
  )


}
export default StudentRegistration;