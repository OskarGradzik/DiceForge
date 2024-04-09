<script setup lang="ts">
import { store } from '../../data/store'
</script>

<template>
  <div
    class="rounded-3xl border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">ARMOR</p>
    <input
      v-model="store.state.character.armor"
      type="number"
      min="0"
      class="my-1 block w-full min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-1 pl-4 text-center text-sm font-bold text-gray-600 focus:border-primary-500 focus:ring-primary-500"
      placeholder="-"
      :disabled="store.state.editMode === false"
    />
    <p class="text-xs font-bold">CLASS</p>
  </div>
</template>
