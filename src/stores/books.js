import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'booklist-books'

const defaultBooks = [
  {
    id: crypto.randomUUID(),
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Ficción',
    description:
      'La historia multi-generacional de la familia Buendía en el pueblo místico de Macondo.',
  },
  {
    id: crypto.randomUUID(),
    title: '1984',
    author: 'George Orwell',
    category: 'Distopía',
    description:
      'Una visión aterradora de un estado totalitario donde el pensamiento libre está prohibido.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Interstellar',
    author: 'Christopher Nolan',
    category: 'Ciencia',
    description:
      'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'No Ficción',
    description:
      'Un recorrido por la historia de la humanidad, desde los primeros humanos hasta los avances del siglo XXI.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Breve historia del tiempo',
    author: 'Stephen Hawking',
    category: 'Historia',
    description:
      'Una exploración de los orígenes del universo, los agujeros negros y la naturaleza del tiempo.',
  },
]

export const useBookStore = defineStore('books', () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  const books = ref(stored ? JSON.parse(stored) : defaultBooks)

  watch(books, (val) => localStorage.setItem(STORAGE_KEY, JSON.stringify(val)), { deep: true })

  function addBook(book) {
    books.value = [book, ...books.value]
  }

  function deleteBook(id) {
    books.value = books.value.filter((b) => b.id !== id)
  }

  function getBook(id) {
    return books.value.find((b) => b.id === id) ?? null
  }

  return { books, addBook, deleteBook, getBook }
})
