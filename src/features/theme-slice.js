import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "managerManage",
  initialState: {
    themeValue: "dark",
  },
  reducers: {
    toggle: (state) => {
      state.themeValue = state.themeValue === "dark" ? "light" : "dark";
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
