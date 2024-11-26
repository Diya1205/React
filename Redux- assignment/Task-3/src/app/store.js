import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../feature/userDetails";

export const store = configureStore({
    reducer:{
        app:userDetails
    }
})