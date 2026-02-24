<script setup>
import { useLoginStore } from '../stores/login.store.js'

const loginStore = useLoginStore()
const user = loginStore.currentUser
</script>

<template>
  <section class="profile-page">
    <div class="profile-card">
      <div class="avatar">{{ user?.nombre?.charAt(0).toUpperCase() }}</div>

      <h1>{{ user?.nombre }}</h1>
      <p class="email">{{ user?.email }}</p>

      <span class="badge" :class="user?.admin ? 'badge-admin' : 'badge-user'">
        {{ user?.admin ? 'Administrador' : 'Usuario' }}
      </span>

      <dl class="details">
        <dt>ID de usuario</dt>
        <dd>{{ user?.id }}</dd>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  padding: 32px 16px;
}

.profile-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  display: grid;
  gap: 12px;
  justify-items: center;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #6366f1;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
  font-size: 1.4rem;
}

.email {
  color: #6b7280;
  margin: 0;
  font-size: 0.9rem;
}

.badge {
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.badge-admin {
  background: #ede9fe;
  color: #6d28d9;
}

.badge-user {
  background: #f3f4f6;
  color: #374151;
}

.details {
  margin: 8px 0 0;
  text-align: left;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  padding-top: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 16px;
}

dt {
  font-size: 0.8rem;
  color: #9ca3af;
  font-weight: 500;
}

dd {
  font-size: 0.8rem;
  color: #374151;
  margin: 0;
  word-break: break-all;
}
</style>
