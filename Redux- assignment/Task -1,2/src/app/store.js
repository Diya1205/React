import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/Counter/counterSlice";
import todoSlice  from "../features/todo/todoSlice";


export default configureStore({
    reducer : {
        counter : counterSlice,
        todos : todoSlice,
    }
})