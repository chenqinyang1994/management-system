import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, minus, addByAction } from "@/features/manager-manage-slice";

const ManagerAdd = () => {
  const managerManageValue = useSelector((state) => state.managerManage.value);
  const dispatch = useDispatch();
  return (
    <div>
      <header>添加管理员</header>
      <div>value: {managerManageValue}</div>
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(minus())}>-</button>
      <button onClick={() => dispatch(addByAction(10))}>+byAction</button>
    </div>
  );
};

export default ManagerAdd;
