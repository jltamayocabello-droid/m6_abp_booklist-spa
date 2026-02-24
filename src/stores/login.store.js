import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'booklist-session'

const USERS = [
  { id: '1', nombre: 'Pedro', email: 'pedro@gmail.com', password: '123456', admin: false },
  { id: '2', nombre: 'Marta', email: 'marta@gmail.com', password: '123456', admin: false },
  { id: '3', nombre: 'Admin', email: 'admin@admin.com', password: 'admin', admin: true },
]

export const useLoginStore = defineStore('login', () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  const parsed = stored ? JSON.parse(stored) : null

  const sesion = ref(parsed?.sesion ?? false)
  const currentUser = ref(parsed?.currentUser ?? null)

  watch(
    () => ({ sesion: sesion.value, currentUser: currentUser.value }),
    (val) => localStorage.setItem(STORAGE_KEY, JSON.stringify(val)),
    { deep: true },
  )

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
})
