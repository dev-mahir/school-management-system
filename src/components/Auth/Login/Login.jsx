import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { userLogin, userRegister } from '../../../redux/auth/action';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      toast.error("All fields are required")
    } else {
      dispatch(userLogin(input, setInput, navigate))
    }
  }



  return (
    <>
      <div className='login h-screen dark:_bg-gray-800 flex items-center justify-center'>
        <div className='w-[300px] drop-shadow p-5 dark:bg-gray-700 rounded-md'>
          <form onSubmit={handleLogin} className='space-y-3'>
            <div>
              <label htmlFor="email">Email</label>
              <input onChange={handleInputChange} value={input.email} type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input onChange={handleInputChange} value={input.password} type="password" id='password' name='password' placeholder='*********' />
            </div>
            <div>
              <button type='submit' className='btn mt-2 border-gray-500 dark:text-gray-400'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;