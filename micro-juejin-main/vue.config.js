const CompressionWebpackPlugin = require("compression-webpack-plugin");
const proxy = require("./vue.config.proxy");
const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  /*antd 主题定制*/
  css: {
    loaderOptions: {
      less: {
        // 注意用lessOptions包裹，不然识别不了，被坑了一手
        lessOptions: {
          modifyVars: {
            /* less 变量覆盖，用于自定义 ant design 主题 */
            "primary-color": "#007FFF",
            "link-color": "#007FFF",
            // "primary-color": "#673AB7",
            // "link-color": "#673AB7",
            "border-radius-base": "4px"
          },
          javascriptEnabled: true
        }
      }
    }
  },

  lintOnSave: process.env.NODE_ENV !== "production",
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: false,
  runtimeCompiler: false,

  devServer: {
    proxy,
    port: 8088
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      distCompression(config);

      imageOptimize(config);
    }

    // 除非在IDE中配置对应的配置文件，否则虽然路径有效，但在coding时IDE会识别不了，不方便文件间的跳转操作。
    // 所以用 '@/'的形式就已经很方便了，下面的可以不用
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@apis", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layouts", resolve("src/layouts"))
      .set("@services", resolve("src/services"));
  },

  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      // 去掉本地化文件减少moment打包体积
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
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
