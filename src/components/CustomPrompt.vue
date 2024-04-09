<script setup lang="ts">
import { useAlert, clearAlert } from '../data/alert.ts'
import { AlertTypes } from '../utils/enums.ts'

const promptAlert = useAlert()

const hideAlert = () => {
  clearAlert()
}
</script>

<template>
  <div
    v-if="promptAlert"
    class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    @click="hideAlert"
  >
    <div class="min-w-64 rounded bg-white p-4 shadow-md dark:bg-black" @click.stop>
      <div class="flex justify-between">
        <span v-if="promptAlert.type === AlertTypes.Error" class="text-xl text-red-500">⚠</span>
        <span v-else-if="promptAlert.type === AlertTypes.Info" class="text-xl text-blue-500"
          >ℹ</span
        >
        <span v-else-if="promptAlert.type === AlertTypes.Warning" class="text-xl text-yellow-500"
          >🚫</span
        >
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="hideAlert">
          ⛌
        </button>
      </div>
      <p class="mb-4 text-center">{{ promptAlert.message }}</p>
      <button
        class="mr-2 rounded px-4 py-2 text-white"
        :class="{
          'bg-red-500': promptAlert.type === AlertTypes.Error,
          'hover:bg-red-700': promptAlert.type === AlertTypes.Error,
          'bg-blue-500': promptAlert.type === AlertTypes.Info,
          'hover:bg-blue-700': promptAlert.type === AlertTypes.Info,
          'bg-yellow-500': promptAlert.type === AlertTypes.Warning,
          'hover:bg-yellow-700': promptAlert.type === AlertTypes.Warning,
        }"
        @click="hideAlert"
      >
        OK
      </button>
    </div>
  </div>
</template>
