<template>
  <div>
    <h1>Settings</h1>
    <div v-if="dashboardStore.loading" class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="dashboardStore.error" class="alert alert-danger">
      {{ dashboardStore.error }}
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <ProfileSettings />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import ProfileSettings from '../components/ProfileSettings.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  if (!dashboardStore.profile) {
    dashboardStore.fetchDashboardData()
  }
})
</script>
