<script setup lang="ts">
import { store } from '../../data/store'
</script>

<template>
  <div
    class="mt-auto rounded-md border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">HIT POINTS</p>
    <div class="grid grid-cols-1 gap-1 pt-2 sm:grid-cols-5">
      <div class="sm:col-span-3">
        <p class="text-xs font-semibold">CURRENT / MAX</p>
        <div class="mx-auto flex px-1 pt-1">
          <input
            v-model="store.state.character.hitpoints.current"
            type="number"
            min="0"
            :max="store.state.character.hitpoints.max"
            class="block w-full min-w-0 flex-1 rounded-none rounded-s-lg border border-gray-300 bg-gray-50 p-1.5 text-center text-lg font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            :class="{
              'bg-lime-200':
                store.state.character.hitpoints.current === store.state.character.hitpoints.max,
              'bg-red-200': store.state.character.hitpoints.current <= 0,
            }"
            placeholder="-"
            :disabled="store.state.editMode === false"
          />
          <input
            v-model="store.state.character.hitpoints.max"
            type="number"
            min="1"
            class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-center text-lg font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            :class="{
              'bg-lime-200':
                store.state.character.hitpoints.current === store.state.character.hitpoints.max,
              'bg-red-200': store.state.character.hitpoints.current <= 0,
            }"
            placeholder="-"
            :disabled="store.state.editMode === false"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <p class="text-xs font-semibold">TEMPORARY</p>
        <div class="mx-auto flex px-1 pt-1">
          <input
            v-model="store.state.character.hitpoints.temporary"
            type="number"
            min="0"
            class="block w-full min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-center text-lg font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            :class="{
              'bg-yellow-200': store.state.character.hitpoints.temporary > 0,
            }"
            placeholder="-"
            :disabled="store.state.editMode === false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
