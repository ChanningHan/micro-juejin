import Axios from "axios";
import interceptors from "./interceptors";
const packageName = require("../../package.json").name;

// 如果作为微应用，应该在加上该应用的标识前缀，以区分其他应用的接口，并且让主应用能够正确代理到微应用中，再从微应用代理到服务器（并且通过pathRewrite去掉该标识前缀）
let baseURL = "/api";
// eslint-disable-next-line no-constant-condition
if (window.__POWERED_BY_QIANKUN__ || true) {
  baseURL += `/${packageName}`;
}

const http = Axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "Channing-Request",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "-1"
  },
  withCredentials: true,
  timeout: 60000 // max time of request timeout
});

interceptors(http);

export { http };
export default http;
