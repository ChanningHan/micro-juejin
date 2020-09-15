import BrochureService from "@services/BrochureService";
import { SET_PEOPLE_LIST } from "@/store/modules/people/mutations-type";

const peopleService = BrochureService.getInstance();

const actions = {
  getPeopleList: async ({ commit }) => {
    const res = await peopleService.getPeopleList();
    commit(SET_PEOPLE_LIST, res);
  }
};

export default actions;
