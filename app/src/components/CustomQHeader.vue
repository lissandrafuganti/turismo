<template>
  <q-header
    elevated
    class="bg-indigo-10"
  >
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleMenu"
        icon="menu"
        aria-label="Menu"
      />

      <q-toolbar-title>
        BTMS Sistema
      </q-toolbar-title>

      <!-- <div>Quasar v{{ $q.version }}</div> -->
    </q-toolbar>
  </q-header>
</template>

<script>
import store from '../store/menuPrincipal'
import { Cookies } from 'quasar'
export default {
  name: 'CQHeader',
  data () {
    return {
      empresa: Cookies.get('authentication')
    }
  },
  methods: {
    toggleMenu () {
      store.commit('toggleMenu', !store.getters.getMenu)
    }
  }
}
</script>
