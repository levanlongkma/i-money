import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import(/* webpackChunkName: "register" */ "../views/auth/Register"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
