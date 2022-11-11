import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { productType, productSliceType } from "../types/types";
import axios, { AxiosResponse } from "axios";

const DBLINK = "https://truebuy.onrender.com";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkApi) => {
    try {
      const res = await axios.get<productType>(
        `${DBLINK}/products`
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState: productSliceType = {
  loading: false,
  error: false,
  errmsg: "string",
  products: [],
};

const product: productType = {
  _id: "",
  id: 0,
  title: "",
  brand: "",
  rating: 0,
  mrp: 0,
  price: 0,
  quantity: 0,
  images: [],
  colors: [],
  ddprice: {},
  productDesc: {},
  productFeatures: {},
  category: "",
  subcategory: "",
  flash: false,
  bestDeals: false,
  trending: false,
  newArrival: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<productType[]>) => {
          (state.loading = false),
            (state.error = false),
            (state.products = action.payload);
        }
      )
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        (state.error = true),
          (state.loading = false),
          (state.errmsg = action.payload);
      })
  },
});

export default productSlice.reducer;
