<template>
  <section>
    <RouterLink class="back" :to="{ name: 'books' }">← Volver al catálogo</RouterLink>

    <template v-if="book">
      <h1 class="title">{{ book.title }}</h1>

      <p class="meta">
        <span class="author">{{ book.author }}</span>
        <span class="category" :class="categoryClass(book.category)">{{ book.category }}</span>
      </p>

      <p v-if="book.description" class="description">{{ book.description }}</p>
      <p v-else class="muted">Sin sinopsis disponible.</p>
    </template>

    <template v-else>
      <p class="muted">Libro no encontrado.</p>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useBookStore } from '../stores/books.js'

const props = defineProps({
  id: { type: String, required: true },
})

const store = useBookStore()
const book = computed(() => store.getBook(props.id))

function categoryClass(category) {
  return {
    fiction: category === 'Ficción',
    nonFiction: category === 'No Ficción',
    science: category === 'Ciencia',
    history: category === 'Historia',
    dystopia: category === 'Distopía',
  }
}
</script>

<style scoped>
.back {
  display: inline-block;
  margin-bottom: 16px;
  color: #374151;
  text-decoration: none;
  font-size: 0.9rem;
}
.back:hover {
  text-decoration: underline;
}
.title {
  margin: 0 0 8px;
}
.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.author {
  color: #374151;
}
.category {
  padding: 2px 10px;
  border-radius: 999px;
  background: #f3f4f6;
  font-size: 0.85rem;
}
.category.fiction {
  background: #ede9fe;
}
.category.nonFiction {
  background: #fef9c3;
}
.category.science {
  background: #dcfce7;
}
.category.history {
  background: #e0f2fe;
}
.category.dystopia {
  background: #fee2e2;
}
.description {
  color: #4b5563;
  line-height: 1.6;
}
.muted {
  color: #9ca3af;
}
</style>
