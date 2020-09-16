import Vue from "vue";
import moment from "moment";
moment.locale("zh_CN");

Vue.filter("formatDate", (val, formatStr) => {
  return val ? moment(new Date(val)).format(formatStr) : "--";
});

Vue.filter("formatStartDate", val => {
  return moment(val * 1000).format("MM-DD ddd");
});
