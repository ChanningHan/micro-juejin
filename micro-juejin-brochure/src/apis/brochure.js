import http from "@/shared/http";

const brochure = {
  // 获取小册列表
  getBrochureList: (limit, cursor) =>
    http.get(`/brochure/list?limit=${limit}&cursor=${cursor}`)
};

export default brochure;
