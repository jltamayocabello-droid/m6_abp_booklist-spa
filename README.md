# 📝 PROYECTO ABP M6: BookList SPA


![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-yellow)
![Stack](https://img.shields.io/badge/Stack-Vue.js_3_%7C_Vite_%7C_Pinia-brightgreen)
![Router](https://img.shields.io/badge/Vue_Router-4.x-blue)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 📖 Descripción del Proyecto

**Unidad solicitante:** Área de Desarrollo Frontend – Editorial Nova

La Editorial Nova desea modernizar su plataforma de gestión de libros, actualmente limitada a formularios estáticos en HTML y sin navegación entre pantallas. La propuesta es desarrollar una interfaz SPA (Single Page Application) interactiva utilizando Vue.js para registrar libros, visualizar el catálogo, filtrar por autor o categoría, y eliminar entradas, todo dentro de una experiencia fluida y profesional.

El equipo de frontend fue convocado para realizar un prototipo funcional que sirva de base para escalar el sistema completo. Como parte de este equipo, se aplicaron de forma progresiva los conceptos del módulo: componentes, formularios reactivos, eventos, rutas dinámicas y estado global con Pinia.

---

## 🎯 Objetivo

Desarrollar una SPA llamada **BookList**, que permita gestionar un listado de libros interactivo. Se espera que al finalizar el módulo, los participantes puedan:

- Comprender y aplicar los fundamentos de Vue.js con Composition API.
- Utilizar templates, eventos y formularios de forma reactiva (`v-model`).
- Implementar una estructura de rutas utilizando Vue Router.
- Gestionar estado global con Pinia y persistencia en localStorage.
- Integrar los distintos componentes en una SPA funcional y escalable.

---

## 🛠️ Requerimientos Técnicos

Este proyecto cumple con los siguientes estándares de evaluación SENCE:

- ✅ **Componentes Vue**: Estructura modular con `<script setup>` y Composition API.
- ✅ **Binding reactivo**: Uso de `v-model` en formularios de libro y login.
- ✅ **Directivas**: Uso de `v-if`, `v-for`, `v-bind`, `v-else` y modificadores.
- ✅ **Manejo de Eventos**: `@click`, `@submit.prevent`, `@keyup.enter` y emisión de eventos personalizados.
- ✅ **Rutas dinámicas**: Detalle de libro por `id` (`/books/:id`) con Vue Router.
- ✅ **Al menos 3 vistas**: Inicio, Catálogo, Detalle, Perfil, Login y NotFound (404).
- ✅ **Modularidad**: Componentes reutilizables (`BookCard`, `BookForm`, `BookList`, `AppNav`).
- ✅ **Estado global**: Pinia con `login.store.js`, `books.js` y `flash.store.js`.
- ✅ **Persistencia**: `localStorage` via `pinia-plugin-persistedstate` y `watch`.
- ✅ **Autenticación**: Navigation Guard, control de roles (admin/usuario) y sesión persistida.

---

## 📂 Documentación Técnica

### 1. Stack Tecnológico

- **Vue.js 3**: Framework principal con Composition API y `<script setup>`.
- **Vite**: Bundler y servidor de desarrollo con soporte a assets SVG.
- **Vue Router 4**: Navegación de rutas con lazy loading, aliases y Navigation Guards.
- **Pinia**: Manejo de estado global para libros, sesión y flash messages.
- **pinia-plugin-persistedstate**: Persistencia automática del store de login en `localStorage`.
- **Open Library Covers API**: Portadas reales de libros por ISBN.
- **Git/GitHub + GitHub Pages**: Control de versiones y despliegue.

### 2. Estructura del Proyecto

```
m6_abp_proyecto-final/
│
├── index.html
├── vite.config.js
├── README.md
│
├── src/
│   ├── main.js                    # Punto de entrada, registro de Pinia y plugins
│   ├── App.vue                    # Layout raíz con AppNav y RouterView
│   │
│   ├── assets/
│   │   ├── logo-editorial-nova.svg
│   │   ├── base.css
│   │   └── main.css
│   │
│   ├── components/
│   │   ├── AppNav.vue             # Navegación con links condicionales y logout
│   │   ├── BookCard.vue           # Tarjeta de libro con portada y botón eliminar (admin)
│   │   ├── BookForm.vue           # Formulario de creación con vista previa (solo admin)
│   │   └── BookList.vue           # Lista de libros con event forwarding
│   │
│   ├── views/
│   │   ├── HomeView.vue           # Inicio con logo y Flash messages globales
│   │   ├── LoginView.vue          # Formulario de autenticación
│   │   ├── BooksView.vue          # Catálogo de libros con notificaciones inline
│   │   ├── BookDetailsView.vue    # Detalle individual por ID
│   │   ├── ProfileView.vue        # Perfil del usuario autenticado
│   │   └── NotFoundView.vue       # Página 404 catch-all
│   │
│   ├── stores/
│   │   ├── books.js               # Store de libros con CRUD y persistencia
│   │   ├── login.store.js         # Store de autenticación con persist: true
│   │   └── flash.store.js         # Store de mensajes flash globales
│   │
│   └── router/
│       └── index.js               # Rutas, lazy loading y Navigation Guard
```

### 3. Arquitectura de Stores (Pinia)

#### Store `login` (`login.store.js`)

```javascript
// Estado persistido automáticamente en localStorage
const sesion = ref(false) // ¿Hay sesión activa?
const currentUser = ref(null) // Usuario actual sin contraseña

login(email, password) // Valida credenciales y establece sesión
$reset() // Cierra sesión (logout)
```

**Usuarios disponibles:**

| Email             | Contraseña | Rol           |
| ----------------- | ---------- | ------------- |
| `pedro@gmail.com` | `123456`   | Usuario       |
| `marta@gmail.com` | `123456`   | Usuario       |
| `admin@admin.com` | `admin`    | Administrador |

#### Store `books` (`books.js`)

```javascript
const books = ref([...])           // Catálogo de libros (5 por defecto)

addBook(book)                      // Agrega al catálogo
deleteBook(id)                     // Elimina por ID
getBook(id)                        // Busca por ID (computed)
```

#### Store `flash` (`flash.store.js`)

```javascript
show(message, color) // Muestra un flash message (success/error)
clear() // Limpia el estado tras 3 segundos
```

### 4. Funcionalidades Principales

#### 📚 Gestión del Catálogo (admin)

- **Agregar libros**: Formulario con título, autor, categoría y sinopsis + vista previa en tiempo real.
- **Eliminar libros**: Botón visible solo para administradores con notificación de confirmación.
- **Portadas reales**: Imágenes de Open Library por ISBN; placeholder con inicial si no hay portada.
- **Detalle de libro**: Vista individual accesible por `RouterLink` en el título.

#### 🔐 Autenticación y Control de Roles

- **Login**: Formulario con manejo de errores y mensaje de bienvenida antes de redirigir.
- **Logout**: Flash message rojo en pantalla de inicio.
- **Navigation Guard**: Protege rutas con `meta: { requiresAuth: true }`.
- **Control por rol**: `BookForm` y botón Eliminar solo visibles para administradores.

#### 💬 Sistema de Flash Messages

- **Logout**: Mensaje rojo en `HomeView` usando `flash.store.js`.
- **Login exitoso**: Mensaje verde en `LoginView` durante 1.5 segundos antes de redirigir.
- **Agregar/Eliminar libro**: Notificaciones inline en `BooksView` durante 3 segundos.

---

## 🚀 Cómo ejecutar este proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/jltamayocabello-droid/m6_abp_booklist-spa.git
cd m6_abp_booklist-spa
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 4. Uso de la aplicación

- **Sin login**: Puedes navegar e-inicios, ver el catálogo y el detalle de cada libro.
- **Login como usuario** (`pedro@gmail.com` / `123456`): Accede al perfil.
- **Login como admin** (`admin@admin.com` / `admin`): Agrega y elimina libros.

---

## 🌐 Despliegue (Demo)

**Repositorio GitHub:** 🔗 **[https://github.com/jltamayocabello-droid/m6_abp_booklist-spa](https://github.com/jltamayocabello-droid/m6_abp_booklist-spa)**

**Deploy Vercel (Recomendado):** 🔗 **[https://m6-abp-booklist-spa.vercel.app/](https://m6-abp-booklist-spa.vercel.app/)**

**Deploy GitHub Pages:** 🔗 **[https://jltamayocabello-droid.github.io/m6_abp_booklist-spa/](https://jltamayocabello-droid.github.io/m6_abp_booklist-spa/)**

---

## 💡 Justificación de Decisiones Técnicas

### Composition API con `<script setup>`

**Decisión**: Usar Composition API en lugar de Options API.

**Justificación**:

- **Colocación de lógica**: Permite agrupar lógica relacionada en lugar de separarla por opción.
- **Reutilización**: Composables y lógica encapsulada de forma natural.
- **Estándar moderno**: Es la sintaxis recomendada para Vue 3 en 2024-2025.

### Pinia en lugar de Vuex

**Decisión**: Gestión de estado con Pinia y `pinia-plugin-persistedstate`.

**Justificación**:

- **Simplicidad**: Sin mutations; las acciones modifican el estado directamente.
- **TypeScript-friendly**: Mejor inferencia de tipos (aunque el proyecto usa JS).
- **Persistencia automática**: El plugin elimina código boilerplate de `localStorage`.

### Flash Store en lugar de Router Params

**Decisión**: Store dedicado para mensajes flash (`flash.store.js`).

**Justificación**:

- **Compatibilidad**: Vue Router 4.4+ descarta params no declarados en el path.
- **Limpieza**: Evita contaminar las URLs con parámetros de notificación.
- **Reutilización**: El store puede usarse desde cualquier componente de la app.

### Portadas via Open Library API

**Decisión**: URLs de portadas desde `covers.openlibrary.org` en lugar de assets locales.

**Justificación**:

- **Peso del repositorio**: No se almacenan imágenes binarias en el repo.
- **Escalabilidad**: Fácilmente extensible al agregar libros con ISBN.
- **Fallback**: Placeholder con colores de categoría cuando no hay portada.

---

## 📱 Funcionalidades Destacadas

| Funcionalidad         | Descripción                                             |
| --------------------- | ------------------------------------------------------- |
| 📚 Catálogo de libros | Lista reactiva con portada, autor, categoría y sinopsis |
| ➕ Agregar libro      | Formulario con vista previa en tiempo real (solo admin) |
| 🗑️ Eliminar libro     | Con notificación de confirmación (solo admin)           |
| 🔍 Detalle de libro   | Vista individual accesible desde el título              |
| 🔐 Autenticación      | Login/logout con sesión persistida en localStorage      |
| 👤 Perfil de usuario  | Vista con nombre, email, rol e ID                       |
| 💬 Flash Messages     | Notificaciones temporales (3s) para todas las acciones  |
| 🛡️ Navigation Guard   | Protección de rutas según estado de autenticación       |
| 🎨 Control de roles   | Formulario y botón de eliminar visibles solo al admin   |
| 🔗 Rutas dinámicas    | Detalle por `/books/:id` con lazy loading               |
| ❌ Página 404         | Catch-all con diseño y redirección al inicio            |

---

## 🧪 Testing Manual

Para verificar el correcto funcionamiento:

1. **Catálogo sin login**: Navegar a `/books` — deben verse los 5 libros con portada.
2. **Link de detalle**: Click en el título de un libro → debe abrir `/books/:id`.
3. **Login usuario** (`pedro@gmail.com` / `123456`): El formulario de agregar NO debe aparecer.
4. **Login admin** (`admin@admin.com` / `admin`): El formulario SÍ debe aparecer; el botón "Eliminar" SÍ debe aparecer.
5. **Agregar libro**: Debe aparecer al final de la lista con notificación verde.
6. **Eliminar libro**: Debe desaparecer con notificación roja.
7. **Recargar página**: Los libros deben persistir (localStorage).
8. **Logout**: Debe redirigir a inicio con flash rojo "Sesión cerrada correctamente."
9. **Ruta protegida** (`/profile` sin login): Debe redirigir al login.
10. **Ruta inexistente** (`/xyz`): Debe mostrar la página 404.

---

## 📚 Recursos y Referencias

- [Documentación oficial de Vue 3](https://vuejs.org/guide/introduction.html)
- [Vue Router 4 - Guía oficial](https://router.vuejs.org/)
- [Pinia - Store para Vue](https://pinia.vuejs.org/)
- [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- [Open Library Covers API](https://openlibrary.org/dev/docs/api#anchor_covers)
- [MDN Web Docs - Crypto.randomUUID()](https://developer.mozilla.org/es/docs/Web/API/Crypto/randomUUID)
- [Shields.io - Badges Informativos](https://shields.io/)
- [Inter Font - Google Fonts](https://fonts.google.com/specimen/Inter)

---

## ✒️ Autor

**Jorge Tamayo Cabello**

_Estudiante de Desarrollo Front-End Trainee – SENCE_

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico para SENCE y está disponible con fines educativos.

---

## 🙏 Agradecimientos

- **SENCE** por la formación en desarrollo Front-End.
- **Open Library** por proporcionar portadas de libros de forma gratuita.
- **Comunidad Vue.js, Vite y Pinia** por la documentación exhaustiva y las herramientas del ecosistema.
- **Shields.io** por los badges de estado del proyecto.
- **Google Fonts** por la tipografía Inter.
