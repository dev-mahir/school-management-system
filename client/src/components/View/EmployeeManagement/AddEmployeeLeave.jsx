import React from 'react'
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader'

const AddEmployeeLeave = () => {
  return (
    <div className='pb-5'>

      <ViewCardHeader
        title="Add Employee Leave"
        link="/employee/leave/view"
        btnName="View Employe Leave"
        icon={<AiFillEye />}

      />

      <div className="card mt-5 p-5">
        <form>
          <div className="grid grid-cols-3 gap-x-4 gap-y-5  ">
            <div>
              <label htmlFor="">Employee Name</label>
              <select>
                <option value="">Md Mahir</option>
                <option value="">Akash</option>
              </select>
            </div>
             <div>
              <label htmlFor="name">Start Date</label>
              <input type="date" />
            </div>

            <div>
              <label htmlFor="name">End Date</label>
              <input type="date" />
            </div>

            <div>
              <label htmlFor="">Reason</label>
              <input type="text" placeholder='Enter reason' />
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
export default AddEmployeeLeave;