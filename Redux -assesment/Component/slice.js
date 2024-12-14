import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: '',
    address: '',
    errors: {},
  };
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setUsername: (state, action) => {
        state.username = action.payload;
      },
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setConfirmPassword: (state, action) => {
        state.confirmPassword = action.payload;
      },
      setPhone: (state, action) => {
        state.phone = action.payload;
      },
      setDob: (state, action) => {
        state.dob = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setUsername, setEmail, setPassword, setConfirmPassword, setPhone, setDob, setAddress, setErrors } = formSlice.actions;
export default formSlice.reducer;


