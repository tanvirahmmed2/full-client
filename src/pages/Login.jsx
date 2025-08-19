import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    
    const usernameoncChanges=(e)=>{
        setUsername(e.target.value)
    }
    const passwordoncChanges=(e)=>{
        setPassword(e.target.value)
    }
    const register= async (e)=>{
        try {
            const response= await axios.post("/api/users", {
                username,password
            })
            alert(response.data.message)
            setPassword("")
            setUsername("")
        } catch (error) {
            console.log(error)
            alert("registration failed")
        }
    }
  return (
    <div>
      <form action="" onSubmit={register}>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name='username' id='username' value={username} onChange={usernameoncChanges}/>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="text" name='password' id='password' value={password} onChange={passwordoncChanges}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
