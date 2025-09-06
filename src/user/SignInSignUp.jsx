import React from 'react'
import { useState } from 'react'

const SignInSignUp = () => {
    
    
    const [state, setState] = useState('SignIn')
    const [formData, setFormData]= useState({
        username: '',
        email: '',
        password: ''
    })
    
    const changehandler=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const signin= async()=>{
        console.log('signin function executed', formData)
    }
    const signup= async()=>{
        console.log('signup function executed', formData)
    }


    return (
        <div className='w-full h-[90vh] flex items-center justify-center'>
            <div className='w-[400px]  h-[600px] m-auto p-10 gap-6  flex flex-col items-center justify-center bg-white border-red-500 border-2 rounded-xl'>
                <h1 className='text-3xl font-semibold text-red-600'>{state}</h1>
                <div className='w-full flex flex-col items-center gap-4 justify-center'>
                    {state === "SignUp" ? <input className='border-2 px-4 p-2 rounded-xl w-full outline-none' type="text" placeholder='username' name='username' value={formData.username} onChange={changehandler}  /> : <></>}
                    <input className='border-2 px-4 p-2 rounded-xl w-full outline-none' type="email" name='email' placeholder='email address' value={formData.email} onChange={changehandler} />
                    <input className='border-2 px-4 p-2 rounded-xl w-full outline-none' type="password" name='password' placeholder='password' value={formData.password} onChange={changehandler} />
                </div>
                <button onClick={()=>{state==='SignIn'? signin(): signup()}} className='p-1 px-2  rounded-xl w-full bg-red-600 text-white'>Continue</button>
                {state === "SignUp" ? <p onClick={() => { setState('SignIn') }} className='cursor-pointer'>already user? Login Here</p> : <></>}
                {state === "SignIn" ? <p onClick={() => { setState('SignUp') }} className='cursor-pointer'>new user? click Here</p> : <></>}
                <div className='w-full flex flex-row items-center justify-center gap-4'>
                    <input type="checkbox" name='' />
                    <p>By continuing, I agree to the terms and the conditions</p>
                </div>
            </div>


        </div>
    )
}

export default SignInSignUp
