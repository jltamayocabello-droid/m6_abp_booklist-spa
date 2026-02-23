<template>
  <article class="libro" :title="`ID: ${props.libro.id}`">
    <h3 class="titulo">{{ props.libro.titulo }}</h3>
    <p class="meta">
      <span class="autor">Autor: {{ props.libro.autor }}</span>
      <span class="categoria" :class="categoriaClass(props.libro.categoria)"
        >Categoria: {{ props.libro.categoria }}</span
      >
    </p>
  </article>
</template>

<script setup>
const props = defineProps({
  libro: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.libro {
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}
.titulo {
  margin: 0 0 6px;
}
.meta {
  margin: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: #374151;
}
.categoria {
  padding: 2px 8px;
  border-radius: 999px;
  background: #f3f4f6;
}
.categoria.ficcion {
  background: #ede9fe;
}
.categoria.distopia {
  background: #fee2e2;
}
.categoria.historia {
  background: #e0f2fe;
}
.categoria.ciencia {
  background: #dcfce7;
}
</style>
