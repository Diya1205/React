import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function Addtodo() {

    const [users,setusers] =useState('')

    const dispatch = useDispatch()

    const handlesubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodo({
            id : Date.now(),
            users,
            completed: false,
        }))
        setusers('')
    }

  return (
    <div className='container'>
       <form action="" onSubmit={handlesubmit}>
        <input type="text" value={users} onChange={(e)=>setusers(e.target.value)} placeholder='add todo' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo
