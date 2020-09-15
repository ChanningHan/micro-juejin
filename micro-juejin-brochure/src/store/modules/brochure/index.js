import state from "@/store/modules/brochure/state";
import mutations from "@/store/modules/brochure/mutations";
import actions from "@/store/modules/brochure/actions";
import getters from "@/store/modules/brochure/getters";

const brochureStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default brochureStore;
