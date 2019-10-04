<template>
  <q-select
    dense
    outlined
    color="indigo-9"
    label="Agência"
    v-model="agencia"
    :options="opcoesAgencias"
  ></q-select>
</template>

<script>
export default {
  name: 'cQSelectAgencias',
  data () {
    return {
      agencia: null,
      opcoesAgencias: []
    }
  }
}
</script>
