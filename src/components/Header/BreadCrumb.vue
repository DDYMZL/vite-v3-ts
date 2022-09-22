<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }"><span class="breadcrumb-text">统筹管理</span></el-breadcrumb-item>
    <el-breadcrumb-item><span class="breadcrumb-text">业务管理</span></el-breadcrumb-item>
    <el-breadcrumb-item><span class="breadcrumb-text">供水</span></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped>
.breadcrumb-text {
  font-size: 16px;
}
</style>