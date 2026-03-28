<template>
  <div class="card">
    <div class="card-header">
      <h5>Step 3: Address Details</h5>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="kyc-address" class="form-label">Residential Address</label>
        <input type="text" class="form-control" id="kyc-address" :value="formData.residentialAddress" @input="emitUpdate('residentialAddress', $event.target.value)" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-city" class="form-label">City</label>
          <input type="text" class="form-control" id="kyc-city" :value="formData.city" @input="emitUpdate('city', $event.target.value)" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-state" class="form-label">State/Province</label>
          <input type="text" class="form-control" id="kyc-state" :value="formData.state" @input="emitUpdate('state', $event.target.value)" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="kyc-country" class="form-label">Country</label>
          <input type="text" class="form-control" id="kyc-country" :value="formData.country" @input="emitUpdate('country', $event.target.value)" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="kyc-postal" class="form-label">Postal Code</label>
          <input type="text" class="form-control" id="kyc-postal" :value="formData.postalCode" @input="emitUpdate('postalCode', $event.target.value)" required>
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
