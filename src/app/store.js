import { configureStore } from "@reduxjs/toolkit";
import managerManageReducer from "@/features/manager-manage-slice";
import orderManageReducer from "@/features/order-manage-slice";

export default configureStore({
  reducer: {
    managerManage: managerManageReducer,
    orderManage: orderManageReducer,
  },
});

