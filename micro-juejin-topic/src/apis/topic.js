import http from "@/shared/http";

const topic = {
  // 获取话题列表
  getTopicList: () => http.get("/topic/list")
};

export default topic;
