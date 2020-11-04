<template>
  <div class="nie-admin">
    <Header />
    <SideBar />
    <div class="content"
        :class="{'collapse': sideBar.isCollapse}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['sideBar']),
  },
  components: {
    Header,
    SideBar
  },
}
</script>

<style lang="scss">
.content {
  margin-top: 47px;
  margin-left: 200px;
  transition: margin-left .3s ease-in-out;
  &.collapse {
    margin-left: 65px;
  }
}
</style>