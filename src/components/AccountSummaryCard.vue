<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ account.type }}</h5>
      <p class="card-text">
        Account No: {{ account.account_number }}
      </p>
      <h3 class="card-text">
        <AnimatedNumber :value="account.balance" :currency="account.currency" />
      </h3>
    </div>
  </div>
</template>

<script setup>
import AnimatedNumber from './AnimatedNumber.vue'

defineProps({
  account: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
