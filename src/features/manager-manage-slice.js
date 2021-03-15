import { createSlice } from "@reduxjs/toolkit";

export const managerManageSlice = createSlice({
  name: "managerManage",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
    addByAction: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, minus, addByAction } = managerManageSlice.actions;

export default managerManageSlice.reducer;
