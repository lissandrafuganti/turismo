<template>
  <q-select
    dense
    outlined
    color="indigo-9"
    label="Atrativo"
    v-model="atrativo"
    :options="opcoesAtrativos"
  ></q-select>
</template>

<script>
export default {
  name: 'cQSelectAtrativos',
  data () {
    return {
      atrativo: null,
      opcoesAtrativos: []
    }
  }
}
</script>
