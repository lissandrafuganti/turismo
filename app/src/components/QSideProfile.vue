<template>
  <q-img
    class="absolute-top"
    src="https://images.hdqwalls.com/wallpapers/bthumb/material-design-grey-po.jpg"
    style="height: 150px"
  >
    <div class="absolute-bottom bg-transparent">
      <q-avatar
        size="56px"
        class="q-mb-sm"
      >
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <div class="text-weight-bold">{{usuario}}</div>
      <div>
        <q-btn
          dense
          flat
          color="red-9"
          label="Sair"
          no-caps=""
          icon="mdi-logout-variant"
          @click="logout"
        >

        </q-btn>
      </div>
    </div>
  </q-img>
</template>

<script>
import store from '../store/aboutUser'
export default {
  name: 'QSideProfile',
  data () {
    return {
      usuario: store.getters.about.nome
    }
  },
  methods: {
    logout () {
      this.$q.dialog({
        message: 'Encessar sessão?',
        ok: {
          label: 'Finalizar sessão',
          noCaps: true,
          glossy: true,
          dense: true,
          color: 'red-9',
          icon: 'mdi-logout-variant'
        },
        cancel: {
          label: 'Cancelar',
          noCaps: true,
          flat: true,
          dense: true,
          color: 'grey-9'
        }
      }).onOk(() => {
        document.cookie = 'authentication=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;'
        window.location.reload(true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
