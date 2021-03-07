const menuConfig = [
  {
    name: "数据看板",
    path: "/dashboard",
  },
  {
    name: "管理员管理",
    path: "/manager-manage",
    children: [
      {
        name: "管理员添加",
        path: "/manager-manage/manager-add",
      },
      {
        name: "管理员删除",
        path: "/manager-manage/manager-delete",
      },
    ],
  },
  {
    name: "订单管理",
    path: "/order-manage",
    children: [
      {
        name: "商品价格",
        path: "/order-manage/goods-price",
      },
      {
        name: "商品类型",
        path: "/order-manage/goods-type",
      },
    ],
  },
  {
    name: "库存管理",
    path: "/stock-manage",
    children: [
      {
        name: "商品保质期",
        path: "/stock-manage/goods-life",
      },
      {
        name: "商品库存",
        path: "/stock-manage/goods-stock",
      },
    ],
  },
];

export default menuConfig;
