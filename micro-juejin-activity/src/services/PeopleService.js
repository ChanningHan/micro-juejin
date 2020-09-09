import API from "@/apis";

export default class PeopleService {
  static instance;

  constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance() {
    if (!PeopleService.instance) {
      PeopleService.instance = new PeopleService();
    }
    return PeopleService.instance;
  }

  getPeopleList = async () => {
    const res = await API.people.getPeopleList();
    return res.list;
  };
}
