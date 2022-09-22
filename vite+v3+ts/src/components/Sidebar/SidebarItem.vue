<template>
  <div v-if="!menu.hidden">
    <template v-if="menu.children && menu.children.length">
      <el-sub-menu :index="`${menu.path}-${menu.name}`">
        <template #title>
          <span>{{ menu.name }}</span>
        </template>
        <SidebarItem
          v-for="item in menu.children || []"
          :key="`${item.path}-${item.name}`"
          :menu="item"
        />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="`${menu.path}-${menu.name}`">
        <span>{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup name="SidebarItem">
const props = defineProps({
  menu: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
