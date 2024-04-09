<script setup lang="ts">
import { store } from '../../data/store'
</script>

<template>
  <div
    class="rounded-3xl border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">WALKING</p>
    <div class="mx-auto flex">
      <input
        v-model="store.state.character.speed"
        type="number"
        min="0"
        class="my-1 block w-full min-w-0 flex-1 rounded-none rounded-s-lg border border-gray-300 bg-gray-50 p-1 pl-5 text-center text-sm font-bold text-gray-600 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
      <span
        class="rounded-s-0 my-1 inline-flex items-center rounded-e-md border border-gray-300 bg-gray-200 px-1 text-sm text-gray-500"
      >
        m
      </span>
    </div>
    <p class="text-xs font-bold">SPEED</p>
  </div>
</template>
