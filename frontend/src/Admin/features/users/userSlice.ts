import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { userType, userSliceType } from "../types/types";
import axios, { AxiosResponse } from "axios";

const DBLINK = "https://truebuy.onrender.com";

export const getUsers = createAsyncThunk("users/getUsers", async ( data: {token:string}, thunkApi) => {
  try {
    const res :AxiosResponse<userType> = await axios({
      method: "GET",
      url: `${DBLINK}/user`,
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    });
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const initialState: userSliceType = {
  loading: false,
  error: false,
  errmsg: "",
  successMsg: "",
  users: [],
};

const user: userType = {
  _id: "",
  email: "",
  password: "",
  role: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<userType[]>) => {
          (state.loading = false),
            (state.error = false),
            (state.users = action.payload);
        }
      )
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        (state.error = true),
          (state.loading = false),
          (state.errmsg = action.payload);
      });
  },
});

export default userSlice.reducer;
