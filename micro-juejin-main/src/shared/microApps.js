/*
 *微应用List
 *
 * @param {string} name  必选，微应用的名称，微应用之间必须确保唯一, 如果是channing-cli创建的微应用，name要与微应用的package.json中的name相一致
 * @param {string | { scripts?: string[]; styles?: string[]; html?: string }} entry  必选，微应用的入口地址
 * @param {string | HTMLElement} container  必选，微应用的容器节点的选择器或者 Element 实例
 * @param {string | (location: Location) => boolean | Array<string | (location: Location) => boolean>} activeRule 必选，微应用的激活规则, 用于匹配微应用的URL
 *          * 支持直接配置字符串或字符串数组，如 activeRule: '/app1' 或 activeRule: ['/app1', '/app2']，当配置为字符串时会直接跟 url 中的路径部分做前缀匹配，匹配成功表明当前应用会被激活。
 *          * 支持配置一个 active function 函数或一组 active function。函数会传入当前 location 作为参数，函数返回 true 时表明当前微应用会被激活。如 location => location.pathname.startsWith('/app1')。
 *
 *
 * @$meta 可选，不是注册微应用必须的，是我在这个主应用中为了给Header的菜单项提供title而添加的，为了区别这是一个私有参数以及避免冲突在前面加了'$'
 *
 * */
const apps = [
  {
    name: "micro-juejin-home",
    entry: "//localhost:8071",
    container: "#subApp",
    activeRule: "/micro-juejin-home",
    $meta: {
      title: "首页"
    }
  },
  {
    name: "micro-juejin-boiling",
    entry: "//localhost:8072",
    container: "#subApp",
    activeRule: "/micro-juejin-boiling",
    $meta: {
      title: "沸点"
    }
  },
  {
    name: "micro-juejin-topic",
    entry: "//localhost:8073",
    container: "#subApp",
    activeRule: "/micro-juejin-topic",
    $meta: {
      title: "话题"
    }
  },
  {
    name: "micro-juejin-brochure",
    entry: "//localhost:8074",
    container: "#subApp",
    activeRule: "/micro-juejin-brochure",
    $meta: {
      title: "小册"
    }
  },
  {
    name: "micro-juejin-activity",
    entry: "//localhost:8075",
    container: "#subApp",
    activeRule: "/micro-juejin-activity",
    $meta: {
      title: "活动"
    }
  }
];

module.exports = apps;
