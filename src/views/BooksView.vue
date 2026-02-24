<template>
  <section class="page">
    <header class="header">
      <div class="logo-wrap" aria-hidden="true">
      <img class="logo" :src="logo" alt="Editorial Nova" />
    </div>
      

    <!--

      <button type="button" @click.once="showInfo" :disabled="tipShown" class="tip-btn">
        {{ tipShown ? 'Tip mostrado ✓' : 'Ver tip de uso' }}
      </button>
      
      <small v-if="tip">{{ tip }}</small>-->
    </header>

    <BookForm v-if="loginStore.currentUser?.admin" @book-created="handleBookCreated" />

    <BookList :books="store.books" @book-deleted="handleBookDeleted" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBookStore } from '../stores/books.js'
import { useLoginStore } from '../stores/login.store.js'
import logo from '@/assets/logo-editorial-nova.svg'

const store = useBookStore()
const loginStore = useLoginStore()

const tip = ref('')
const tipShown = ref(false)

function showInfo() {
  tip.value = 'Eventos: BookCard emite -> BookList re-emite -> BooksView llama al store.'
  tipShown.value = true
}

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
.header {
  margin-bottom: 0;
}
.tip-btn:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
