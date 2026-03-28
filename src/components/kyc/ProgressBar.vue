<template>
  <div class="progress" style="height: 20px;">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: progress + '%' }"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      Step {{ currentStep }} of {{ totalSteps }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
  totalSteps: {
    type: Number,
    required: true,
  },
})

const progress = computed(() => {
  if (props.totalSteps <= 1) return 100
  return ((props.currentStep - 1) / (props.totalSteps - 1)) * 100
})
</script>
