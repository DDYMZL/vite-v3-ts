import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import Home from "@/views/index.vue";
import Login from "@/views/login.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
