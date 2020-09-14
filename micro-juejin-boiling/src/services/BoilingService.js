import API from "@/apis";

export default class BoilingService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!BoilingService.instance) {
      BoilingService.instance = new BoilingService();
      BoilingService.instance.cursor = "0";
    }
    return BoilingService.instance;
  }

  getBoilingList = async num => {
    const res = await API.boiling.getBoilingList(
      num,
      BoilingService.instance.cursor
    );
    BoilingService.instance.cursor = res.cursor;
    return res.list;
  };
}
