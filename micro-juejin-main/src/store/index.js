import Vue from "vue";
import Vuex from "vuex";

import peopleStore from "@/store/modules/people";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { isLoading: false },
  mutations: {
    loadingToggle: (state, loading) => {
      state.isLoading = loading;
      console.log("loadingToggle~~~~~~~~~~~~~~~~~~",loading);
    }
  },
  actions: {},
  modules: { people: peopleStore }
});
