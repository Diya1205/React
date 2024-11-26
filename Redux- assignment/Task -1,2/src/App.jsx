import React from 'react'
import Counter from './features/Counter/Counter'
import Todolist from './features/todo/Todolist'
import Addtodo from './features/todo/Addtodo'

function App() {
  return (
    <div>
      <h1 className='text-center'>hello redux app</h1>
      <Counter />
      <Addtodo />
      <Todolist />
    </div>
  )
}

export default App
