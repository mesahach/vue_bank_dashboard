<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="btn btn-link" type="button" @click="themeStore.toggleSidebar">
        <i class="bi bi-list"></i>
      </button>
      <form class="d-flex ms-3">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div class="d-flex align-items-center ms-auto">
        <div class="me-3">
          <i class="bi bi-bell"></i>
          <span class="badge rounded-pill bg-danger">3</span>
        </div>
        <div class="me-3">
          <GoogleTranslate />
        </div>
        <div class="me-3">
          <i
            class="bi"
            :class="themeStore.theme === 'light' ? 'bi-brightness-high-fill' : 'bi-moon-stars-fill'"
            @click="themeStore.toggleTheme"
            style="cursor: pointer;"
          ></i>
        </div>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>John Doe</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'
import GoogleTranslate from './GoogleTranslate.vue'

const themeStore = useThemeStore()
</script>

<style scoped>
.navbar {
  margin-left: 280px;
  width: calc(100% - 280px);
  transition: margin-left 0.3s, width 0.3s;
  border-bottom: 1px solid var(--bs-border-color);
}

.sidebar-collapsed .navbar {
  margin-left: 88px;
  width: calc(100% - 88px);
}
</style>
