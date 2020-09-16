import {
  SET_BANNER_LIST,
  SET_ACTIVITY_LIST
} from "@/store/modules/activity/mutations-type";

const mutations = {
  [SET_BANNER_LIST]: (state, bannerList) => {
    state.bannerList = bannerList;
  },
  [SET_ACTIVITY_LIST]: (state, activityList) => {
    state.activityList = activityList;
  }
};

export default mutations;
