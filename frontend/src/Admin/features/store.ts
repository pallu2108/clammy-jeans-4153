import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import productSlice from './products/productSlice';
import userSlice from "./users/userSlice";
import userAuthSlice from "./auth/userAuthSlice";

const store = configureStore({
    reducer:{
        authSlice, productSlice, userSlice, userAuthSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 