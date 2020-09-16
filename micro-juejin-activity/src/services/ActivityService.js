import API from "@/apis";

export default class ActivityService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!ActivityService.instance) {
      ActivityService.instance = new ActivityService();
      ActivityService.instance.cursor = "0";
      ActivityService.instance.has_more = true;
      ActivityService.instance.city = void 0;
    }
    return ActivityService.instance;
  }

  getMonthStat = async from_date => {
    const res = await API.activity.getMonthStat(from_date);
    return res.list;
  };

  getBannerList = async () => {
    const res = await API.activity.getBannerList();
    return res.list;
  };

  getActivityList = async city => {
    if (city) {
      ActivityService.instance.city = city;
      ActivityService.instance.has_more = true;
      ActivityService.instance.cursor = "0";
    } else if (!ActivityService.instance.has_more) {
      return false;
    }
    const res = await API.activity.getActivityList(
      20,
      ActivityService.instance.cursor,
      ActivityService.instance.city
    );
    ActivityService.instance.cursor = res.cursor;
    ActivityService.instance.has_more = res.has_more;
    return res.list;
  };
}
