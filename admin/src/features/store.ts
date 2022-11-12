import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import productSlice from './products/productSlice';
import userSlice from "./users/userSlice";

const store = configureStore({
    reducer:{
        authSlice, productSlice, userSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 