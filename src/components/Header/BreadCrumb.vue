<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
      <span class="breadcrumb-text">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import { watchEffect, ref } from "vue";

import type { RouteRecordNormalized } from 'vue-router';

const route = useRoute()

const breadcrumbList = ref<RouteRecordNormalized[]>([])

watchEffect(() => {
  breadcrumbList.value = route.matched.filter(item => item.meta && item.meta.title);
})
</script>

<style scoped>
.breadcrumb-text {
  font-size: 16px;
}
</style>