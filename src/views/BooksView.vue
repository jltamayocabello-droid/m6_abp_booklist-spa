

<template>
  <section>
    <header class="header">
      <h1>Lista de Libros</h1>
      <p>Administra tu catálogo: agrega libros y revisa el listado.</p>

      <button type="button" @click.once="showInfo">
        Ver tip de uso
      </button>
      <small v-if="tip">{{ tip }}</small>
    </header>

    <BookForm @book-created="handleBookCreated" />

    <div class="spacer"></div>

    <BookList :books="books" @book-deleted="handleBookDeleted"/>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'

const books = ref([
  { 
    id: crypto.randomUUID(), 
    title: 'Cien años de soledad', 
    author: 'Gabriel García Márquez', 
    category: 'Ficción', 
    description: 'La historia multi-generacional de la familia Buendía en el pueblo místico de Macondo.' 
  },
  { 
    id: crypto.randomUUID(), 
    title: '1984', 
    author: 'George Orwell', 
    category: 'Distopía', 
    description: 'Una visión aterradora de un estado totalitario donde el pensamiento libre está prohibido.' 
  },
  { 
    id: crypto.randomUUID(), 
    title: 'Interstellar', 
    author: 'Christopher Nolan', 
    category: 'Ciencia', 
    description: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.' 
  },
  { 
    id: crypto.randomUUID(), 
    title: 'Sapiens', 
    author: 'Yuval Noah Harari', 
    category: 'No Ficción', 
    description: 'Un recorrido por la historia de la humanidad, desde los primeros humanos hasta los avances del siglo XXI.' 
  },
  { 
    id: crypto.randomUUID(), 
    title: 'Breve historia del tiempo', 
    author: 'Stephen Hawking', 
    category: 'Historia', 
    description: 'Una exploración de los orígenes del universo, los agujeros negros y la naturaleza del tiempo.' 
  }

])

function showInfo() {
  tip.value = 'Eventos: BookCard emite -> BookList re-emite -> BooksView filtra.'
}

function handleBookCreated(book) {
  books.value = [book, ...books.value]
}

function handleBookDeleted(id) {
  books.value = books.value.filter(b => b.id !== id)
}

</script>

<style scoped>
.header { margin-bottom: 12px; }
</style>