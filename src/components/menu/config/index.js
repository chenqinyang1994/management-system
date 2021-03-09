import {
  BarChartOutlined,
  UserOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UnorderedListOutlined,
  MoneyCollectOutlined,
  BookOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  FunnelPlotOutlined,
} from "@ant-design/icons";

const layoutRoute = '/layout';

const menuConfig = [
  {
    name: "数据看板",
    path: `${layoutRoute}/dashboard`,
    icon: <BarChartOutlined />,
  },
  {
    name: "管理员管理",
    path: `${layoutRoute}/manager-manage`,
    icon: <UserOutlined />,
    children: [
      {
        name: "管理员添加",
        path: `${layoutRoute}/manager-manage/manager-add`,
        icon: <UserAddOutlined />,
      },
      {
        name: "管理员删除",
        path: `${layoutRoute}/manager-manage/manager-delete`,
        icon: <UserDeleteOutlined />,
      },
    ],
  },
  {
    name: "订单管理",
    path: `${layoutRoute}/order-manage`,
    icon: <UnorderedListOutlined />,
    children: [
      {
        name: "商品价格",
        path: `${layoutRoute}/order-manage/goods-price`,
        icon: <MoneyCollectOutlined />,
      },
      {
        name: "商品类型",
        path: `${layoutRoute}/order-manage/goods-type`,
        icon: <BookOutlined />,
      },
    ],
  },
  {
    name: "库存管理",
    path: `${layoutRoute}/stock-manage`,
    icon: <ShopOutlined />,
    children: [
      {
        name: "商品保质期",
        path: `${layoutRoute}/stock-manage/goods-life`,
        icon: <FunnelPlotOutlined />,
      },
      {
        name: "商品库存",
        path: `${layoutRoute}/stock-manage/goods-stock`,
        icon: <ShoppingCartOutlined />,
      },
    ],
  },
];

export default menuConfig;
