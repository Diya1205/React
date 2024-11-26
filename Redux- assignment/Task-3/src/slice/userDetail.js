import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

// promise pending,fullfield,reject handel karna padata he

// creted funtion
export const createUser = createAsyncThunk(
    "createUser",
    async(data,{ rejectWithValue})=>{
        const res = await axios.post(`http://localhost:3000/users`,data)
        try {
            const respos = await res.data;
            return respos
        }
        catch(error){
            return rejectWithValue(error.respos)
        }
    }
)

// read funtion
export const showuser = createAsyncThunk(
    "showUser",async(argu,{rejectWithValue}) =>{
        const resp = await axios.get(`http://localhost:3000/users`);
        try {
            const response = resp.data;
        return response
        } catch (error) {
            return rejectWithValue(error)
        } 
    }
)

// delete funtion

export const deleteUser = createAsyncThunk(
    "deleteuser",async(id,{rejectWithValue})=>{
        const res = await axios.delete(`http://localhost:3000/users/${id}`)
        try {
            const respo = await res.data
            return respo
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

// update function
export const updateUser = createAsyncThunk(
    "updateUser",async (data,{rejectWithValue})=>{
        console.log("udapate data",data);
        const respo = await axios.put(`http://localhost:3000/users/${data.id}`,data)

        try {
            const result = await respo.data;
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)



export const userDetails= createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        // Define your reducers using the builder callback
        userPending :(state)=>{
            state.loading = true;
        },
        userFullfilled : (state,action)=>{
            state.loading = false;
            // Append new User to the user array
            state.users.push(action.payload);
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    },
    // use extrReducers field directly
    extraReducers:(builder)=>{
        builder
        // add data by post
        .addCase(createUser.pending,(state)=>{
            state.loading= true;
        })
        .addCase(createUser.fulfilled, (state,action) =>{
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // get data
        .addCase(showuser.pending, (state)=>{
            state.loading =  true;
        })
        .addCase(showuser.fulfilled,(state,action)=>{
            state.loading = false;

            state.users = action.payload;
        })
        .addCase(showuser.rejected,(state,action)=>{
            state.loading = false;
            state.loading = action.payload
        })

        // delete funtion
        .addCase(deleteUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            state.loading = false;

            const {id} = action.payload;

            if(id)
                {
                    state.users = state.users.filter((data)=>data.id !== id)
                }
        })
        .addCase(deleteUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

        // update data
        .addCase(updateUser.pending ,(state)=>{
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.users = state.users.map((ele)=>(
                ele.id === action.payload.id ? action.payload : ele
            ))
        })
        .addCase(updateUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    },
})

export const{userPending, userFullfilled, userRejected} = userDetails.actions;

export default userDetails.reducer;