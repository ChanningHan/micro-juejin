import http from "@/shared/http";

const activity = {
  // 获取轮播图列表
  getBannerList: () => http.get("/activity/bannerList"),

  // 获取活动列表
  getActivityList: () => http.get("/activity/ActivityList")
};

export default activity;
