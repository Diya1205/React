import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todolist() {

    const todo = useSelector(state =>  state.todos.todos)
    const dispatch = useDispatch()

  return (
    <div className='container'>
      <h1>Hello todo list</h1>
      <ul>
        {
            todo.map((todos,index)=>{
                return(
                   <>
                    <li key={index}>{todos.users} <button className='btn btn-danger' onClick={()=>dispatch(removetodo(todos.id))} >remove</button></li>
                   </>
                    
                )
            })
        }
        
      </ul>
    </div>
  )
}

export default Todolist
