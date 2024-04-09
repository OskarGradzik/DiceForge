<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../../data/store'
import { A_DEXTERITY } from '../../data/constants'
import { getAttributeModifier } from '../../data/attributes'

const attribute = ref(store.state.character.attributes.find((a) => a.name === A_DEXTERITY))
</script>

<template>
  <div
    v-if="attribute"
    class="rounded-3xl border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">INITIATIVE</p>
    <p class="p-1 text-center text-xl font-bold text-gray-500">
      {{ getAttributeModifier(attribute.value).string }}&nbsp;
    </p>
    <p class="text-xs font-bold">BONUS</p>
  </div>
</template>
