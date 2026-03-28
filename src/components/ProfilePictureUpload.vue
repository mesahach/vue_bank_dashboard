<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Update Profile Picture</h5>
    </div>
    <div class="card-body text-center">
      <div
        class="drop-zone"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        :class="{ 'drag-over': isDragging }"
        @click="openFileDialog"
      >
        <div v-if="!previewUrl">
          <i class="bi bi-upload fs-1"></i>
          <p>Drag & drop your photo here, or click to select a file.</p>
        </div>
        <img v-else :src="previewUrl" class="img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover;" alt="Profile Preview">
        <input type="file" ref="fileInput" @change="onFileSelect" accept="image/jpeg, image/png" class="d-none">
      </div>
      <div v-if="error" class="text-danger mt-2">{{ error }}</div>
      <button class="btn btn-primary mt-3" :disabled="!file" @click="uploadImage">Save Photo</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const fileInput = ref(null)
const isDragging = ref(false)
const previewUrl = ref(null)
const file = ref(null)
const error = ref('')

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png']

const onDragOver = () => {
  isDragging.value = true
}
const onDragLeave = () => {
  isDragging.value = false
}
const onDrop = (event) => {
  isDragging.value = false
  const droppedFile = event.dataTransfer.files[0]
  handleFile(droppedFile)
}
const onFileSelect = (event) => {
  const selectedFile = event.target.files[0]
  handleFile(selectedFile)
}

const openFileDialog = () => {
  fileInput.value.click()
}

const handleFile = (selectedFile) => {
  error.value = ''
  if (!selectedFile) return

  if (!ALLOWED_TYPES.includes(selectedFile.type)) {
    error.value = 'Invalid file type. Please select a JPG or PNG image.'
    return
  }
  if (selectedFile.size > MAX_FILE_SIZE) {
    error.value = 'File is too large. Maximum size is 2MB.'
    return
  }

  file.value = selectedFile
  previewUrl.value = URL.createObjectURL(selectedFile)
}

const uploadImage = () => {
  if (!file.value) return
  // Mock upload logic
  console.log("Uploading file:", file.value)
  toast.success("Profile picture updated successfully!")
  // Here you would typically use Axios to upload the file
  // and then reset the state.
  file.value = null
  previewUrl.value = null
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 40px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}
.drop-zone:hover {
  background-color: #f8f9fa;
}
.drop-zone.drag-over {
  background-color: #e9ecef;
  border-color: #0d6efd;
}
[data-bs-theme="dark"] .drop-zone {
  border-color: #495057;
}
[data-bs-theme="dark"] .drop-zone:hover {
  background-color: #343a40;
}
[data-bs-theme="dark"] .drop-zone.drag-over {
  background-color: #495057;
  border-color: #0d6efd;
}
</style>
