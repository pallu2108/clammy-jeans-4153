import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios";

import {authStateSliceType, authResType} from "../types/types"

const DBLINK = "http://localhost:8080";

//login action
export const login = createAsyncThunk(
    "users/auth/login",
    async(data:{email:string, password:string}, thunkApi)=>{
        try{
            const response = await axios.post<authResType>(`${DBLINK}/admin`, data);
            console.log(response.data)
            return response.data
        }
        catch(err:any){
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

const initialState: authStateSliceType = {
    loading: false,
    error: false,
    token: localStorage.getItem("tokentruebuy") || "",
    isAuth: localStorage.getItem("tokentruebuy")?true:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state){
            console.log("logout")
            state.isAuth = false
            state.token=""
            localStorage.removeItem("tokentruebuy")
        }
    },
    extraReducers(builder){
        builder
        .addCase(login.pending, (state, action)=>{
            state.loading = true;
            state.error = false
        })
        .addCase(login.fulfilled, (state, action:PayloadAction<authResType>)=>{
            state.loading = false,
            state.isAuth = true,
            state.error = false,
            state.token = action.payload.token,
            localStorage.setItem("tokentruebuy", action.payload.token)
        })
        .addCase(login.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false,
            state.isAuth = false,
            state.error = true
        })
    }
})

console.log(authSlice)

export const {logout} = authSlice.actions;

export default authSlice.reducer;


