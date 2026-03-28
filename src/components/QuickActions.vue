<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Quick Actions</h5>
    </div>
    <div class="card-body d-flex justify-content-around">
      <button class="btn btn-primary">
        <i class="bi bi-send"></i> Transfer Money
      </button>
      <button class="btn btn-secondary">
        <i class="bi bi-receipt"></i> Pay Bills
      </button>
      <button class="btn btn-info">
        <i class="bi bi-file-earmark-text"></i> Request Statement
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
}
.btn i {
  font-size: 1.5rem;
}
</style>
