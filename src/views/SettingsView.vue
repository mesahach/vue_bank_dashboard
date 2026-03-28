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

          <div class="card mt-4">
            <div class="card-header">
              <h5 class="card-title">KYC Verification</h5>
            </div>
            <div class="card-body">
              <p>Your account is not yet verified. Please complete the KYC process to unlock all features.</p>
              <router-link to="/kyc" class="btn btn-primary">Start KYC Verification</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import ProfileSettings from '../components/ProfileSettings.vue'
import ProfilePictureUpload from '../components/ProfilePictureUpload.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  if (!dashboardStore.profile) {
    dashboardStore.fetchDashboardData()
  }
})
</script>
