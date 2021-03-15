import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "@/services/login";

export const fetchUserById = createAsyncThunk("orderManage/test123", async () => {
  const response = await login({ phone: "13520218888", password: "12345678" });
  return response.data;
});

export const orderManageSlice = createSlice({
  name: "orderManage",
  initialState: {
    data: null,
    price: 300,
    loading: false,
  },
  reducers: {
    add100: (state) => {
      state.price += 100;
    },
    minus200: (state) => {
      state.price -= 200;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addByCustom: (state, action) => {
      state.loading = false;
      state.price = action.payload;
    },
    testReducer: (state, action) => {
      state.price = action.payload;
    },
  },
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
        state.loading = true;
    },
    [fetchUserById.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload.phone;
    },
  },
});

export const {
  add100,
  minus200,
  addByCustom,
  setLoading,
  test123,
} = orderManageSlice.actions;

export default orderManageSlice.reducer;
