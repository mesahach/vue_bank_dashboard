<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Spending Trend</h5>
    </div>
    <div class="card-body">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDashboardStore } from '../stores/dashboard'
import VueApexCharts from 'vue3-apexcharts'

const dashboardStore = useDashboardStore()

const chartData = computed(() => {
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    return d.toISOString().split('T')[0]
  }).reverse()

  const expensesByDay = last7Days.map(day => {
    const dayExpenses = dashboardStore.transactions
      .filter(t => t.type === 'expense' && t.date.startsWith(day))
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)
    return dayExpenses
  })

  return {
    categories: last7Days.map(d => new Date(d).toLocaleDateString('en-US', { weekday: 'short' })),
    data: expensesByDay,
  }
})

const series = computed(() => [
  {
    name: 'Spending',
    data: chartData.value.data,
  },
])

const chartOptions = computed(() => ({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: chartData.value.categories,
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val
      },
    },
  },
}))
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
