import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
import './register.css'


const Register = () => {
  const context = useContext(UserContext)
  const { registerUser } = context
  const [registers, setRegisters] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    console.log(e.target.value)
    setRegisters({ ...registers, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registers)

    if (
      !registers.name ||
      !registers.email ||
      !registers.phone ||
      !registers.password
    ) {
      alert(("Please enter all the required fields!"));
      return;
    }
    if (registers.password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }
    const userData = { ...registers};
    registerUser(userData)
    alert("User Registration Successfull")
  }

  return (

    <>
      <div className="register">
        <form className="registerform" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" onChange={handleOnChange} name="name" className="form-control" id="inputname" aria-describedby="name" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={handleOnChange} name="email" className="form-control" id="innputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="Phone" onChange={handleOnChange} name="phone" className="form-control" id="iphone" aria-describedby="phone" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={handleOnChange} name="password" class="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-secondary">SignUp</button>

        </form>
      </div>

    </>
  )
}

export default Register