import React from "react";
import { dashboardShopList, dashboardCustomerList } from "@/services/dashboard";
class Dashboard extends React.Component {
  componentDidMount() {
    const data = {
      start_date: "2021-03-04",
      end_date: "2021-03-11",
    };
    dashboardShopList(data).then((res) => {
      console.log("dashboardShopList", res);
    });
    dashboardCustomerList(data).then((res) => {
      console.log("dashboardCustomerList", res);
    });
  }

  render() {
    return <div>{"数据看板"}</div>;
  }
}

export default Dashboard;
