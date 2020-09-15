import Vue from "vue";
import Vuex from "vuex";

import peopleStore from "@/store/modules/people";
import brochureStore from "@/store/modules/brochure";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { people: peopleStore, brochure: brochureStore }
});
