<template>
  <div class="navBar clearfix"
      :class="{'collapse': sideBar.isCollapse}">
    <div class="left-wrap">
      <div class="toggle-icon" @click="handleIconClick">
        <i class="el-icon-s-unfold" v-show="!isFold"></i>
        <i class="el-icon-s-fold" v-show="isFold"></i>
      </div>
      <!-- 面包屑 -->
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right-wrrap">

    </div>
    
    <!-- <div class="title"><span>NIE</span> ADMIN</div> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      isFold: false,
      flodIcon: 'flod-icon',
      unfoldIcon: 'unfold-icon'
    }
  },
  computed: {
    ...mapGetters([
      'sideBar'
    ])
  },
  methods: {
    handleIconClick() {
      this.isFold = !this.isFold;
      this.$store.commit('toggleSideBar');
    }
  }
}
</script>

<style lang="scss">
.navBar {
  position: fixed;
  top: 0;
  right: 0;
  left: 200px;
  box-shadow: 2px 0 3px #ddd;
  padding: 10px 0;
  transition: left .3s ease-in-out;
}
.collapse {
  left: 65px;
}
.left-wrap {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle-icon {
  padding: 0 10px;
  font-size: 22px;
}
.title {
  font-size: 26px;
  span {
    color: #db77fc;
  }
}
.flod-icon {
  transform: rotate(-90deg);
  transition: transform 2s;
}
.unfold-icon {
  transform: rotate(90deg);
  transition: transform 2s;
}
</style>