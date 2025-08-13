<template>
  <aside class="sidebar" :class="{ collapsed: themeStore.isSidebarCollapsed }">
    <div class="sidebar-header">
      <router-link to="/dashboard" class="logo">
        <i class="bi bi-bank"></i>
        <span class="logo-text">Bank Dashboard</span>
      </router-link>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">
          <i class="bi bi-grid"></i>
          <span class="link-text">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/accounts" class="nav-link">
          <i class="bi bi-person-vcard"></i>
          <span class="link-text">Accounts</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/transactions" class="nav-link">
          <i class="bi bi-arrow-down-up"></i>
          <span class="link-text">Transactions</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/transfers" class="nav-link">
          <i class="bi bi-send"></i>
          <span class="link-text">Transfers</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/settings" class="nav-link">
          <i class="bi bi-gear"></i>
          <span class="link-text">Settings</span>
        </router-link>
      </li>
    </ul>
    <div class="sidebar-footer">
      <a href="#" class="nav-link" @click.prevent="handleLogout">
        <i class="bi bi-box-arrow-left"></i>
        <span class="link-text">Logout</span>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'
import { useSwal } from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const themeStore = useThemeStore()
const swal = useSwal()

const handleLogout = () => {
  swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log me out!'
  }).then((result) => {
    if (result.isConfirmed) {
      swal.fire(
        'Logged Out!',
        'You have been logged out.',
        'success'
      )
      // Here you would typically redirect to a login page or clear user data
      console.log("User logged out")
    }
  })
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-color);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: width 0.3s;
  border-right: 1px solid var(--bs-border-color);
}

.sidebar.collapsed {
  width: 88px;
}

.sidebar.collapsed .logo-text,
.sidebar.collapsed .link-text {
  display: none;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
}

.sidebar.collapsed .nav-link i {
  margin-right: 0;
}

.sidebar-header {
  margin-bottom: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--logo-color);
  text-decoration: none;
}

.logo i {
  margin-right: 0.5rem;
}

.nav-link {
  color: var(--sidebar-link-color);
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
}

.nav-link:hover {
  background-color: var(--sidebar-link-hover-bg);
  color: var(--sidebar-color);
}

.nav-link i {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.router-link-exact-active {
  background-color: var(--sidebar-link-active-bg);
  color: var(--sidebar-link-active-color);
}

.sidebar-footer {
  margin-top: auto;
}
</style>
