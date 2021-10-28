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
    // login(values).then((res) => {
    //   authService.set(res.data.token);
    //   history.push("/layout/dashboard");
    // });
    history.push("/layout/dashboard");
  };
  const year = new Date().getFullYear();

  return (
    <div className="login-page">
      <Helmet title="LIKEJS - 登录" />
      <div className="login-wrapper">
        <div className="center">
          <div className="logo" />
          <div className="slogan">LIKEJS 开放平台</div>
          <div className="login-form">
            <div className="login-form-title">登 录</div>
            <PhoneLoginBind onSuccess={handleSuccess} />
          </div>
        </div>
        <footer>
          <span>LIKEJS© {year || 2021}</span>
          <span> | </span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            京ICP备20000487号-1
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
