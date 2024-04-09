<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../../data/store'
import { getAttributeModifier } from '../../data/attributes'

const props = defineProps({
  name: { type: String, required: true },
})

const attribute = ref(store.state.character.attributes.find((a) => a.name === props.name))
</script>

<template>
  <div
    v-if="attribute"
    class="rounded-md border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <p class="text-xs font-bold">{{ attribute.name.toUpperCase() }}</p>
    <div class="mx-auto flex px-1 pt-3">
      <input
        v-model="attribute.value"
        type="number"
        min="1"
        class="block w-full min-w-0 flex-1 rounded-none rounded-s-lg border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
        placeholder="-"
        :disabled="store.state.editMode === false"
      />
      <span
        class="rounded-s-0 inline-flex items-center rounded-e-md border border-gray-300 bg-gray-200 px-2 text-sm text-gray-500"
      >
        {{ getAttributeModifier(attribute.value).string }}
      </span>
    </div>
  </div>
</template>
