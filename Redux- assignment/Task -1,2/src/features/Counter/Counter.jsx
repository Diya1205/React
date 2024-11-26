import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {

    const count = useSelector(state => state.counter.value)

    const dispatch = useDispatch()
    return (
    <div>
      <div className="container">
        <h1>hello... {count}</h1>

        <button className='btn btn-success' onClick={()=>dispatch(increment())}>Incremenet</button>
        <button className='btn btn-success' onClick={()=>dispatch(decrement())}>decremenet</button>
      </div>
    </div>
  )
}

export default Counter
