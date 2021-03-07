import Login from "@pages/login";
import Dashboard from "@pages/dashboard";

import ManagerAdd from "@pages/manager-manage/manager-add";
import ManagerDelete from "@pages/manager-manage/manager-delete";

import GoodsPrice from "@pages/order-manage/goods-price";
import GoodsType from "@pages/order-manage/goods-type";

import GoodsLife from "@pages/stock-manage/goods-life";
import GoodsStock from "@pages/stock-manage/goods-stock";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/manager-manage/manager-add",
    component: ManagerAdd,
  },
  {
    path: "/manager-manage/manager-delete",
    component: ManagerDelete,
  },
  {
    path: "/order-manage/goods-price",
    component: GoodsPrice,
  },
  {
    path: "/order-manage/goods-type",
    component: GoodsType,
  },
  {
    path: "/stock-manage/goods-life",
    component: GoodsLife,
  },
  {
    path: "/stock-manage/goods-stock",
    component: GoodsStock,
  },
];

export default routes;
