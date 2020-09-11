import HomeService from "@/services/HomeService";
import { SET_ARTICLE_LIST } from "@/store/modules/home/mutations-type";

const homeService = HomeService.getInstance();

const actions = {
  getArticleList: async ({ commit }, num) => {
    const res = await homeService.getArticleList(num);
    commit(SET_ARTICLE_LIST, res);
  }
};

export default actions;
