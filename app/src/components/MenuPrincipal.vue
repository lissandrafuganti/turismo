<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :breakpoint="500"
    content-class="bg-indigo-10"
    :width="250"
  >
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px;"
      class="text-white"
    >
      <q-list>

        <q-item
          v-ripple
          clickable=""
        >
          <q-item-section avatar>
            <q-icon name="dashboard"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <!-- starting menu loop -->
        <q-expansion-item-menu
          v-for="(item, i) in menu"
          :key="i"
          :label="item.label"
          :icon="item.icon"
        >
          <q-menu-item
            :itens="item.submenus"
            slot="content"
          ></q-menu-item>
        </q-expansion-item-menu>

        <!-- end menu loop -->

        <q-item
          v-ripple
          clickable=""
        >
          <q-item-section avatar>
            <q-icon name="mdi-contact-mail"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Links úteis</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    <QSideProfile />
  </q-drawer>
</template>

<script>
import QSideProfile from '../components/QSideProfile'
import store from '../store/menuPrincipal'
import QExpansionItemMenu from '../components/QExpasionItemMenu'
import QMenuItem from '../components/QMenuItem'

export default {
  name: 'CMenuPrincipal',
  components: { QExpansionItemMenu, QMenuItem, QSideProfile },
  data () {
    return {
      drawer: this.$q.platform.is.desktop,
      menu: [
        { label: 'Cadastros', icon: 'mdi-account', submenus: [{ label: 'Contas', icon: 'mdi-folder-alert', url: '' }, { label: 'Tipo de Conta', icon: 'mdi-folder-swap', url: '' }, { label: 'Utilizadores', icon: 'mdi-account-supervisor-circle', url: '' }, { label: 'Empresa', icon: 'mdi-office-building', url: '' }] },
        { label: 'Financeiro', icon: 'mdi-cash-usd', submenus: [{ label: 'Tipo de Conta', icon: 'mdi-folder-alert', url: '' }, { label: 'Tipo de Documento', icon: 'mdi-file-alert', url: '' }, { label: 'Caixas/Bancos', icon: 'mdi-piggy-bank', url: '' }, { label: 'Contas Caixa/Banco', icon: 'mdi-bank-outline', url: '' }, { label: 'Modos de Pagamento', icon: 'mdi-cash-refund', url: '' }, { label: 'Tipo de Lançamento', icon: 'mdi-file-multiple', url: '' }, { label: 'Centros de Custo', icon: 'mdi-cash-marker', url: '' }, { label: 'Plano de Contas', icon: 'mdi-vector-ellipse', url: '', separator: true }, { label: 'Contas a pagar/receber', icon: 'mdi-cash-register', url: '' }, { label: 'Movimentação financeira', icon: 'mdi-folder-sync', url: '', separator: true }, { label: 'Detalhes das contas', icon: 'mdi-file-document-box-search', url: '' }, { label: 'Contas correntes', icon: 'mdi-format-rotate-90', url: '' }, { label: 'Importar', icon: 'mdi-cloud-upload', url: '', separator: true }, { label: 'Relatórios', icon: 'mdi-chart-areaspline', url: '' }] },
        { label: 'Passeios', icon: 'mdi-bike', submenus: [{ label: 'Atrativos', icon: 'mdi-star-face', url: '' }, { label: 'Atividades', icon: 'mdi-map-marker-question', url: '' }, { label: 'Agências', icon: 'mdi-briefcase-account', url: '' }, { label: 'Grupos', icon: 'mdi-group', url: '' }, { label: 'Guias', icon: 'mdi-location-enter', url: '' }, { label: 'Mensagens', icon: 'mdi-message-bulleted', url: '', separator: true }, { label: 'Reservas', icon: 'mdi-calendar-clock', url: '' }, { label: 'Histórico', icon: 'mdi-history', url: '' }, { label: 'Vouchers', icon: 'mdi-ticket-account', url: '', separator: true }, { label: 'Reservas recorrentes', icon: 'mdi-axis-y-rotate-clockwise', url: '' }, { label: 'Relatórios', icon: 'mdi-file-chart', url: '' }, { label: 'Gráficos', icon: 'mdi-chart-bar', url: '' }] },
        { label: 'Parceria Comercial', icon: 'mdi-hand', submenus: [{ label: 'Convites recebidos', icon: 'mdi-calendar-heart', url: '' }, { label: 'Enviar convite', icon: 'mdi-cube-send', url: '' }] },
        { label: 'Configurações', icon: 'mdi-settings', submenus: [{ label: 'Atalhos', icon: 'mdi-swap-horizontal-circle', url: '' }, { label: 'Parâmetros empresa', icon: 'mdi-settings', url: '' }, { label: 'Permissões', icon: 'mdi-shield-lock', url: '' }, { label: 'Personalização', icon: 'mdi-select-color', url: '' }] }
      ]
    }
  },
  computed: {
    getStatusMenu () {
      const status = store.getters.getMenu
      return status
    }
  },
  watch: {
    getStatusMenu: function (newValue, oldValue) {
      this.drawer = newValue
    },
    drawer: function (newValue, oldValue) {
      store.commit('toggleMenu', this.drawer)
    }
  }
}
</script>
