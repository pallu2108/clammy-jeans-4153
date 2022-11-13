import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios";

import {userAuthStateSliceType, userAuthResType} from "../types/types"

const DBLINK = "https://truebuy.onrender.com/";

//login action
export const userLogin = createAsyncThunk(
    "users/login",
    async(data:{email:string, password:string}, thunkApi)=>{
        try{
            const response = await axios.post<userAuthResType>(`${DBLINK}/user/login`, data);
            console.log(response.data)
            return response.data
        }
        catch(err:any){
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

const initialState: userAuthStateSliceType = {
    loading: false,
    error: false,
    token: localStorage.getItem("token") || "",
    isAuth: localStorage.getItem("token")?true:false
}

const userAuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state){
            console.log("logout")
            state.isAuth = false
            state.token=""
            localStorage.removeItem("token")
        }
    },
    extraReducers(builder){
        builder
        .addCase(userLogin.pending, (state, action)=>{
            state.loading = true;
            state.error = false
        })
        .addCase(userLogin.fulfilled, (state, action:PayloadAction<userAuthResType>)=>{
            state.loading = false,
            state.isAuth = true,
            state.error = false,
            state.token = action.payload.token,
            localStorage.setItem("token", action.payload.token)
        })
        .addCase(userLogin.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false,
            state.isAuth = false,
            state.error = true
        })
    }
})

console.log(userAuthSlice)

export const {logout} = userAuthSlice.actions;

export default userAuthSlice.reducer;


