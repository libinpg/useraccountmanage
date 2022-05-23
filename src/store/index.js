import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  getters: {
    isLogin() {
      if(localStorage.length == 2) {
        return true
      }else{
        return false
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
