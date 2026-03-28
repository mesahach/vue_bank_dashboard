<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div class="app-layout" :class="{ 'sidebar-collapsed': themeStore.isSidebarCollapsed }">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <div class="content p-4">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-layout {
  display: flex;
  transition: margin-left 0.3s;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s;
}

.content {
  padding: 1rem;
  margin-left: 280px;
  width: calc(100% - 280px);
  transition: margin-left 0.3s, width 0.3s;
}

.sidebar-collapsed .content {
  margin-left: 88px;
  width: calc(100% - 88px);
}
</style>
