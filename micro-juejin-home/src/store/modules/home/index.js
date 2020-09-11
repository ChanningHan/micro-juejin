import state from "@/store/modules/home/state";
import mutations from "@/store/modules/home/mutations";
import actions from "@/store/modules/home/actions";
import getters from "@/store/modules/home/getters";

const homeStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default homeStore;
