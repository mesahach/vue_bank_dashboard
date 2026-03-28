<template>
  <div class="card">
    <div class="card-header">
      <h5>Step 4: Sensitive Information</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-id-type" class="form-label">ID Type</label>
          <select class="form-select" id="kyc-id-type" :value="formData.idType" @change="emitUpdate('idType', $event.target.value)" required>
            <option selected disabled value="">Choose...</option>
            <option>National ID</option>
            <option>Passport</option>
            <option>Driver's License</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-id-number" class="form-label">ID Number</label>
          <input type="text" class="form-control" id="kyc-id-number" :value="formData.idNumber" @input="emitUpdate('idNumber', $event.target.value)" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="kyc-id-upload" class="form-label">Upload ID Document</label>
        <input class="form-control" type="file" id="kyc-id-upload" @change="handleFileUpload" accept=".jpeg,.jpg,.png,.pdf" required>
        <small class="form-text text-muted">Accepted formats: JPEG, PNG, PDF. Max size: 5MB.</small>
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

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Add file validation here if needed (e.g., size check)
    emitUpdate('idDocument', file)
  }
}
</script>
