import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import "normalize.css";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";

import App from "@/pages/app";
import reportWebVitals from "./reportWebVitals";

dayjs.locale('zh-cn')

console.log(`REACT_APP_ENV: ${process.env.REACT_APP_ENV}`);
console.log(`REACT_APP_ENV: ${process.env.NODE_ENV}`);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
