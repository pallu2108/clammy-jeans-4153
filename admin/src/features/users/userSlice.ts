import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { userType, userSliceType } from "../types/types";
import axios, { AxiosResponse } from "axios";

const DBLINK = "http://localhost:8080";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (thunkApi) => {
    try {
      const res = await axios.get<userType>(`${DBLINK}/user`);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState: userSliceType = {
  loading: false,
  error: false,
  errmsg: "",
  successMsg:"",
  users: [],
};

const user: userType = {
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
            (state.products = action.payload);
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
