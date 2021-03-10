import Layout from "@/components/layout";

import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import PersonInfo from "@/pages/person-info";

import ManagerAdd from "@/pages/manager-manage/manager-add";
import ManagerDelete from "@/pages/manager-manage/manager-delete";

import GoodsPrice from "@/pages/order-manage/goods-price";
import GoodsType from "@/pages/order-manage/goods-type";

import GoodsLife from "@/pages/stock-manage/goods-life";
import GoodsStock from "@/pages/stock-manage/goods-stock";

const routesModule = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/layout",
    component: Layout,
    routes: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/person-info",
        component: PersonInfo,
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
    ].map((r) => {
      r.path = "/layout" + r.path;
      return r;
    }),
  },
];

export default routesModule;
