import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })

  const onChangeInput = e => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const registerSubmit =async e => {
    e.preventDefault()
    try{
      await axios.post('/user/register',{...user})

      localStorage.setItem('firstLogin',true)

      window.location.href = "/"
      
    }catch(err){
      alert(err.response.data.msg)
    }
  }


  return (
    <div className="login">
    <form className="login-form" onSubmit={registerSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="text">Email:</label>
        <input type="text"  name="text" required placeholder="Enter your name"  value={user.name} onChange={onChangeInput} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email"  name="email" required placeholder="Enter your email"  value={user.email} onChange={onChangeInput} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password"  name="password" required placeholder="Enter your password" value={user.password} onChange={onChangeInput} />
      </div>
      <button type="submit">Register</button>
      <Link to='/login'>Login</Link>
    </form>
  </div>
  )
}

export default Register
