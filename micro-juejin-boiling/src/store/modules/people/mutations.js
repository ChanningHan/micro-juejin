import { SET_PEOPLE_LIST } from "@/store/modules/people/mutations-type";

const mutations = {
  [SET_PEOPLE_LIST]: (state, peopleList) => {
    state.peopleList = peopleList;
  }
};

export default mutations;
