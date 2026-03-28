<template>
  <div>
    <h1>Accounts</h1>
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
        <div class="col-md-6" v-for="account in dashboardStore.accounts" :key="account.id">
          <AccountDetails :account="account" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import AccountDetails from '../components/AccountDetails.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  if (dashboardStore.accounts.length === 0) {
    dashboardStore.fetchDashboardData()
  }
})
</script>
