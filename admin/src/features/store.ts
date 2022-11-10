import { configureStore } from "@reduxjs/toolkit";
// import usersSlice from "./products/productSlice";
// import projectsSlice from './projects/projectsSlice'
// import authSlice from "./auth/authSlice";
// import tasksSlice from "./tasks/tasksSlice";
// import groupsSlice from "./groups/groupsSlice"
import productSlice from './products/productSlice'

const store = configureStore({
    reducer:{
        productSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 