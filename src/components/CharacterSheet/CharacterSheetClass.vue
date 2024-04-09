<script setup lang="ts">
import { store } from '../../data/store'
</script>

<template>
  <div class="rounded-md border-2 border-primary-600 bg-gray-100 px-2 py-3">
    <p class="text-xs font-bold">CHARACTER</p>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Name
      </span>
      <input
        v-model="store.state.character.name"
        spellcheck="false"
        type="text"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-lg font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Race
      </span>
      <input
        v-model="store.state.character.race"
        spellcheck="false"
        type="text"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-lg font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
  </div>
</template>
