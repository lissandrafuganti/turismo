<template>
  <div>
    <FiltroTabelaReservas />
    <q-table
      :data="registros"
      :columns="columns"
      separator="horizontal"
      class="no-shadow q-mt-md"
    ></q-table>
  </div>
</template>

<script>
import { Cookies } from 'quasar'
import FiltroTabelaReservas from './FiltroTabelaReservas'

export default {
  name: 'cTabelaReservas',
  components: { FiltroTabelaReservas },
  data () {
    return {
      registros: [],
      columns: [
        { name: 'hora', field: 'hora', label: 'Hora', align: 'center' },
        { name: 'vg', field: 'vg', label: 'VG', align: 'center' },
        { name: 'lot', field: 'lot', label: 'Lot', align: 'center' },
        { name: 'reserva', field: 'reserva', label: 'Reserva', align: 'center' },
        { name: 's', field: 's', label: 'S', align: 'center' },
        { name: 'turista', field: 'turista', label: 'Turista', align: 'left' },
        { name: 'agencia', field: 'agencia', label: 'Agência', align: 'left' },
        { name: 'pax', field: 'pax', label: 'Pax', align: 'center' },
        { name: 'chd', field: 'chd', label: 'Chd', align: 'center' },
        { name: 'crt', field: 'crt', label: 'Crt', align: 'center' },
        { name: 'alm', field: 'alm', label: 'Alm', align: 'center' },
        { name: 'pos', field: 'pos', label: 'Pos', align: 'center' },
        { name: 'trans', field: 'trans', label: 'Transporte', align: 'left' },
        { name: 'voucher', field: 'voucher', label: 'Voucher', align: 'left' },
        { name: 'guia', field: 'guia', label: 'Guia', align: 'left' }
      ]
    }
  },
  created () {
    this.buscaReservas()
  },
  methods: {
    buscaReservas () {
      const dados = {
        dados: {
          'head': {
            'servico': 'atrativos_atividades_lista',
            'chave': Cookies.get('authentication').chave
          },
          'data': {
            'cdgbtms_agencia': '',
            'cdgbtms_atrativo': '',
            'cdgbtms_utilizador': '',
            'so_ecommerce': '0'
          }
        }
      }

      console.log(dados)

      this.$axios.post('', dados).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
