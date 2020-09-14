import Vue from "vue";
import VueRouter from "vue-router";
import Topic from "@views/Topic.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Topic",
    component: Topic
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
