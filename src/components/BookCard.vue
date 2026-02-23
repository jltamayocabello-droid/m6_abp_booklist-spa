<template>
  <article class="bookCard" :title="`ID: ${props.book.id}`">
    <header class="row">
      <h3 class="title">
        <RouterLink class="titleLink" :to="{ name: 'book-details', params: { id: props.book.id } }">
          {{ props.book.title }}
        </RouterLink>
      </h3>
      <button type="button" class="danger" @click="handleDelete">Eliminar</button>
    </header>

    <p class="meta">
      <span class="author">Autor: {{ props.book.author }}</span>
      <span class="category" :class="categoryClass(props.book.category)"
        >Categoria: {{ props.book.category }}</span
      >
    </p>

    <p v-if="props.book.description" class="description">{{ props.book.description }}</p>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  book: { type: Object, required: true },
})

const emit = defineEmits(['bookDeleted'])

function categoryClass(category) {
  return {
    fiction: category === 'Ficción',
    nonFiction: category === 'No Ficción',
    science: category === 'Ciencia',
    history: category === 'Historia',
    dystopia: category === 'Distopía',
  }
}

function handleDelete() {
  emit('bookDeleted', props.book.id)
}
</script>

<style scoped>
.bookCard {
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}
.title {
  margin: 0 0 6px;
}
.titleLink {
  text-decoration: none;
  color: inherit;
}
.titleLink:hover {
  text-decoration: underline;
}
.meta {
  margin: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: #374151;
}
.category {
  padding: 2px 8px;
  border-radius: 999px;
  background: #f3f4f6;
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
  margin: 10px 0 0;
  color: #4b5563;
}
.danger {
  border: 1px solid #fecaca;
  background: #fef2f2;
  color: #991b1b;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}
</style>
