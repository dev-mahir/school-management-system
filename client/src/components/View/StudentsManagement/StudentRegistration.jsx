import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { year_range } from '../../../utlility/date'
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader'

const StudentRegistration = () => {

  const yearRange = year_range(2);

  // input state 
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    fathers_name: "",
    mothers_name: "",
    email: "",
    phone: "",
    gender: "",
    religion: "",
    date_birth: "",
    year: "",
    address: "",
    class_name: "",
    discount: ""
  });

  const {
    first_name, last_name, fathers_name, mothers_name, religion, email, phone, gender, date_birth, year, address, class_name, discount } = input 

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState, 
      [e.target.name] : e.target.value
    }))

  }




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
              <label>Student's First Name</label>
              <input name='first_name' value={first_name} onChange={handleInputChange} type="text" placeholder='Enter first name' />
            </div>
            <div>
              <label>Student's Last Name</label>
              <input name='last_name' value={last_name} onChange={handleInputChange} type="text" placeholder='Enter  last name' />
            </div>
            <div>
              <label>Father's Name</label>
              <input name='fathers_name' value={fathers_name} onChange={handleInputChange}  type="text" placeholder='Enter father&apos;s name' />
            </div>
            <div>
              <label >Mother's Name</label>
              <input name='mothers_name' value={mothers_name} onChange={handleInputChange}  type="text" placeholder='Enter mother&apos;s name' />
            </div>
            <div>
              <label >Phone Number</label>
              <input name='phone' value={phone} onChange={handleInputChange}  type="number" placeholder='Enter email address' />
            </div>

            <div>
              <label >Email Address</label>
              <input name='email' value={email} onChange={handleInputChange}  type="email" placeholder='Enter email address' />
            </div>

            <div>
              <label >Address</label>
              <input name='address' value={address} onChange={handleInputChange}  type="text" placeholder='Enter  address' />
            </div>


            <div>
              <label >Gender</label>
              <select name='gender' value={gender} onChange={handleInputChange} >
                <option> Select Gender </option>
                <option value="Male"> Male</option>
                <option value="Female">Femaile</option>
              </select>
            </div>
            <div>
              <label >Religion</label>
              <select name='religion' value={religion} onChange={handleInputChange} >
                <option> Select Religion</option>
                <option value="Female">Femaile</option>
              </select>
            </div>
            <div>
              <label >Date of Birth</label>
              <input type="date" name='date_birth' value={date_birth} onChange={handleInputChange} />
            </div>

            <div>
              <label >Monthly Fee Discount</label>
              <input name='discount' value={discount} onChange={handleInputChange}  type="text" placeholder='Enter discount (%)' />
            </div>
            <div>
              <label >Year</label>
              <select name='year' value={year} onChange={handleInputChange} >
                <option value="">Select Year</option>
                {yearRange.map((year, i) => 
                  <option key={i} value={year}>{ year}</option>
                )}

              </select>
            </div>
            <div>
              <label >Class</label>
              <select name='class_name' value={class_name} onChange={handleInputChange} >
                <option value="">Select Class</option>
              </select>
            </div>

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