import http from "@/shared/http";

const activity = {
  // 获取轮播图列表
  getBannerList: () => http.get("/activity/bannerList"),

  // 获取月事件列表
  getMonthStat: from_date =>
    http.get(`/activity/monthStat?from_date=${from_date}`),

  // 获取活动列表
  getActivityList: () => http.get("/activity/ActivityList")
};

export default activity;
