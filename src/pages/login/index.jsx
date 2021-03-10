import React from "react";
import { useHistory } from "react-router-dom";

import PhoneLoginBind from "@/components/phone-login-bind";
import Helmet from "@/components/helmet";

import "./index.less";

function Login() {
  let history = useHistory();
  const handleSuccess = (values) => {
    console.log("values", values);
    history.push("/layout/dashboard");
  };

  return (
    <div className="login-page">
      <Helmet title="LIKEJS - 登录" />
      <div className="login-wrapper">
        <div className="center">
          <div className="logo">
            <span>LIKE</span>
            <i>J</i>
            <b>S</b>
          </div>
          <div className="slogan">LIKEJS 开放平台</div>
          <div className="login-form">
            <div className="login-form-title">登录</div>
            <PhoneLoginBind onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
