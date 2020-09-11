import Vue from "vue";
import Vuex from "vuex";

import peopleStore from "@/store/modules/people";
import homeStore from "@/store/modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { home: homeStore, people: peopleStore }
});
