<template>
  <span>{{ formattedValue }}</span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
})

const animatedValue = ref(0)

const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

const formattedValue = ref(formatCurrency(0, props.currency))

const animateValue = (newValue) => {
  gsap.to(animatedValue, {
    duration: 1,
    value: newValue,
    onUpdate: () => {
      formattedValue.value = formatCurrency(animatedValue.value, props.currency)
    },
  })
}

watch(() => props.value, (newValue) => {
  animateValue(newValue)
})

onMounted(() => {
  animateValue(props.value)
})
</script>
