import React from 'react'
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader'

const EmployeeRegistration = () => {
  return (
    <div className='pb-5'>

      <ViewCardHeader
        title="Employee Registration"
        link="/employee/view"
        btnName="View Employe"
        icon={<AiFillEye />}

      />

      <div className="card mt-5 p-5">
        <form>
          <div className="grid grid-cols-3 gap-x-4 gap-y-5  ">
            <div>
              <label htmlFor="">Employee Name</label>
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
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Chirstian">Christian</option>
                <option value="Other">Other</option>
              </select>
            </div>


            <div>
              <label htmlFor="name">Date of Birth</label>
              <input type="date" />
            </div>

            <div>
              <label htmlFor="name">Date of Joining</label>
              <input type="date" />
            </div>



            <div>
              <label htmlFor="name">Salary</label>
              <input type="text" placeholder='Enter Salary' />
            </div>

            <div>
              <label htmlFor="name">Designation</label>
              <select name="" id="">
                <option value="Headmaster">Headmaster</option>
                <option value="Asst. Headmater">Asst. Headmaster</option>
                <option value="Senior Teacher">Senior Teacher</option>
                <option value="Junior Teacher">Junior Teacher</option>
                <option value="Junior Teacher">Junior Teacher</option>
                <option value="Junior Teacher">Staff</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Image</label>
              <input type="file" />
            </div>

          </div>

          <div className='mt-5'>
            <button className='btn btn-primary'>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  )

  

}
export default EmployeeRegistration;