import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'booklist-books-v2'

const defaultBooks = [
  {
    id: crypto.randomUUID(),
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Ficción',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060883287-M.jpg',
    description:
      'La historia multi-generacional de la familia Buendía en el pueblo místico de Macondo.',
  },
  {
    id: crypto.randomUUID(),
    title: '1984',
    author: 'George Orwell',
    category: 'Distopía',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg',
    description:
      'Una visión aterradora de un estado totalitario donde el pensamiento libre está prohibido.',
  },
  {
    id: crypto.randomUUID(),
    title: 'El marciano',
    author: 'Andy Weir',
    category: 'Ciencia',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553418026-M.jpg',
    description:
      'Un astronauta queda abandonado en Marte y debe usar sus conocimientos científicos para sobrevivir hasta que llegue un rescate.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'No Ficción',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-M.jpg',
    description:
      'Un recorrido por la historia de la humanidad, desde los primeros humanos hasta los avances del siglo XXI.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Breve historia del tiempo',
    author: 'Stephen Hawking',
    category: 'Historia',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553380163-M.jpg',
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
