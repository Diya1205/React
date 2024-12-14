// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../Component/slice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;