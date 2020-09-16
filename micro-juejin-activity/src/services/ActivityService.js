import API from "@/apis";

export default class ActivityService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!ActivityService.instance) {
      ActivityService.instance = new ActivityService();
    }
    return ActivityService.instance;
  }

  getBannerList = async () => {
    const res = await API.activity.getBannerList();
    return res.list;
  };

  getActivityList = async () => {
    const res = await API.activity.getActivityList();
    return res.list;
  };
}
