<template>
  <div class="card">
    <div class="card-header">
      <h5>Step 5: Next of Kin <span class="text-muted">(Optional)</span></h5>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="kyc-kin-name" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="kyc-kin-name" :value="formData.fullName" @input="emitUpdate('fullName', $event.target.value)">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-kin-relationship" class="form-label">Relationship</label>
          <input type="text" class="form-control" id="kyc-kin-relationship" :value="formData.relationship" @input="emitUpdate('relationship', $event.target.value)">
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-kin-phone" class="form-label">Contact Number</label>
          <input type="tel" class="form-control" id="kyc-kin-phone" :value="formData.contactNumber" @input="emitUpdate('contactNumber', $event.target.value)">
        </div>
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
