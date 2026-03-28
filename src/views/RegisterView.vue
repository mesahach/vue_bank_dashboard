<template>
  <div>
    <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="Personal" :title-link-class="linkClass(0)">
        <PersonalInformation />
      </b-tab>
      <b-tab title="Contact" :title-link-class="linkClass(1)">
        <ContactInformation />
      </b-tab>
      <b-tab title="Account" :title-link-class="linkClass(2)">
        <RegistrationAccountDetails />
      </b-tab>
      <b-tab title="Security" :title-link-class="linkClass(3)">
        <Security />
      </b-tab>
    </b-tabs>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-secondary" @click="prevTab" :disabled="tabIndex === 0">Previous</button>
      <button v-if="tabIndex < 3" class="btn btn-primary" @click="nextTab">Next</button>
      <button v-else class="btn btn-success" @click="handleSubmit">Register</button>
    </div>

    <div class="text-center mt-3">
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import PersonalInformation from '../components/registration/PersonalInformation.vue'
import ContactInformation from '../components/registration/ContactInformation.vue'
import RegistrationAccountDetails from '../components/registration/RegistrationAccountDetails.vue'
import Security from '../components/registration/Security.vue'

const tabIndex = ref(0)

const nextTab = () => {
  if (tabIndex.value < 3) {
    tabIndex.value++
  }
}

const prevTab = () => {
  if (tabIndex.value > 0) {
    tabIndex.value--
  }
}

const handleSubmit = () => {
  // In a real app, you would collect all the data from the child components
  // and submit it to the server.
  console.log("Submitting registration form...")
  toast.success("Registration successful! Please check your email for confirmation.")
}

const linkClass = (idx) => {
  if (tabIndex.value === idx) return ['text-primary']
  else return ['text-secondary']
}
</script>
