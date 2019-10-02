import Vue from 'vue'
import Vuex from 'vuex'
import { Cookies } from 'quasar'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: Cookies.get('authentication')
  },
  mutations: {
    changeInfo: function (state, payload) {
      state.user = [...payload]
    }
  },
  getters: {
    about: function (state) {
      const info = state.user
      return info
    }
  }
})

export default store
