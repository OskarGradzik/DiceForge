<script setup lang="ts">
import { onMounted } from 'vue'
import { store } from '../data/store'
import UserDataForm from './UserDataForm.vue'

const toggleDarkMode = () => {
  store.state.isDarkMode = !store.state.isDarkMode

  if (store.state.isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  if (store.state.isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="relative px-6 py-7 sm:mx-auto sm:w-full sm:max-w-md lg:px-8">
    <div
      :class="['border-gray-900/10 dark:border-yellow-200']"
      class="border-b border-t pb-7 pt-7 text-center"
    >
      <UserDataForm />
    </div>

    <div class="mt-4 px-4">
      <button
        class="mx-auto block rounded bg-black px-4 py-2 text-yellow-200 transition duration-150 ease-in-out hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-600"
        style="max-width: 200px"
        @click="toggleDarkMode"
      >
        {{ store.state.isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
  </div>
</template>
