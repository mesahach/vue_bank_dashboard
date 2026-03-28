<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">All Transactions</h5>
      <form class="d-flex">
        <input class="form-control" type="search" placeholder="Search Transactions..." v-model="searchQuery">
      </form>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th class="text-end">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in paginatedTransactions" :key="transaction.id">
              <td>{{ formatDate(transaction.date) }}</td>
              <td>{{ transaction.description }}</td>
              <td class="text-end" :class="transaction.type === 'income' ? 'text-success' : 'text-danger'">
                {{ formatCurrency(transaction.amount, 'USD') }}
              </td>
              <td>
                <span class="badge" :class="getStatusClass(transaction.status)">
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="transaction-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDashboardStore } from '../stores/dashboard'

const dashboardStore = useDashboardStore()
const transactions = computed(() => dashboardStore.transactions)

const currentPage = ref(1)
const perPage = ref(10)
const totalRows = computed(() => transactions.value.length)

const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return transactions.value.slice(start, end)
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

const getStatusClass = (status) => {
  if (status === 'Completed') return 'bg-success'
  if (status === 'Pending') return 'bg-warning'
  if (status === 'Failed') return 'bg-danger'
  return 'bg-secondary'
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
