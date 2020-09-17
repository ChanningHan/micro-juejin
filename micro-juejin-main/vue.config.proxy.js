const apps = require("./src/shared/microApps");

const proxy = {};

const baseConfig = {
  ws: false,
  changeOrigin: true
};

const proxyConfigs = apps.map(app => {
  return {
    target: "http:" + app.entry,
    ...baseConfig
  };
});

proxyConfigs.forEach((config, index) => {
  // const key = "/api/api-" + apps[index].name + "-api";
  const key = "/api/" + apps[index].name;
  proxy[key] = config;
});


/*主应用的代理*/
proxy["/api"] = {
  ...baseConfig,
  target: process.env.BACKEND || "http://localhost:3001"
};

module.exports = proxy;
// module.exports = {
//   "/api/sub_1": {
//     target: "http://192.168.2.29:8061",
//     ws: false,
//     changeOrigin: true
//   },
//   "/api": {
//     target: process.env.BACKEND || "http://localhost:3001",
//     changeOrigin: true,
//     ws: false
//     // pathRewrite: {
//     //   "^/api": "/api"
//     // }
//   }
// };
