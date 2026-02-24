<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from '../stores/login.store.js'

const router = useRouter()
const loginStore = useLoginStore()

const form = ref({ email: 'pedro@gmail.com', password: '123456' })
const errorMsg = ref('')

async function handleSubmit() {
  errorMsg.value = ''
  const result = loginStore.login(form.value.email, form.value.password)
  if (result.success) {
    router.push({
      name: 'home',
      params: { message: '¡Sesión iniciada con éxito!', color: 'success' },
    })
  } else {
    errorMsg.value = result.error
  }
}
</script>

<template>
  <section class="login-page">
    <div class="login-card">
      <h1>Iniciar sesión</h1>
      <p class="subtitle">Accede para gestionar tu biblioteca.</p>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="field">
          <label for="email">Correo electrónico</label>
          <input id="email" v-model="form.email" type="email" required autocomplete="email" />
        </div>

        <div class="field">
          <label for="password">Contraseña</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            autocomplete="current-password"
          />
        </div>

        <p v-if="errorMsg" class="error-msg" role="alert">{{ errorMsg }}</p>

        <button type="submit" class="btn-login">Entrar</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 24px 16px;
}

.login-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

h1 {
  margin: 0 0 4px;
  font-size: 1.4rem;
}

.subtitle {
  color: #6b7280;
  margin: 0 0 24px;
  font-size: 0.9rem;
}

.login-form {
  display: grid;
  gap: 16px;
}

.field {
  display: grid;
  gap: 6px;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

input {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #6366f1;
}

.error-msg {
  color: #dc2626;
  font-size: 0.875rem;
  margin: 0;
}

.btn-login {
  padding: 10px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-login:hover {
  background: #4f46e5;
}
</style>
