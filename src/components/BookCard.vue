<template>
  <article class="bookCard" :title="`ID: ${props.book.id}`">
    <div class="cover">
      <img
        v-if="props.book.cover"
        :src="props.book.cover"
        :alt="`Portada de ${props.book.title}`"
        class="coverImg"
        loading="lazy"
      />
      <div v-else class="coverPlaceholder" :class="categoryClass(props.book.category)">
        {{ props.book.title.charAt(0).toUpperCase() }}
      </div>
    </div>

    <div class="info">
      <header class="row">
        <h3 class="title">
          <RouterLink
            class="titleLink"
            :to="{ name: 'book-details', params: { id: props.book.id } }"
          >
            {{ props.book.title }}
          </RouterLink>
        </h3>
        <button
          v-if="loginStore.currentUser?.admin"
          type="button"
          class="danger"
          @click="handleDelete"
        >
          Eliminar
        </button>
      </header>

      <p class="meta">
        <span class="author">{{ props.book.author }}</span>
        <span class="category" :class="categoryClass(props.book.category)">
          {{ props.book.category }}
        </span>
      </p>

      <p v-if="props.book.description" class="description">{{ props.book.description }}</p>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useLoginStore } from '../stores/login.store.js'

const loginStore = useLoginStore()

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
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 14px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  align-items: start;
}

/* --- Portada --- */
.cover {
  width: 80px;
  height: 112px;
  border-radius: 6px;
  overflow: hidden;
}

.coverImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.coverPlaceholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #374151;
  background: #f3f4f6;
}

.coverPlaceholder.fiction {
  background: #ede9fe;
}
.coverPlaceholder.nonFiction {
  background: #fef9c3;
}
.coverPlaceholder.science {
  background: #dcfce7;
}
.coverPlaceholder.history {
  background: #e0f2fe;
}
.coverPlaceholder.dystopia {
  background: #fee2e2;
}

/* --- Info --- */
.info {
  display: grid;
  gap: 6px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}

.title {
  margin: 0;
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
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  color: #374151;
  font-size: 0.875rem;
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
  margin: 4px 0 0;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.5;
}

.danger {
  border: 1px solid #fecaca;
  background: #fef2f2;
  color: #991b1b;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  white-space: nowrap;
}

.danger:hover {
  background: #fee2e2;
}
</style>
