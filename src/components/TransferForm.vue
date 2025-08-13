<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Transfer Money</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="fromAccount" class="form-label">From Account</label>
          <select id="fromAccount" class="form-select" v-model="fromAccount">
            <option v-for="account in accounts" :key="account.id" :value="account.id">
              {{ account.type }} - ****{{ account.account_number.slice(-4) }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="toAccount" class="form-label">To Account</label>
          <select id="toAccount" class="form-select" v-model="toAccount">
            <option v-for="account in accounts" :key="account.id" :value="account.id">
              {{ account.type }} - ****{{ account.account_number.slice(-4) }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label">Amount</label>
          <input type="number" id="amount" class="form-control" v-model.number="amount" placeholder="0.00">
        </div>
        <button type="submit" class="btn btn-primary">Transfer</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import { toast } from 'vue3-toastify'

const dashboardStore = useDashboardStore()
const accounts = computed(() => dashboardStore.accounts)

const fromAccount = ref(accounts.value.length > 0 ? accounts.value[0].id : null)
const toAccount = ref(accounts.value.length > 1 ? accounts.value[1].id : null)
const amount = ref(null)

const handleSubmit = () => {
  if (fromAccount.value === toAccount.value) {
    toast.error("From and To accounts cannot be the same.")
    return
  }
  if (!amount.value || amount.value <= 0) {
    toast.error("Amount must be greater than zero.")
    return
  }
  console.log({
    from: fromAccount.value,
    to: toAccount.value,
    amount: amount.value,
  })
  toast.success("Transfer submitted successfully!")
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
