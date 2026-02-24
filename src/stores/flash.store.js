import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlashStore = defineStore('flash', () => {
  const message = ref('')
  const color = ref('success')

  function show(msg, clr = 'success') {
    message.value = msg
    color.value = clr
  }

  function clear() {
    message.value = ''
    color.value = 'success'
  }

  return { message, color, show, clear }
})
