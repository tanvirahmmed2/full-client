import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <div className='w-[400px] p-4  h-[600px] m-auto px-10 gap-6 py-14 flex flex-col items-start justify-center '>
        <h1 className='text-3xl font-semibold text-red-600'>Login</h1>
        <div className='w-full flex flex-col items-center gap-4 justify-center'>
          <input className='border-2 px-4 p-2 rounded-xl w-full outline-none' type="email" placeholder='email address' />
          <input className='border-2 px-4 p-2 rounded-xl w-full outline-none' type="password" placeholder='password' />
        </div>
        <button className='p-1 px-2  rounded-xl w-full bg-red-600 text-white'>Continue</button>
        <Link to="/signup">new user? SignUp here</Link>
        
      </div>


    </div>
  )
}

export default Login
