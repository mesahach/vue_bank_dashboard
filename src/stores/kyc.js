import { defineStore, acceptHMRUpdate } from 'pinia'

const getInitialState = () => {
  const savedState = localStorage.getItem('kycForm')
  if (savedState) {
    try {
      return JSON.parse(savedState)
    } catch (e) {
      console.error("Failed to parse KYC form from localStorage", e)
      localStorage.removeItem('kycForm')
    }
  }
  return {
    personalInfo: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      nationality: '',
    },
    contactDetails: {
      email: '',
      phone: '',
      altPhone: '',
    },
    address: {
      residentialAddress: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
    sensitiveInfo: {
      idType: '',
      idNumber: '',
      idDocument: null,
    },
    nextOfKin: {
      fullName: '',
      relationship: '',
      contactNumber: '',
    },
  }
}

export const useKycStore = defineStore('kyc', {
  state: () => ({
    ...getInitialState(),
    isSubmitting: false,
    submissionError: null,
  }),

  actions: {
    updateAndPersist(step, data) {
      // Update the state
      this[step] = { ...this[step], ...data }
      // Persist the entire state to localStorage after each update
      localStorage.setItem('kycForm', JSON.stringify(this.$state))
    },
    resetForm() {
      localStorage.removeItem('kycForm')
      this.$reset()
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useKycStore, import.meta.hot))
}
