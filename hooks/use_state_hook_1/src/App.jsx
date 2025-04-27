import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState hook is used to create a state object to store form data (name, email, password, gender)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  })

  // handelChange function handles input changes and updates the state whenever the inputs are changed
  
  const handelChange = (e) => {
    const { name, value } = e.target
    // Spread the previous data and update only the changed field
    setData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <h1>Registration Form</h1>
      {/* Form to collect user data, on submit prevents default behavior and logs the data */}
      <form 
        onSubmit={(e) => { e.preventDefault(); console.log(data) }}
        className="form"
      >
        {/* Name Input Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            name="name"
            placeholder="Enter name" 
            onChange={handelChange} 
          />
        </div>

        {/* Email Input Field */}
        <div className="form-group">
          <label htmlFor="email">Gmail</label>
          <input 
            id="email" 
            type="email" 
            name="email"
            placeholder="Enter email" 
            onChange={handelChange} 
          />
        </div>

        {/* Password Input Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            placeholder="Enter password" 
            onChange={handelChange} 
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input 
              type="radio" 
              id="male" 
              name="gender" 
              value="male" 
              onChange={handelChange} 
            />
            <label htmlFor="male">Male</label>

            <input 
              type="radio" 
              id="female" 
              name="gender" 
              value="female" 
              onChange={handelChange} 
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
