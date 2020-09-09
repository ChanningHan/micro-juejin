import state from "@/store/modules/people/state";
import mutations from "@/store/modules/people/mutations";
import actions from "@/store/modules/people/actions";
import getters from "@/store/modules/people/getters";

const peopleStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default peopleStore;
