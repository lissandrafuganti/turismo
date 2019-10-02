<template>
  <q-expansion-item
    :label="label"
    :icon="icon"
    group="group"
  >
    <slot name="content" />
  </q-expansion-item>
</template>

<script>
export default {
  name: 'QExpansionItemMenu',
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
