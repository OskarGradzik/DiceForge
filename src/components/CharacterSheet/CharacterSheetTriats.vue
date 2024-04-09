<script setup lang="ts">
import { store } from '../../data/store'
</script>

<template>
  <div class="rounded-md border-2 border-primary-600 bg-gray-100 px-2 py-3">
    <p class="text-xs font-bold">TRIATS</p>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Age
      </span>
      <input
        v-model="store.state.character.triats.age"
        spellcheck="false"
        type="number"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Hair
      </span>
      <input
        v-model="store.state.character.triats.hair"
        spellcheck="false"
        type="text"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Eyes
      </span>
      <input
        v-model="store.state.character.triats.eyes"
        spellcheck="false"
        type="text"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Skin
      </span>
      <input
        v-model="store.state.character.triats.skin"
        spellcheck="false"
        type="text"
        class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Height
      </span>
      <input
        v-model="store.state.character.triats.height"
        spellcheck="false"
        type="number"
        class="block w-full min-w-0 flex-1 rounded-none border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
      <span
        class="rounded-s-0 inline-flex items-center rounded-e-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        m
      </span>
    </div>
    <div class="mx-auto flex px-1 pt-3">
      <span
        class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        Weight
      </span>
      <input
        v-model="store.state.character.triats.weight"
        spellcheck="false"
        type="number"
        class="block w-full min-w-0 flex-1 rounded-none border border-gray-300 bg-gray-50 p-1.5 text-base font-semibold text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
      <span
        class="rounded-s-0 inline-flex items-center rounded-e-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        kg
      </span>
    </div>
  </div>
</template>
