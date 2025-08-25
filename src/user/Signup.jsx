import React from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className='w-full h-[80vh]'>
      <div className='w-3/4 h-[600px] m-auto px-10 gap-6 py-14 flex flex-col items-center justify-center '>
        <h1>SignUp</h1>
        <div className='w-full flex flex-col items-center gap-4 justify-center'>
          <input className='border-2 px-2 p-1 rounded-xl w-1/2 outline-none' type="text" placeholder='name' />
          <input className='border-2 px-2 p-1 rounded-xl w-1/2 outline-none' type="email" placeholder='email address' />
          <input className='border-2 px-2 p-1 rounded-xl w-1/2 outline-none' type="password" placeholder='password' />
        </div>
        <button className='p-1 px-2 border-2 rounded-xl'>Continue</button>
        <Link to="/login">already user? Login Here</Link>
        <div className='w-full flex flex-row items-center justify-center gap-4'>
          <input type="checkbox" name='' />
          <p>By continuing, I agree to the terms and the conditions</p>
        </div>
      </div>


    </div>
  )
}

export default Signup
