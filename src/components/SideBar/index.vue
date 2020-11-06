<template>
  <div class="side-bar">
    <el-menu class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="1"
      :collapse="sideBar.isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-coffee"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-sunny"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-sunrise-1"></i>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-sunrise"></i>
          <span>角色管理</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-sunrise"></i>
          <span>菜单管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'SideBar',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sideBar'
    ])
  },
}
</script>

<style>
.side-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>