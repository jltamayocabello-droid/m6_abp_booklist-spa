<template>
  <section class="page">
    <div class="logo-wrap" aria-hidden="true">
      <img class="logo" :src="logo" alt="Editorial Nova" />
    </div>

    <div
      v-if="notification.visible"
      class="flash"
      :class="`flash-${notification.color}`"
      role="alert"
    >
      {{ notification.message }}
    </div>

    <BookForm v-if="loginStore.currentUser?.admin" @book-created="handleBookCreated" />

    <BookList :books="store.books" @book-deleted="handleBookDeleted" />
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBookStore } from '../stores/books.js'
import { useLoginStore } from '../stores/login.store.js'
import logo from '@/assets/logo-editorial-nova.svg'

const store = useBookStore()
const loginStore = useLoginStore()

const notification = reactive({ visible: false, message: '', color: 'success' })

function showNotification(message, color = 'success') {
  notification.message = message
  notification.color = color
  notification.visible = true
  setTimeout(() => (notification.visible = false), 3000)
}

function handleBookCreated(book) {
  store.addBook(book)
  showNotification(`"${book.title}" fue agregado al catálogo.`, 'success')
}

function handleBookDeleted(id) {
  const book = store.getBook(id)
  store.deleteBook(id)
  showNotification(`"${book?.title ?? 'Libro'}" fue eliminado del catálogo.`, 'error')
}
</script>

<style scoped>
.page {
  display: grid;
  gap: 16px;
}

.logo-wrap {
  display: flex;
  justify-content: center;
  padding: 8px 0;
}

.logo {
  height: 64px;
  width: auto;
}

.flash {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  animation: fadeIn 0.3s ease;
}

.flash-success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.flash-error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
