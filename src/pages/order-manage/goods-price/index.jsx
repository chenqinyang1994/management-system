import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";
import {
  add100,
  minus200,
  addByCustom,
  setLoading,
  fetchUserById,
} from "@/features/order-manage-slice";
import { login } from "@/services/login";

const GoodsPrice = () => {
  const { price, manager, loading, data } = useSelector((state) => ({
    manager: state.managerManage.value,
    price: state.orderManage.price,
    loading: state.orderManage.loading,
    data: state.orderManage.data,
  }));
  const dispatch = useDispatch();
  return (
    <div>
      <Spin spinning={loading}>
        <header>商品价格</header>
        <div>data: {data}</div>
        <div>manager: {manager}</div>
        <div>price: {price}</div>
        <button
          onClick={() => {
            dispatch(fetchUserById());
            dispatch(add100());
          }}
        >
          add100
        </button>
        <button onClick={() => dispatch(minus200())}>minus200</button>
        <button
          onClick={async () => {
            dispatch(setLoading(true));
            const res = await login({
              phone: "13520218888",
              password: "12345678",
            });
            dispatch(addByCustom(res.data.token));
          }}
        >
          addByCustom
        </button>
      </Spin>
    </div>
  );
};

export default GoodsPrice;
