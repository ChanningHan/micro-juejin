import API from "@/apis";

export default class HomeService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!HomeService.instance) {
      HomeService.instance = new HomeService();
      HomeService.instance.cursor = "0";
    }
    return HomeService.instance;
  }

  getArticleList = async num => {
    const res = await API.home.getArticleList(num, HomeService.instance.cursor);
    HomeService.instance.cursor = res.cursor;
    return res.list;
  };
}
