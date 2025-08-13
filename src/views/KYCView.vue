<template>
  <div>
    <h1 class="mb-4">KYC Verification</h1>
    <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" class="mb-4" />

    <form @submit.prevent="nextStep" class="needs-validation" :class="{ 'was-validated': wasValidated }" novalidate>
      <transition name="slide-fade" mode="out-in">
        <component
          :is="stepComponents[currentStep - 1]"
          :form-data="currentStepData"
          @update-form="updateForm"
          :ref="el => { if (el) stepComponentRefs[currentStep - 1] = el }"
        />
      </transition>
    </form>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-secondary" @click="prevStep" :disabled="currentStep === 1">Previous</button>
      <button v-if="currentStep < totalSteps" class="btn btn-primary" @click="validateAndNext">Next</button>
      <button v-else class="btn btn-success" @click="validateAndSubmit">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useKycStore } from '../stores/kyc'
import { useSwal } from 'vue-sweetalert2'
import { toast } from 'vue3-toastify'
import ProgressBar from '../components/kyc/ProgressBar.vue'
import KYCPersonalInfo from '../components/kyc/KYCPersonalInfo.vue'
import KYCContactDetails from '../components/kyc/KYCContactDetails.vue'
import KYCAddress from '../components/kyc/KYCAddress.vue'
import KYCSensitiveInfo from '../components/kyc/KYCSensitiveInfo.vue'
import KYCNextOfKin from '../components/kyc/KYCNextOfKin.vue'

const kycStore = useKycStore()
const router = useRouter()
const swal = useSwal()
const currentStep = ref(1)
const totalSteps = 5
const wasValidated = ref(false)

const stepComponents = [
  KYCPersonalInfo,
  KYCContactDetails,
  KYCAddress,
  KYCSensitiveInfo,
  KYCNextOfKin,
]

const stepDataKeys = [
  'personalInfo',
  'contactDetails',
  'address',
  'sensitiveInfo',
  'nextOfKin',
]

const stepComponentRefs = ref([])

const currentStepData = computed(() => {
  const key = stepDataKeys[currentStep.value - 1]
  return kycStore[key]
})

const updateForm = (data) => {
  const key = stepDataKeys[currentStep.value - 1]
  kycStore.updateAndPersist(key, data)
}

const validateStep = () => {
  const form = stepComponentRefs.value[currentStep.value - 1]?.$el.closest('form')
  if (!form) return false
  wasValidated.value = true
  return form.checkValidity()
}

const validateAndNext = () => {
  if (validateStep()) {
    wasValidated.value = false
    if (currentStep.value < totalSteps) {
      currentStep.value++
    }
  }
}

const prevStep = () => {
  wasValidated.value = false
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const validateAndSubmit = async () => {
  if (validateStep()) {
    const result = await swal.fire({
      title: 'Submit KYC Information?',
      text: "Please confirm that all your details are correct before submitting.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'No, cancel!',
    })

    if (result.isConfirmed) {
      try {
        await kycStore.submitKycForm()
        toast.success('Your KYC information has been submitted successfully!')
        router.push('/settings')
      } catch (error) {
        toast.error(kycStore.submissionError || 'An unknown error occurred.')
      }
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
