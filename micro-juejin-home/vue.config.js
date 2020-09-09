const CompressionWebpackPlugin = require("compression-webpack-plugin");
const proxy = require("./vue.config.proxy");
const webpack = require("webpack");
const path = require("path");

const packageName = require("./package.json").name;

const port = 8071;

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

  /*引入scss全局变量*/
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/shared/variables.scss")]
    }
  },

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: `@import "~@/shared/variables.scss"`
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/shared/variables.scss";`
      },
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
