<template>
  <q-select
    dense
    outlined
    color="indigo-9"
    label="Atividade"
    v-model="atividade"
    :options="opcoesAtividades"
  ></q-select>
</template>

<script>
export default {
  name: 'QSelectAtividades',
  data () {
    return {
      atividade: null,
      opcoesAtividades: []
    }
  }
}
</script>
