import http from "@/shared/http";

const boiling = {
  // 获取沸点列表
  getBoilingList: (limit, cursor) =>
    http.get(`/boiling/boilingList?limit=${limit || 15}&cursor=${cursor}`)
};

export default boiling;
