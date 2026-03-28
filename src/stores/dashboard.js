import { defineStore } from 'pinia'
import api from '../services/api'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    profile: null,
    accounts: [],
    transactions: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchDashboardData() {
      this.loading = true
      this.error = null
      try {
        const [profileRes, accountsRes, transactionsRes] = await Promise.all([
          api.getProfile(),
          api.getAccounts(),
          api.getTransactions(),
        ])
        this.profile = profileRes.data
        this.accounts = accountsRes.data
        this.transactions = transactionsRes.data
      } catch (error) {
        this.error = 'Failed to fetch dashboard data.'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
