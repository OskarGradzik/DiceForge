<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from '../data/types'
import { NoteTypes } from '../utils/enums'

const emit = defineEmits<{
  (e: 'add-note', note: Note): void
}>()

const note = ref<Note>({
  title: '',
  type: NoteTypes.Important,
  description: '',
})

const addNote = () => {
  emit('add-note', note.value)
  note.value = { title: '', type: NoteTypes.Important, description: '' }
}
</script>

<template>
  <div
    class="flex h-64 flex-col rounded-lg border-2 border-solid border-gray-600 bg-gray-600 p-4 text-white dark:border-yellow-200 dark:bg-black"
  >
    <input
      v-model="note.title"
      class="mb-2 h-10 w-full border-white bg-gray-600 text-2xl font-bold dark:border-yellow-200 dark:bg-black dark:text-yellow-200"
      placeholder="title"
    />
    <hr />

    <select v-model="note.type" class="mb-2 w-full bg-gray-600 text-sm italic text-gray-300">
      <option value="important">Important</option>
      <option value="secondary">Secondary</option>
    </select>

    <hr />

    <textarea
      v-model="note.description"
      class="flex w-full flex-auto items-center justify-center bg-gray-600 dark:border-yellow-200 dark:bg-black dark:text-yellow-200"
      placeholder="description"
    ></textarea>
    <hr />

    <div>
      <button
        type="button"
        class="mt-2 w-32 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
        @click="addNote"
      >
        Save
      </button>
    </div>
  </div>
</template>
