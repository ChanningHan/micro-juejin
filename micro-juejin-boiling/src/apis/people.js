import http from "@/shared/http";

const people = {
  // 获取人员列表
  getPeopleList: () => http.get("/people/list")
};

export default people;
