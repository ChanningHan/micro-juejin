import { SET_BROCHURE_LIST } from "@/store/modules/brochure/mutations-type";

const mutations = {
  [SET_BROCHURE_LIST]: (state, brochureList) => {
    if (brochureList) {
      state.brochureList = state.brochureList.concat(brochureList);
    } else {
      state.isOver = true;
    }
  }
};

export default mutations;
