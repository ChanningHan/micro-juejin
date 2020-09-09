# vue-micro-FE-main


## 注册微应用
在 `src/subRegister.js` 中：  <br/>
添加一个或多个微应用的描述对象到变量名为`apps`的列表中 <br/>
比如 :
```
{
    name: "micro-sub-3",
    entry: "//localhost:8063",
    container: "#subApp",
    activeRule: "/micro-sub-3",
    $meta: {
      title: "微应用3"
    }
}
```

## (register micro-apps)
in `src/subRegister.js`：  <br/>

Append the objects about the micro-apps to the `apps`.  <br/>
such as :
```
{
    name: "micro-sub-3",
    entry: "//localhost:8063",
    container: "#subApp",
    activeRule: "/micro-sub-3",
    $meta: {
      title: "微应用3"
    }
}
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


