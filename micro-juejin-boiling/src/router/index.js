import Vue from "vue";
import VueRouter from "vue-router";
import Boiling from "@views/Boiling";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Boiling",
    component: Boiling
  },
  {
    path: "/people",
    name: "People",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "people" */ "../views/People.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
