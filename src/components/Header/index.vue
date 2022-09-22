<template>
  <header class="main-header">
    <BreadCrumb />
    <UserInfo />
  </header>
</template>

<script lang="ts" setup>
import BreadCrumb from './BreadCrumb.vue'
import UserInfo from './UserInfo.vue'
</script>

<style scoped>
.main-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgb(6 31 55 / 8%);
}
</style>
