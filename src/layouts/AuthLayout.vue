<template>
  <div class="auth-layout d-flex align-items-center justify-content-center vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-sm">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <i class="bi bi-bank" style="font-size: 3rem;"></i>
                <h1 class="h3 mb-3 fw-normal">Bank Dashboard</h1>
              </div>
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  background-color: #f5f5f5;
}

[data-bs-theme="dark"] .auth-layout {
  background-color: #212529;
}
</style>
