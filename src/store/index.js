import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    sideBar: {
      isCollapse: false
    }
  },
  getters: {
    sideBar: state => state.sideBar
  },
  mutations: {
    toggleSideBar(state) {
      state.sideBar.isCollapse = !state.sideBar.isCollapse;
    }
  },
  actions: {
  },
  modules: {
  }
});

export default store
