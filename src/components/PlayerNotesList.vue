<script setup lang="ts">
import PlayerNote from './PlayerNote.vue'
import CreatePlayerNote from './CreatePlayerNote.vue'
import type { Note } from '../data/types'
import { store } from '../data/store'
import { AlertTypes, NoteTypes } from '../utils/enums'
import { triggerAlert } from '../data/alert'
import { computed } from 'vue'

const notes = store.state.notes
const importantNotes = computed(() => notes.filter((note) => note.type === 'important'))
const secondaryNotes = computed(() => notes.filter((note) => note.type === 'secondary'))

const addNote = (note: Note) => {
  if (note.title === '' || note.description === '') {
    triggerAlert({ type: AlertTypes.Info, message: 'Please fill out all fields' })
    return
  }
  notes.push(note)
}

const editNote = (index: number, originalNote: Note, editedNote: Note) => {
  if (editedNote.title === '' || editedNote.description === '') {
    triggerAlert({ type: AlertTypes.Info, message: 'Please fill out all fields' })
    return
  }

  if (originalNote.type === editedNote.type) {
    if (editedNote.type === NoteTypes.Important) {
      const originalIndex = notes.indexOf(importantNotes.value[index])
      if (originalIndex !== -1) {
        notes[originalIndex] = editedNote
      }
    } else {
      const originalIndex = notes.indexOf(secondaryNotes.value[index])
      if (originalIndex !== -1) {
        notes[originalIndex] = editedNote
      }
    }
  } else {
    if (editedNote.type === NoteTypes.Important) {
      const originalIndex = notes.indexOf(secondaryNotes.value[index])
      if (originalIndex !== -1) {
        notes.splice(originalIndex, 1)
        notes.push(editedNote)
      }
    } else {
      const originalIndex = notes.indexOf(importantNotes.value[index])
      if (originalIndex !== -1) {
        notes.splice(originalIndex, 1)
        notes.push(editedNote)
      }
    }
  }
}

const deleteNote = (index: number, noteType: NoteTypes) => {
  if (noteType === NoteTypes.Important) {
    const originalIndex = notes.indexOf(importantNotes.value[index])
    if (originalIndex !== -1) {
      notes.splice(originalIndex, 1)
    }
  } else {
    const originalIndex = notes.indexOf(secondaryNotes.value[index])
    if (originalIndex !== -1) {
      notes.splice(originalIndex, 1)
    }
  }
  triggerAlert({ type: AlertTypes.Info, message: 'Note deleted' })
}
</script>

<template>
  <div class="mar ml-2 mr-2 mt-2 grid gap-4 lg:grid-cols-3">
    <div
      class="grid gap-4 rounded-lg border-2 border-solid border-gray-600 px-6 py-4 text-center lg:grid-cols-1"
    >
      <h2 class="mb-4 text-2xl font-bold text-gray-800">Important Notes</h2>
      <PlayerNote
        v-for="(note, index) in importantNotes"
        :key="index"
        :note="note"
        :index-note="index"
        @edit-note="editNote"
        @delete-note="deleteNote"
      />
    </div>

    <div class="rounded-lg border-2 border-solid border-gray-600 text-center lg:col-span-2">
      <h2 class="mb-4 px-6 text-2xl font-bold text-gray-800">Secondary Notes</h2>
      <div class="grid gap-4 px-6 py-4 lg:grid-cols-2">
        <PlayerNote
          v-for="(note, index) in secondaryNotes"
          :key="index"
          :note="note"
          :index-note="index"
          @edit-note="editNote"
          @delete-note="deleteNote"
        />
        <CreatePlayerNote @add-note="addNote" />
      </div>
    </div>
  </div>
</template>
