<template>
  <section class="page">
    <div class="logo-wrap" aria-hidden="true">
      <img class="logo" :src="logo" alt="Editorial Nova" />
    </div>

    <BookForm v-if="loginStore.currentUser?.admin" @book-created="handleBookCreated" />

    <BookList :books="store.books" @book-deleted="handleBookDeleted" />
  </section>
</template>

<script setup>
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBookStore } from '../stores/books.js'
import { useLoginStore } from '../stores/login.store.js'
import logo from '@/assets/logo-editorial-nova.svg'

const store = useBookStore()
const loginStore = useLoginStore()

function handleBookCreated(book) {
  store.addBook(book)
}

function handleBookDeleted(id) {
  store.deleteBook(id)
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
</style>
