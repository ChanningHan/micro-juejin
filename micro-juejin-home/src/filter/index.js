import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", (val, formatStr) => {
  return val ? moment(new Date(val)).format(formatStr) : "--";
});
