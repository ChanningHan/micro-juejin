import { SET_BOILING_LIST } from "@/store/modules/boiling/mutations-type";

const mutations = {
  [SET_BOILING_LIST]: (state, boilingList) => {
    state.boilingList = state.boilingList.concat(boilingList);
  }
};

export default mutations;
