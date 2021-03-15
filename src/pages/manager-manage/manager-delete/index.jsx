import React from "react";
import { useSelector } from "react-redux";

const ManagerDelete = () => {
  const managerManageValue = useSelector((state) => state.managerManage.value);

  return (
    <div>
      <header>删除管理员</header>
      <div>添加管理员的值是：{managerManageValue}</div>
    </div>
  );
};

export default ManagerDelete;
