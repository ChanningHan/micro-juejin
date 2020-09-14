import state from "@/store/modules/boiling/state";
import mutations from "@/store/modules/boiling/mutations";
import actions from "@/store/modules/boiling/actions";
import getters from "@/store/modules/boiling/getters";

const boilingStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default boilingStore;
