<template>
  <div>
    <div class="mb-3">
      <label for="employment_status" class="form-label">Employment Status</label>
      <input type="text" class="form-control" id="employment_status" required>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="account_type" class="form-label">Account Type</label>
        <select class="form-select" id="account_type" required>
          <option selected disabled value="">Choose...</option>
          <option>Savings Account</option>
          <option>Checking Account</option>
          <option>Current Account</option>
          <option>Corporate Account</option>
          <option>Investment Account</option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label for="currency" class="form-label">Currency</label>
        <select class="form-select" id="currency" required>
          <option selected disabled value="">Choose...</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <!-- I will add the full list later -->
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component will later emit events to update the parent's form data
</script>
