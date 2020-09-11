import http from "@/shared/http";

const home = {
  // 获取文章列表
  getArticleList: num => http.get(`/home/articleList?num=${num || 15}`)
};

export default home;
