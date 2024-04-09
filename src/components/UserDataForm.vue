<script setup lang="ts">
import { store } from '../data/store'

const onFileInput = async (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files === null) return

  store.importState(target.files[0])
  target.value = ''
}
</script>

<template>
  <h2 class="ntext-base font-semibold leading-7 text-gray-900 dark:text-yellow-200">Data</h2>
  <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-yellow-200">
    Import, export or reset your data.
  </p>

  <div class="mt-5 flex items-center justify-center gap-x-6">
    <label
      for="fileInput"
      class="cursor-pointer rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    >
      Import
      <input
        id="fileInput"
        class="hidden"
        type="file"
        accept="application/json"
        @change="onFileInput"
      />
    </label>

    <button
      type="button"
      class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      @click="store.exportState"
    >
      Export
    </button>
    <button
      type="button"
      class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      @click="store.resetState"
    >
      Reset
    </button>
  </div>
</template>
