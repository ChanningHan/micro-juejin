import http from "@/shared/http";

const home = {
  // 获取文章列表
  getArticleList: (limit, cursor) =>
    http.get(`/home/articleList?limit=${limit || 15}&cursor=${cursor}`)
};

export default home;
