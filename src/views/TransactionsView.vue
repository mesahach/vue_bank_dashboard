<template>
  <div>
    <h1>Transactions</h1>
    <div v-if="dashboardStore.loading" class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="dashboardStore.error" class="alert alert-danger">
      {{ dashboardStore.error }}
    </div>
    <div v-else>
      <TransactionList />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import TransactionList from '../components/TransactionList.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  if (dashboardStore.transactions.length === 0) {
    dashboardStore.fetchDashboardData()
  }
})
</script>
