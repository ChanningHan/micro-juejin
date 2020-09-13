import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", (val, formatStr) => {
    return val ? moment(new Date(val)).format(formatStr) : "--";
});

Vue.filter('toSmallAvatar', val => {
    return val.replace(/\?.*/g, '?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1')
})


Vue.filter('pastTime', val => {
    return ~~((Date.now() - val * 1000) / 3600000) + '小时前'
})