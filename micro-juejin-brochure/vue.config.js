const CompressionWebpackPlugin = require("compression-webpack-plugin");
const proxy = require("./vue.config.proxy");
const webpack = require("webpack");
const path = require("path");

const packageName = require("./package.json").name;

const port = 8074;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  publicPath: "/",
  outputDir: "dist",
  filenameHashing: true,
  productionSourceMap: false,
  runtimeCompiler: false,

  devServer: {
    proxy,
    port,
    disableHostCheck: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      distCompression(config);

      imageOptimize(config);
    }

    // 除非在IDE中配置对应的配置文件，否则虽然路径有效，但在coding时IDE会识别不了，不方便文件间的跳转操作。
    // 所以用 '@/'的形式就已经很方便了，下面的可以不用
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@apis", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layouts", resolve("src/layouts"))
      .set("@services", resolve("src/services"));
  },

  configureWebpack: {
    name: packageName,
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      // 去掉本地化文件减少moment打包体积
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        __CHANNING_package_name__: JSON.stringify(packageName)
      })
    ],
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `${packageName}-[name]`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_project 即可
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
};

function distCompression(config) {
  config.plugin("compression").use(CompressionWebpackPlugin, [
    {
      test: /\.js$|\.css$/,
      algorithm: "gzip",
      threshold: 1024 * 10
    }
  ]);
}

function imageOptimize(config) {
  config.module
    .rule("images")
    .use("image-webpack-loader")
    .loader("image-webpack-loader")
    .tap(() => ({
      mozjpeg: {
        progressive: true,
        quality: 65
      },
      optipng: {
        enabled: true
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4
      },
      gifsicle: {
        interlaced: false
      }
    }));
}
