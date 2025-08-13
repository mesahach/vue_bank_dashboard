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
  submitKyc(formData) {
    const data = new FormData()
    // Append all fields from the store's state
    // Note: This is a simplified representation.
    // A real implementation would handle nested objects carefully.
    for (const key in formData) {
      if (typeof formData[key] === 'object' && formData[key] !== null) {
        if (key === 'sensitiveInfo' && formData[key].idDocument) {
          data.append('idDocument', formData[key].idDocument)
          // append other sensitiveInfo fields without the file
          const sensitiveInfoWithoutFile = { ...formData[key] };
          delete sensitiveInfoWithoutFile.idDocument;
          data.append(key, JSON.stringify(sensitiveInfoWithoutFile));
        } else {
          data.append(key, JSON.stringify(formData[key]))
        }
      } else {
        data.append(key, formData[key])
      }
    }
    return apiClient.post('/kyc-submissions', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
