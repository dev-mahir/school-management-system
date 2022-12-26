import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { userRegister } from '../../../redux/auth/action';
import { toast } from 'react-toastify';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (!input.name || !input.email || !input.password) {
            toast.error("All fields are required")
        } else {
            dispatch(userRegister(input, setInput, navigate))
        }
    }



    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full dark:_bg-gray-800 flex items-center justify-center'>
                <div className='w-[300px] drop-shadow p-5 dark:bg-gray-700 rounded-md'>
                    <form onSubmit={handleRegister} className='space-y-3'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input onChange={handleInputChange} value={input.name} type="text" id='name' name='name' placeholder='Enter your name' />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange={handleInputChange} value={input.email} type="email" id='email' name='email' placeholder='Enter your email' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={handleInputChange} value={input.password} type="password" id='password' name='password' placeholder='*********' />
                        </div>
                        <div>
                            <button type='submit' className='btn mt-2 border-gray-500 dark:text-gray-400'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;