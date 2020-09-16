import state from "@/store/modules/activity/state";
import mutations from "@/store/modules/activity/mutations";
import actions from "@/store/modules/activity/actions";
import getters from "@/store/modules/activity/getters";

const activityStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default activityStore;
