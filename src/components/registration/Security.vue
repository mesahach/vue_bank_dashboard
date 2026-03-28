<template>
  <div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="c_password" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="c_password" required>
      </div>
    </div>
    <div class="mb-3">
      <label for="pin" class="form-label">Auth PIN (4 digits)</label>
      <input type="password" class="form-control" id="pin" maxlength="4" required>
    </div>
  </div>
</template>

<script setup>
// This component will later emit events to update the parent's form data
</script>
