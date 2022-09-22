import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import Home from "@/views/index.vue";
import Login from "@/views/login.vue";

import business from './module/business';
import system from './module/system';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: App,
    redirect: '/business/details/water',
    children: [
      {
        path: "business",
        name: "business",
        component: Home,
        meta: {
          title: '业务管理'
        },
        children: business
      },
      {
        path: "system",
        name: "system",
        component: Home,
        meta: {
          title: '系统管理'
        },
        children: system,
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
