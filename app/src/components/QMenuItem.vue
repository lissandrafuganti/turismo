<template>
  <q-card class="bg-indigo-7">
    <q-card-section
      class="no-padding text-white"
      v-for="(item, i) in itens"
      :key="i"
    >
      <q-item
        v-ripple
        clickable
        :to="{name: item.url || 'RouteDashboard'}"
        class="q-pl-xl text-white"
        exact
        exact-active-class
      >
        <q-item-section avatar>
          <q-icon :name="item.icon"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.label}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator
        inset
        v-if="item.separator"
        class="q-mt-md q-mb-md"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'QMenuItem',
  props: {
    itens: {
      type: Array,
      default: () => []
    }
  }
}
</script>
