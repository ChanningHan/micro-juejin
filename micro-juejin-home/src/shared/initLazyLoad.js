import Vue from "vue";
import VueLazyload from "vue-lazyload";

// eslint-disable-next-line no-unused-vars
import errorPng from "../assets/404-5.png";
import loading from "../assets/loading-4.gif";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorPng,
  loading: loading,
  attempt: 1
});
