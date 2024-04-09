<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserComponent } from './utils/enums'

import TopNavbar from './components/TopNavbar.vue'
import PlayerNotesList from './components/PlayerNotesList.vue'
import UserSettings from './components/UserSettings.vue'
import ManualPage from './components/ManualPage.vue'
import CharacterSheet from './components/CharacterSheet/CharacterSheet.vue'
import DiceSimulator from './components/DiceSimulator.vue'
import CustomPrompt from './components/CustomPrompt.vue'

const activeElement = ref<UserComponent>(UserComponent.Character)

const setActiveComponent = (component: UserComponent) => {
  window.location.hash = component
  activeElement.value = component
}

onMounted(() => {
  const hash = window.location.hash.substring(1)
  if (!hash) return

  const component = Object.values(UserComponent).find((value) => value === hash)
  if (!component) return

  setActiveComponent(component)
})
</script>

<template>
  <TopNavbar :active-element="activeElement" @set-active-component="setActiveComponent" />
  <main class="min-h-[calc(100svh-4rem)]">
    <CharacterSheet v-if="activeElement == UserComponent.Character" />
    <PlayerNotesList v-if="activeElement == UserComponent.Notes" />
    <UserSettings v-if="activeElement == UserComponent.Settings" />
    <ManualPage v-if="activeElement == UserComponent.ManualPage" />
    <CustomPrompt />
    <DiceSimulator />
  </main>
</template>
