import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./router";
import store from "@/store";
import "@/filter";
import "@/shared/initLazyLoad";

import "@/shared/registAntd";

const packageName = require("../package.json").name;

Vue.config.productionTip = false;

let router = null;
let instance = null;

function VueRender(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `/${packageName}` : "",
    mode: "history",
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}

/*如果不作为微应用加载则直接调用VueRender*/
if (!window.__POWERED_BY_QIANKUN__) {
  VueRender();
}

/*
 * 微应用必须暴露加载的生命周期hooks
 *
 * */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

/*监听全局状态变化
 * onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
 *
 * callback(state,prev)
 * @params {Object} state //变更后的全局状态对象
 * @params {Object} prev  //变更前的全局状态对象
 *
 * 这里用export暴露给子组件调用，下同
 * */
export let onGlobalStateChange;

/*改变全局状态
 * setGlobalState: (state: Record<string, any>) => boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
 * */
export let setGlobalState;

export async function mount(props) {
  onGlobalStateChange = props.onGlobalStateChange;
  setGlobalState = props.setGlobalState;

  console.log("[vue] props from main framework", props);
  VueRender(props);

  /*全局监听*/
  // onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev);
  // });

  //这里加载完毕后可以改变全局的状态通知主应用让其Loading组件消失
  setGlobalState({ isLoadingMicro: false });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
  //这里微应用注销后通知主应用让其Loading组件出现
  setGlobalState({ isLoadingMicro: true });
}
