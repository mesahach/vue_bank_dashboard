<template>
  <div class="card">
    <div class="card-header">
      <h5>Step 2: Contact Details</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-email" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="kyc-email" :value="formData.email" @input="emitUpdate('email', $event.target.value)" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-phone" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="kyc-phone" :value="formData.phone" @input="emitUpdate('phone', $event.target.value)" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="kyc-alt-phone" class="form-label">Alternate Phone Number <span class="text-muted">(Optional)</span></label>
        <input type="tel" class="form-control" id="kyc-alt-phone" :value="formData.altPhone" @input="emitUpdate('altPhone', $event.target.value)">
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
