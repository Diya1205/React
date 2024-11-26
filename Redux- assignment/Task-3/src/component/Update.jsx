import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../slice/userDetail'


function Update() {

    const {id} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const alluser =  useSelector((state)=>state.app.users)

    const [updatadata,setupdatedata]=useState();

    const getchange=(e)=>{
        setupdatedata({...updatadata,[e.target.name]:e.target.value})
        console.log(updatadata)
    }

    useEffect(()=>{
        if(id){

            const singleuser = alluser.filter((ele)=>ele.id === id);
            setupdatedata(singleuser[0])
        }
    },[])

    const handleupdate=(e)=>{
        e.preventDefault();

        dispatch(updateUser(updatadata))
        navigate("/read")
    }

  return (
    <div>
      <div className="container">
        <h2 className="my-2 bg-success">Update data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleupdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              value={updatadata && updatadata.name}
              onChange={getchange}
              placeholder="Enter your name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              name="email"
              onChange={getchange}
              value={updatadata && updatadata.email}
              placeholder="Enter your email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              name="phone"
              onChange={getchange}
              value={updatadata && updatadata.phone}
              placeholder="Enter your Age"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              onChange={getchange}
              value={updatadata && updatadata.password}
              placeholder="Enter your Age"
              type="password"
              className="form-control"
            />
          </div>
          <div>
            <div className="mb-3">
              <input
                value="male"
                onChange={getchange}
                checked = {updatadata && updatadata.gender === 'male'}
                name="gender"
                className="form-check-input"
                type="radio"
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="mb-3">
              <input
                value="female"
                onChange={getchange}
                checked = {updatadata && updatadata.gender === "female"}
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

export default Update