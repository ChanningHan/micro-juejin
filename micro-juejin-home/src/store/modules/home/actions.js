import HomeService from "@/services/HomeService";
import { SET_ARTICLE_LIST } from "@/store/modules/home/mutations-type";

const homeService = HomeService.getInstance();

const actions = {
  getArticleList: async ({ commit }, limit) => {
    const res = await homeService.getArticleList(limit);
    commit(SET_ARTICLE_LIST, res);
  }
};

export default actions;
