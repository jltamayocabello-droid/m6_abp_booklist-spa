import { ref } from 'vue'
import { defineStore } from 'pinia'

const USERS = [
  { id: '1', nombre: 'Pedro', email: 'pedro@gmail.com', password: '123456', admin: false },
  { id: '2', nombre: 'Marta', email: 'marta@gmail.com', password: '123456', admin: false },
  { id: '3', nombre: 'Admin', email: 'admin@admin.com', password: 'admin', admin: true },
]

export const useLoginStore = defineStore(
  'login',
  () => {
    const sesion = ref(false)
    const currentUser = ref(null)

    function login(email, password) {
      const user = USERS.find((u) => u.email === email && u.password === password)
      if (!user) return { error: 'Credenciales incorrectas.' }

      const { password: _pw, ...safeUser } = user
      sesion.value = true
      currentUser.value = safeUser
      return { success: true }
    }

    function $reset() {
      sesion.value = false
      currentUser.value = null
    }

    return { sesion, currentUser, login, $reset }
  },
  { persist: true },
)
