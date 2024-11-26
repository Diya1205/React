import { createSlice } from "@reduxjs/toolkit";

// value
const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        removetodo:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)


        }   
    }
})

export const {addTodo,removetodo} = todoSlice.actions;

export default todoSlice.reducer