import { configureStore } from "@reduxjs/toolkit";
import managerManageReducer from "@/features/manager-manage-slice";
import orderManageReducer from "@/features/order-manage-slice";
import themeReducer from "@/features/theme-slice";

export default configureStore({
  reducer: {
    managerManage: managerManageReducer,
    orderManage: orderManageReducer,
    themeManage: themeReducer,
  },
});

