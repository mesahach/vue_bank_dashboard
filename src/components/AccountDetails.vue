<template>
  <div class="card mb-3">
    <div class="card-header">
      <h5 class="card-title">{{ account.type }} Account</h5>
    </div>
    <div class="card-body">
      <p><strong>Account Number:</strong> {{ account.account_number }}</p>
      <p><strong>Balance:</strong> {{ formatCurrency(account.balance, account.currency) }}</p>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-primary btn-sm">View Transactions</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  account: {
    type: Object,
    required: true,
  },
})

const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
