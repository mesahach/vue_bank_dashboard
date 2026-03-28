<template>
  <div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="phone" class="form-label">Mobile Phone Number</label>
        <input type="tel" class="form-control" id="phone" placeholder="+1234567890" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required>
      </div>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" id="address" required>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="country_residence" class="form-label">Country of Residence</label>
        <select class="form-select" id="country_residence" required>
          <option selected disabled value="">Choose...</option>
          <!-- I will populate this later -->
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label for="state_residence" class="form-label">State of Residence</label>
        <select class="form-select" id="state_residence" required>
          <option selected disabled value="">Choose...</option>
          <!-- I will populate this later -->
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component will later emit events to update the parent's form data
</script>
