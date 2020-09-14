import BoilingService from "@/services/BoilingService";
import { SET_BOILING_LIST } from "@/store/modules/boiling/mutations-type";

const boilingService = BoilingService.getInstance();

const actions = {
  getBoilingList: async ({ commit }, limit) => {
    const res = await boilingService.getBoilingList(limit);
    commit(SET_BOILING_LIST, res);
    return;
  }
};

export default actions;
