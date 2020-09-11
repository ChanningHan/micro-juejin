import { SET_ARTICLE_LIST } from "@/store/modules/home/mutations-type";

const mutations = {
  [SET_ARTICLE_LIST]: (state, articleList) => {
    // state.articleList = state.articleList.concat(articleList);
    state.articleList = state.articleList.concat(articleList);
  }
};

export default mutations;
