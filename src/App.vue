<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Vue3ToastifyContainer } from 'vue3-toastify'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
}

const layout = computed(() => {
  return layouts[route.meta.layout] || layouts.default
})
</script>

<template>
  <Vue3ToastifyContainer />
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
/* Global styles can remain here */
</style>
