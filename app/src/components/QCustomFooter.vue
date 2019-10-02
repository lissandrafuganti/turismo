<template>
  <q-footer
    reveal
    class="bg-white text-grey-8"
  >
    <q-toolbar class="text-size-15">
      <q-toolbar-title class="text-size-15">{{empresa}} | {{data}} - {{hora}}</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import store from '../store/aboutUser'
export default {
  name: 'QCustomFooter',
  data () {
    return {
      empresa: store.getters.about.empresa,
      data: null,
      hora: null
    }
  },
  created () {
    this.atualizaHora()
  },
  methods: {
    atualizaHora () {
      let ref = new Date()
      this.data = ref.toLocaleDateString('pt-br', { timeZone: 'America/Sao_Paulo' }).split('T')[0]
      this.hora = ref.toLocaleTimeString('pt-br', { timeZone: 'America/Sao_Paulo' }).split('T')[0]

      setInterval(() => {
        ref = new Date()
        this.data = ref.toLocaleDateString('pt-br', { timeZone: 'America/Sao_Paulo' }).split('T')[0]
        this.hora = ref.toLocaleTimeString('pt-br', { timeZone: 'America/Sao_Paulo' }).split('T')[0]
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.text-size-15.q-toolbar__title {
  font-size: 13px;
}
</style>
