<template>
  <q-form>
    <fieldset class="q-pa-sm">
      <div class="row q-col-gutter-xs">

        <div class="col-12 col-md-5 q-col-gutter-xs">
          <div class="row q-col-gutter-xs">
            <div class="col-12 col-md-6">
              <QSelectAtrativos />
            </div>
            <div class="col-12 col-md-6">
              <QSelectAgencias />
            </div>
          </div>
          <div class="row q-col-gutter-xs">
            <div class="col-12 col-md-6">
              <QSelectAtividades />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                dense
                outlined
                color="indigo-9"
                label="Nome"
                v-model="nome"
              ></q-input>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-2 q-gutter-xs">

          <div class="row">
            <div class="col">
              <QBtnAuxiliar />
            </div>
            <div class="col text-right">
              <q-badge
                color="deep-orange-7"
                class="q-pa-sm"
              >Baixa temporada</q-badge>
            </div>
          </div>

          <div class="row q-pt-xs">
            <div class="col-12">
              <q-input
                dense
                outlined
                color="indigo-9"
                v-model="calendario"
                mask="date"
                @focus="() => $refs.qDateProxy.show()"
                @click="() => $refs.qDateProxy.show()"
              >
                <template v-slot:append>
                  <q-icon
                    name="event"
                    class="cursor-pointer"
                  >
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="calendario"
                        color="indigo-9"
                        @input="() => $refs.qDateProxy.hide()"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2 q-gutter-xs">
          <div class="row q-mt-sm">
            <div class="col">
              <q-toggle
                dense
                v-model="checkin"
                label="Check in"
                color="primary"
              ></q-toggle>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-toggle
                dense
                v-model="parciais"
                label="Com parciais"
                color="primary"
              ></q-toggle>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-toggle
                dense
                v-model="voucher"
                label="Sem voucher"
                color="primary"
              ></q-toggle>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-2 offset-md-1 text-right">
          <fieldset>
            <div class="row text-left">
              <div class="col left">
                Pax {{pax}}
              </div>
              <div class="col text-right">
                Alm {{alm}}
              </div>
            </div>

            <div class="row text-left">
              <div class="col text-left">
                Chd {{chd}}
              </div>
              <div class="col text-right">
                Total {{total}}
              </div>
            </div>

            <div class="row text-left">
              <div class="col text-left">
                Crt {{crt}}
              </div>
              <div class="col text-right">
                Vagas {{vagas}}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </fieldset>
  </q-form>
</template>

<script>
import QSelectAtrativos from './filtroTabelaReservas/QSelectAtrativos'
import QSelectAgencias from './filtroTabelaReservas/QSelectAgencias'
import QSelectAtividades from './filtroTabelaReservas/QSelectAtividades'
import QBtnAuxiliar from './filtroTabelaReservas/QBtnAuxiliar'

export default {
  name: 'cFiltroTabelaReservas',
  components: { QSelectAtrativos, QSelectAgencias, QSelectAtividades, QBtnAuxiliar },
  data () {
    return {
      nome: null,
      checkin: false,
      parciais: false,
      voucher: false,
      pax: 0,
      alm: 0,
      chd: 0,
      total: 0,
      crt: 0,
      vagas: 0,
      calendario: null
    }
  }
}
</script>
