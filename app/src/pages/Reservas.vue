<template>
  <template-base :labels="labels">
    <div
      class="row"
      slot="content"
    >
      <div class="col">
        <cTabelaReservas />
      </div>
    </div>
  </template-base>
</template>

<script>
import cTabelaReservas from '../components/TabelaReservas'
export default {
  name: 'PReservas',
  components: { cTabelaReservas },
  data () {
    return {
      labels: [
        { label: 'Reservas', url: 'RouteReservas' }
      ]
    }
  }
}
</script>
