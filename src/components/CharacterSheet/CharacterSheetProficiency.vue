<script setup lang="ts">
import { store } from '../../data/store'
import { getProficiencyBonus } from '../../data/attributes'
</script>

<template>
  <div
    class="rounded-3xl border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">PROFICIENCY</p>
    <p class="p-1 text-center text-xl font-bold text-gray-500">
      <span>+</span>{{ getProficiencyBonus(store.state.character.level) }}&nbsp;
    </p>
    <p class="text-xs font-bold">BONUS</p>
  </div>
</template>
