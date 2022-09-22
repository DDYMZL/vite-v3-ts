<template>
  <el-menu
    active-text-color="#f4f4f5"
    background-color="rgb(48, 65, 86)"
    class="sidebar"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <SidebarItem
      v-for="menu in menuData"
      :key="`${menu.path}-${menu.name}`"
      :menu="menu"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";
import  type {PropType} from "vue";
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

const props = defineProps({
  menuData: {
    type: Array as PropType<IMenuData[]>,
    default: () => [],
  },
});

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style scoped>
.sidebar {
  width: 200px;
  min-width: 200px;
}
</style>
