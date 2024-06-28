import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [user,setUser] = useState({
    email:'',
    password:''
  })

  const onChangeInput = e => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const loginSubmit =async e => {
    e.preventDefault()
    try{
      await axios.post('/user/login',{...user})

      localStorage.setItem('firstLogin',true)

      window.location.href = "/"
      
    }catch(err){
      alert(err.response.data.msg)
    }
  }


  return (
    <div className="login">
    <form className="login-form" onSubmit={loginSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email"  name="email" required placeholder="Enter your email"  value={user.email} onChange={onChangeInput} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password"  name="password" required placeholder="Enter your password" value={user.password} onChange={onChangeInput} />
      </div>
      <button type="submit">Login</button>
      <Link to='/register'>Register</Link>
    </form>
  </div>
  )
}

export default Login
