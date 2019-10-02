import Vue from 'vue'
import Vuex from 'vuex'
import { Platform } from 'quasar'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: Platform.is.desktop
  },
  mutations: {
    toggleMenu (state, payload) {
      const status = state.menu = payload
      return status
    }
  },
  getters: {
    getMenu (state) {
      return state.menu
    }
  }
})

export default store
