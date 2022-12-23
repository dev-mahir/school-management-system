import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AddGroup = () => {
  return (
      <div>
          <div className="card">
              <div className='card-header'>
                  <h3 className="card-title">Add Group</h3>
                  <div className='flex gap-x-4 items-center'>
                      <Link to='/setup/student/group/view' className='btn btn-success btn-icon px-3'> <AiOutlineEye />View Group</Link>
                  </div>
              </div>
          </div>
          <div className="card mt-5 p-5">
              <form>
                  <div className=" space-y-3">
                      <div>
                          <label htmlFor="">Group Name</label>
                          <input id='name' value=""  className='w-1/2' type="text" placeholder='Enter class name' />
                      </div>
                      <div className='flex items-center gap-1 mt-2'>
                          <input type="checkbox" id='status' /> <label htmlFor="status" className='mb-0 select-none'> Status</label>
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

export default AddGroup;