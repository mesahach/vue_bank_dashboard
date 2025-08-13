<template>
  <div>
    <div v-if="dashboardStore.loading" class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="dashboardStore.error" class="alert alert-danger">
      {{ dashboardStore.error }}
    </div>
    <div v-else>
      <div class="row mb-4">
        <div class="col-md-4" v-for="account in dashboardStore.accounts" :key="account.id">
          <AccountSummaryCard :account="account" />
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <QuickActions />
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <LatestTransactions />
        </div>
        <div class="col-md-5">
          <SpendingChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import AccountSummaryCard from '../components/AccountSummaryCard.vue'
import LatestTransactions from '../components/LatestTransactions.vue'
import QuickActions from '../components/QuickActions.vue'
import SpendingChart from '../components/SpendingChart.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  dashboardStore.fetchDashboardData()
})
</script>
