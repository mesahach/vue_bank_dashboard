<template>
  <form @submit.prevent="handleLogin">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="accountNumber" placeholder="123456789" v-model="accountNumber" required>
      <label for="accountNumber">Account Number</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
      <label for="password">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>

    <div class="text-center mt-3">
      <router-link to="/register">Don't have an account? Register</router-link>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const accountNumber = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // Mock login logic
  if (accountNumber.value === '123456789' && password.value === 'password') {
    toast.success('Login successful!')
    router.push('/dashboard')
  } else {
    toast.error('Invalid account number or password.')
  }
}
</script>
