import Vue from "vue";
import VueRouter from "vue-router";

import demoRouters from "./modules/demo";

Vue.use(VueRouter);

const routes = [...demoRouters];

const router = new VueRouter({
  mode: "history",
  base: "./",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (to.meta.requiresAuth && !token) {
    next("login");
  } else {
    next();
  }
});

export default router;
