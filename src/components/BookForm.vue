<template>
  <section class="card">
    <h2>Agregar Libro</h2>

    <form class="form" @submit.prevent="handleSubmit">
      <label class="field">
        <span>Titulo</span>
        <input type="text" v-model.trim="newBook.title" placeholder="Ej. 1984" />
      </label>
      <label class="field">
        <span>Autor *</span>
        <input v-model.trim="newBook.author" type="text" placeholder="Ej: George Orwell" />
      </label>

      <label class="field">
        <span>Categoría *</span>
        <select v-model="newBook.category">
          <option value="" disabled>Selecciona una categoría</option>
          <option v-for="category in categoryOptions" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </label>

      <label class="field">
        <span>Sinopsis (opcional)</span>
        <textarea
          v-model.trim="newBook.description"
          rows="3"
          placeholder="Escribe una breve sinopsis"
        ></textarea>
      </label>

      <button class="primary" type="submit" :disabled="!isFormValid">Guardar</button>
      <p v-if="!isFormValid" class="hint">Completa título, autor y categoría para guardar.</p>
    </form>

    <div class="preview">
      <h3>Vista Previa</h3>
      <p><strong>Título:</strong> {{ newBook.title }}</p>
      <p><strong>Autor:</strong> {{ newBook.author }}</p>
      <p><strong>Categoria:</strong> {{ newBook.category }}</p>
      <p v-if="newBook.description"><strong>Sinopsis:</strong> {{ newBook.description }}</p>
      <p v-else class="muted">Sin sinopsis</p>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from 'vue'

const emit = defineEmits(['bookCreated'])

const categoryOptions = ['Ficción', 'No Ficción', 'Ciencia', 'Historia', 'Distopía']

const newBook = reactive({
  title: '',
  author: '',
  category: '',
  description: '',
})

const isFormValid = computed(() => {
  return newBook.title.trim() !== '' && newBook.author.trim() !== '' && newBook.category !== ''
})

function resetForm() {
  Object.assign(newBook, {
    title: '',
    author: '',
    category: '',
    description: '',
  })
}

function handleSubmit() {
  if (!isFormValid.value) return

  emit('bookCreated', {
    id: crypto.randomUUID(),
    title: newBook.title.trim(),
    author: newBook.author.trim(),
    category: newBook.category,
    description: newBook.description.trim(),
  })

  resetForm()
}
</script>



<style scoped>
.card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; }
.form { display: grid; gap: 12px; }
.field { display: grid; gap: 6px; }
input, select, textarea { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; }
.primary { padding: 10px 12px; border: 0; border-radius: 8px; background: #111827; color: white; cursor: pointer; }
.primary:disabled { opacity: 0.5; cursor: not-allowed; }
.hint { margin: 0; color: #6b7280; }
.preview { margin-top: 16px; padding-top: 12px; border-top: 1px solid #e5e7eb; }
.muted { color: #6b7280; }
</style>
