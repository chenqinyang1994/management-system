const apis = {
  development: "http://127.0.0.1:3035",
  production: "http://127.0.0.1:3088",
};

const apiMap = {
  development: apis.development,
  production: apis.production,
};

const API_HOST = apiMap[process.env.REACT_APP_ENV || "development"];

export default API_HOST;
