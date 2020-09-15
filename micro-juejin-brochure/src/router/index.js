import Vue from "vue";
import VueRouter from "vue-router";
import Brochure from "@views/Brochure.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Brochure",
    component: Brochure
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
