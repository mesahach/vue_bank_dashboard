<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Profile Settings</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" class="form-control" v-model="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" v-model="email">
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import { toast } from 'vue3-toastify'

const dashboardStore = useDashboardStore()
const profile = computed(() => dashboardStore.profile)

const name = ref('')
const email = ref('')

watch(profile, (newProfile) => {
  if (newProfile) {
    name.value = newProfile.name
    email.value = newProfile.email
  }
}, { immediate: true })

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
  })
  toast.success("Profile settings saved successfully!")
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
