<template>
  <div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstname" class="form-label">First & Middle Name</label>
        <input type="text" class="form-control" id="firstname" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastname" class="form-label">Surname</label>
        <input type="text" class="form-control" id="lastname" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select class="form-select" id="gender" required>
          <option selected disabled value="">Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label for="dob" class="form-label">Date of Birth</label>
        <input type="date" class="form-control" id="dob" required>
      </div>
    </div>
    <div class="mb-3">
      <label for="nationality" class="form-label">Nationality</label>
      <select class="form-select" id="nationality" required>
        <option selected disabled value="">Choose...</option>
        <!-- I will populate this later -->
      </select>
    </div>
  </div>
</template>

<script setup>
// This component will later emit events to update the parent's form data
</script>
