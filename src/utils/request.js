import axios from "axios";
import { message } from "antd";

import HOST_API from "@/constants/api";
import authService from "@/utils/authService";

const notToast = [];

const request = async (options) => {
  const { url, data = {}, headers = {}, method = "get" } = options;
  const useParam = ["GET", "DELETE"].indexOf(method.toUpperCase()) >= 0;
  try {
    const res = await axios({
      url: `${HOST_API}${url}`,
      data: !useParam ? data : undefined,
      params: useParam ? data : undefined,
      method,
      headers: {
        ...headers,
        Authorization: authService.get(),
      },
    });

    if (notToast.some((el) => url.startsWith(el))) {
      // 如果是notToast，message不提示
      return res.data;
    }

    if (res.status !== 200 || !res.data || res.data.code !== 200) {
      const err = new Error();
      err.response = res;
      throw err;
    }
    console.log("request success:", url, res);
    return res.data;
  } catch (err) {
    console.log("request failed:", options, err);
    if (err.response && err.response.data && err.response.data.code === 401) {
      // 如果code是401，跳到登录页
      authService.remove();
      window.location.href = `${window.routerBase}/login`;
    }
    if (err.response && err.response.data && err.response.data.error) {
      message.error(err.response.data.error);
      return { code: -1, msg: err.response.data.error };
    }
    message.error(err.message);
    return { code: -1, msg: err.message };
  }
};

export default request;
