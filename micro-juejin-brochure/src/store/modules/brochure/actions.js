import BrochureService from "@services/BrochureService";
import { SET_BROCHURE_LIST } from "@/store/modules/brochure/mutations-type";

const brochureService = BrochureService.getInstance();

const actions = {
  getBrochureList: async ({ commit }, limit) => {
    const res = await brochureService.getBrochureList(limit);
    commit(SET_BROCHURE_LIST, res);
  }
};

export default actions;
