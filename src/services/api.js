import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getProfile() {
    return apiClient.get('/profile')
  },
  getAccounts() {
    return apiClient.get('/accounts')
  },
  getTransactions() {
    return apiClient.get('/transactions')
  },
}
