<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <q-breadcrumbs>
        <q-breadcrumbs-el active-color="teal-9">
          <q-btn
            icon="mdi-home"
            color="indigo-9"
            glossy
            rounded
            :to="{name: 'RouteDashboard'}"
          ></q-btn>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el
          v-for="(el, i) in labels"
          :key="i"
          :label="el.label"
          :to="{name: el.url}"
        ></q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CBreadcrumb',
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  }
}
</script>
