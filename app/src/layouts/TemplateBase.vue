<template>
  <q-page class="q-pa-md">
    <QCustomBreadcrumb :labels="labels" />

    <q-card
      class="full-width q-pa-xs"
      square
    >
      <q-card-section>
        <slot name="content" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import QCustomBreadcrumb from '../components/QCustomBreadcrumb'
export default {
  name: 'TemplateBase',
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  components: { QCustomBreadcrumb }
}
</script>
