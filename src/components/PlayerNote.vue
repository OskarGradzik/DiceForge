<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from '../data/types'
import { NoteTypes } from '../utils/enums'

const props = defineProps({
  note: { type: Object as () => Note, required: true },
  indexNote: { type: Number, required: true },
})

const emit = defineEmits<{
  (e: 'edit-note', index: number, originalNote: Note, editedNote: Note): void
  (e: 'delete-note', index: number, noteType: NoteTypes): void
  (e: 'add-note', note: Note): void
}>()

const isEditing = ref(false)
const editedNote = ref({ ...props.note })
const originalNote = ref({ ...props.note })

const startEditing = () => {
  isEditing.value = true
  originalNote.value = { ...props.note }
}

const saveChanges = () => {
  emit('edit-note', props.indexNote, { ...originalNote.value }, { ...editedNote.value })
  isEditing.value = false
}

const cancelEditing = () => {
  isEditing.value = false
  editedNote.value = { ...props.note }
}
</script>

<template>
  <div
    class="flex h-64 flex-col rounded-lg border-2 border-solid border-gray-600 bg-gray-600 p-4 text-white dark:border-yellow-200 dark:bg-black dark:text-yellow-200"
  >
    <h1 v-if="!isEditing" class="mb-2 text-2xl font-bold">{{ props.note.title }}</h1>
    <input
      v-if="isEditing"
      v-model="editedNote.title"
      class="mb-2 w-full border-white bg-gray-600 text-2xl font-bold dark:border-yellow-200 dark:bg-black dark:text-yellow-200"
      placeholder="title"
    />

    <hr />

    <p v-if="!isEditing" class="text-sm italic text-gray-300">Typ: {{ props.note.type }}</p>
    <select
      v-if="isEditing"
      v-model="editedNote.type"
      class="mb-2 w-full bg-gray-600 text-sm italic text-gray-300"
    >
      <option value="important">Important</option>
      <option value="secondary">Secondary</option>
    </select>

    <hr />

    <p v-if="!isEditing" class="flex h-3/4 flex-auto items-center justify-center">
      {{ props.note.description }}
    </p>
    <textarea
      v-if="isEditing"
      v-model="editedNote.description"
      class="flex w-full flex-auto items-center justify-center bg-gray-600 dark:border-yellow-200 dark:bg-black dark:text-yellow-200"
      placeholder="description"
    ></textarea>

    <hr />

    <div class="flex justify-between">
      <button
        v-if="!isEditing"
        class="mt-2 w-32 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        @click="startEditing"
      >
        Edit
      </button>

      <button
        v-if="isEditing"
        class="mt-2 w-32 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        @click="saveChanges"
      >
        Save
      </button>

      <button
        v-if="isEditing"
        class="mt-2 w-32 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
        @click="cancelEditing"
      >
        Cancel
      </button>

      <button
        v-if="!isEditing"
        class="mt-2 w-32 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
        @click="emit('delete-note', props.indexNote, props.note.type as NoteTypes)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
