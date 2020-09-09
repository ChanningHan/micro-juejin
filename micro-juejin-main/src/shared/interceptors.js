import { http } from "./http";

const err = error => {
  /*对于特定接口进行重新发送请求*/
  if (error && error.config && error.config.url === "/people/list1") {
    // 设置重置次数，默认为0
    let { config } = error;
    config.__retryCount = config.__retryCount || 0;
    // 判断是否超过了重试次数
    if (config.__retryCount >= 3) {
      return Promise.reject(error);
    }
    //重试次数自增
    config.__retryCount += 1;
    //延时处理
    let backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 3);
    });
    //重新发起axios请求
    return backoff.then(function() {
      return http(config);
    });
  }

  if (error.response) {
    console.log("error!!!!!!");
    console.log(error);
    console.log(error.statusText);
    const { data, status, statusText } = error.response;
    let errorMsg;
    switch (status) {
      case 500:
        errorMsg = {
          status,
          statusText,
          data,
          message: "服务器开了小差",
          error
        };
        break;
      case 401:
        errorMsg = {
          status,
          statusText,
          data,
          message: "未授权",
          error
        };
        break;
      default:
        errorMsg = {
          status,
          statusText,
          data,
          message: "出错了",
          error
        };
        break;
    }
    console.log(errorMsg);
  } else {
    // 请求超时状态
    if (error.message.includes("timeout")) {
      alert({
        message: "请求超时",
        description: "请检查网络是否连接正常"
      });
      console.error(error);
    } else {
      console.log({
        message: "请求失败",
        description: "请求失败，请检查网络是否已连接"
      });
      console.error(error);
    }
  }
  return Promise.reject(error);
};

export default function interceptors(axios) {
  // Add a request interceptor
  axios.interceptors.request.use(function(config) {
    // Do something before request is sent

    /*such as setting token header*/
    // config.headers.token = "xxx";

    return config;
  }, err);

  // Add a response interceptor
  axios.interceptors.response.use(function(response) {
    let { code, data, error } = response.data;
    if (code === 0) {
      return data;
    } else {
      console.error(`状态码异常： ${code}`);
      return Promise.reject(error || "未返回错误信息");
    }
  }, err);
}
