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

const props = defineProps({
  menuData: {
    type: Array,
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
