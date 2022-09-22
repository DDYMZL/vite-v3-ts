<template>
  <div class="app-wrapper">
    <Sidebar :menu-data="menuData" />
    <div class="main-container">
      <Header />
      <div class="main-body">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar/index.vue";
import Header from "@/components/Header/index.vue";
import { ref } from "vue";

interface IMeta {
  title: string;
  icon: null;
  roles: null;
}

interface IMenuData {
  path: string;
  name: string;
  meta: IMeta;
  redirect: string | null;
  isLayout: string | null;
  component: string | null;
  urlType: number;
  children: IMenuData[];
}

const menuData = ref<IMenuData[]>([]);
menuData.value = [
  {
    path: "/buss-management",
    name: "业务管理",
    meta: {
      title: "统筹管理",
      icon: null,
      roles: null,
    },
    redirect: null,
    isLayout: null,
    component: null,
    urlType: 2,
    children: [
      {
        path: "/buss-management/details",
        name: "业务详情",
        meta: {
          title: "业务看板",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [
          {
            path: "/buss-management/details/water",
            name: "供水",
            meta: {
              title: "供水",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
          {
            path: "/buss-management/details/drain",
            name: "排水",
            meta: {
              title: "排水",
              icon: null,
              roles: null,
            },
            redirect: null,
            isLayout: null,
            component: null,
            urlType: 2,
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: "/system",
    name: "系统管理",
    meta: {
      title: "系统管理",
      icon: null,
      roles: null,
    },
    redirect: null,
    isLayout: null,
    component: null,
    urlType: 2,
    children: [
      {
        path: "/system/staff",
        name: "人员管理",
        meta: {
          title: "人员管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [],
      },
      {
        path: "/system/role",
        name: "角色管理",
        meta: {
          title: "角色管理",
          icon: null,
          roles: null,
        },
        redirect: null,
        isLayout: null,
        component: null,
        urlType: 2,
        children: [],
      },
    ],
  },
];
</script>

<style lnag="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.main-container{
  flex: 1;
}
</style>
