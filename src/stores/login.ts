import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref(undefined)
  function changeToken(value:any) {
    token.value = value
  }

  return { token, changeToken }
})
