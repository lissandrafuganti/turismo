<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Ops, parece que o que você procurava não se encontra mais...<strong>(404)</strong></p>
    <q-btn
      color="purple-9"
      style="width:200px;"
      :to="{name: 'PDashboard'}"
      label="Voltar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
