import Layout from "@components/layout";

import App from "@pages/app";
import Login from "@pages/login";
import Dashboard from "@pages/dashboard";
import PersonInfo from "@pages/person-info";

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
    path: "/person-info",
    component: PersonInfo,
  },
  {
    path: "/manager-manage",
    component: Layout,
    children: [
      {
        path: "/manager-add",
        component: ManagerAdd,
      },
      {
        path: "/manager-delete",
        component: ManagerDelete,
      },
    ],
  },
  {
    path: "/order-manage",
    component: Layout,
    children: [
      {
        path: "/goods-price",
        component: GoodsPrice,
      },
      {
        path: "/goods-type",
        component: GoodsType,
      },
    ],
  },
  {
    path: "/stock-manage",
    component: Layout,
    children: [
      {
        path: "/goods-life",
        component: GoodsLife,
      },
      {
        path: "/goods-stock",
        component: GoodsStock,
      },
    ],
  },
];

export default routes;
