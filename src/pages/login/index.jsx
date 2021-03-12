import React from "react";
import { useHistory } from "react-router-dom";

import PhoneLoginBind from "@/components/phone-login-bind";
import Helmet from "@/components/helmet";
import authService from "@/utils/authService";
import { login } from "@/services/login";

import "./index.less";

function Login() {
  let history = useHistory();
  const handleSuccess = (values) => {
    login(values).then((res) => {
      authService.set(res.data.token);
      history.push("/layout/dashboard");
    });
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
            <div className="login-form-title">登 录</div>
            <PhoneLoginBind onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
