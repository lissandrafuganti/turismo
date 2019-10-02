<template>
  <q-layout view="hHh Lpr lFf">

    <CustomQHeader />

    <MenuPrincipal />

    <q-page-container>
      <router-view />
    </q-page-container>

    <QCustomFooter />

  </q-layout>
</template>

<script>
import MenuPrincipal from '../components/MenuPrincipal'
import CustomQHeader from '../components/CustomQHeader'
import QCustomFooter from '../components/QCustomFooter'

export default {
  name: 'MyLayout',
  components: { MenuPrincipal, CustomQHeader, QCustomFooter },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
