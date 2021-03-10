import qs from "qs";

function queryFactory(params) {
  const query = window.location.search.substring(1);
  if (params) {
    // set
    const isObject =
      Object.prototype.toString.call(params) === "[object Object]";
    if (isObject) {
      return qs.stringify(params);
    } else {
      throw new Error("请输入Object");
    }
  } else {
    // get
    return qs.parse(query);
  }
}

export default queryFactory;
