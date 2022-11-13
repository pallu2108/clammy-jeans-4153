import {legacy_createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk"

import {reducer as BestReducer} from "./BestReducer/reducer"
import { reducer as FlashReducer } from "./FlashReducer/reducer";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Admin/features/auth/authSlice";
import productSlice from '../Admin/features/products/productSlice';
import userSlice from "../Admin/features/users/userSlice";
import userAuthSlice from "../features/userAuthSlice";

const store = configureStore({
    reducer:{
        authSlice, productSlice, userSlice, BestReducer, FlashReducer, userAuthSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 

// const rootReducer=combineReducers({
   
//     FlashReducer, BestReducer
// })

// const store =legacy_createStore(rootReducer, applyMiddleware(thunk))
// export {store};