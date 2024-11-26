import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../slice/userDetail';


function Create() {

    const [users,setusers] = useState({})

    // asythunk use thase data pass
    const dispatch = useDispatch();

    const getuserdata=(e)=>{
        setusers({...users,
            id:new Date().getTime().toString()
            ,[e.target.name]:e.target.value});
        console.log(users)
    }

    // submit

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Users...",users)
        dispatch(createUser(users))
    }
  return (
    <div>
       <div className="container">
        <h2 className="my-2">Fill The data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              onChange={getuserdata}
              placeholder="Enter your name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              name="email"
              onChange={getuserdata}
              placeholder="Enter your email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              name="phone"
              onChange={getuserdata}
              placeholder="Enter your Age"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              onChange={getuserdata}
              placeholder="Enter your Age"
              type="password"
              className="form-control"
            />
          </div>
          <div>
            <div className="mb-3">
              <input
                value="male"
                onChange={getuserdata}
                name="gender"
                className="form-check-input"
                type="radio"
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="mb-3">
              <input
                value="female"
                onChange={getuserdata}
                name="gender"
                className="form-check-input"
                type="radio"
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create