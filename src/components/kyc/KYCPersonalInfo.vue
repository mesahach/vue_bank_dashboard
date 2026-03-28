<template>
  <div class="card">
    <div class="card-header">
      <h5>Step 1: Personal Information</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-firstname" class="form-label">First Name</label>
          <input type="text" class="form-control" id="kyc-firstname" :value="formData.firstName" @input="emitUpdate('firstName', $event.target.value)" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-lastname" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="kyc-lastname" :value="formData.lastName" @input="emitUpdate('lastName', $event.target.value)" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-gender" class="form-label">Gender</label>
          <select class="form-select" id="kyc-gender" :value="formData.gender" @change="emitUpdate('gender', $event.target.value)" required>
            <option selected disabled value="">Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-dob" class="form-label">Date of Birth</label>
          <input type="date" class="form-control" id="kyc-dob" :value="formData.dob" @input="emitUpdate('dob', $event.target.value)" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="kyc-nationality" class="form-label">Nationality</label>
        <input type="text" class="form-control" id="kyc-nationality" :value="formData.nationality" @input="emitUpdate('nationality', $event.target.value)" required>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update-form'])

const emitUpdate = (field, value) => {
  emit('update-form', { [field]: value })
}
</script>
