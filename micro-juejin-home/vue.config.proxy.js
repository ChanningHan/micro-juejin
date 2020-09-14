const packageName = require("./package.json").name;

const prefix = "/api/" + packageName;
const prefixRegExp = "^" + prefix;

const proxy = {
  [prefix]: {
    target: "http://localhost:3000",
    ws: false,
    changeOrigin: false,
    pathRewrite: {
      [prefixRegExp]: "/api"
    }
  }
};
module.exports = proxy;
