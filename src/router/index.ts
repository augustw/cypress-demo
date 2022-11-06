import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import StartsidaView from "../views/StartsidaView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/startsida",
    name: "StartsidaView",
    component: StartsidaView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
