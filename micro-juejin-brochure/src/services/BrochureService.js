import API from "@/apis";

export default class BrochureService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!BrochureService.instance) {
      BrochureService.instance = new BrochureService();
      BrochureService.instance.cursor = "0";
    }
    return BrochureService.instance;
  }

  getBrochureList = async limit => {
    console.log("has_more?");
    console.log(BrochureService.instance.has_more);
    const has_more = BrochureService.instance.has_more;
    if (has_more !== undefined && !has_more) {
      return false;
    }
    const res = await API.brochure.getBrochureList(
      limit,
      BrochureService.instance.cursor
    );
    BrochureService.instance.cursor = res.cursor;
    BrochureService.instance.has_more = res.has_more;
    return res.brochureList;
  };
}
