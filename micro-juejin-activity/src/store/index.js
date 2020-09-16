import Vue from "vue";
import Vuex from "vuex";

import activityStore from "@/store/modules/activity";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { activity: activityStore }
});
