<template>
  <div class="user-info">
    <div class="user-icon">
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        alt="用户头像" />
    </div>
    <span class="user-name">张天天</span>
    <el-popover placement="bottom" :width="100" trigger="hover">
      <template #reference>
        <span class="user-tools">
          <el-icon style="vertical-align: middle">
            <CaretBottom />
          </el-icon>
        </span>
      </template>
      <ul>
        <li class="tools-item">退出系统</li>
        <li class="tools-item">修改密码</li>
      </ul>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: row;
  height: 30px;
  line-height: 30px;
}

.user-icon {
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
}

.user-name {
  margin-left: 10px;
  font-size: 16px;
}

.user-tools {
  width: 30px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.tools-item {
  padding: 4px 0;
  cursor: pointer;
}
</style>