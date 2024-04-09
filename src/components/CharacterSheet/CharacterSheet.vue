<script setup lang="ts">
import { ALL_ATTRIBUTES } from '../../data/attributes'
import CharacterSheetHero from './CharacterSheetHero.vue'
import CharacterSheetHitpoints from './CharacterSheetHitpoints.vue'
import CharacterSheetAttribute from './CharacterSheetAttribute.vue'
import CharacterSheetProficiency from './CharacterSheetProficiency.vue'
import CharacterSheetInitiative from './CharacterSheetInitiative.vue'
import CharacterSheetSpeed from './CharacterSheetSpeed.vue'
import CharacterSheetArmor from './CharacterSheetArmor.vue'
import CharacterSheetSkills from './CharacterSheetSkills.vue'
import CharacterSheetSavingThrow from './CharacterSheetSavingThrow.vue'
import CharacterSheetTriats from './CharacterSheetTriats.vue'
</script>

<template>
  <div class="w-full px-6 py-7 lg:px-8">
    <div class="grid w-full grid-cols-1 gap-3 pb-4 text-center md:grid-cols-3 2xl:grid-cols-12">
      <CharacterSheetHero class="md:col-span-2 xl:col-span-1 2xl:col-span-4" />
      <CharacterSheetHitpoints class="md:col-start-3 2xl:col-span-3 2xl:col-start-10" />
    </div>

    <div class="grid w-full grid-cols-1 gap-3 pb-4 text-center 2xl:grid-cols-2">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        <CharacterSheetAttribute
          v-for="attribute in ALL_ATTRIBUTES"
          :key="attribute.name"
          :name="attribute.name"
        />
      </div>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        <CharacterSheetProficiency class="2xl:col-start-3" />
        <CharacterSheetInitiative />
        <CharacterSheetSpeed />
        <CharacterSheetArmor />
      </div>
    </div>
    <div class="grid w-full grid-cols-1 gap-3 pb-4 text-center 2xl:grid-cols-2">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <CharacterSheetSavingThrow class="mb-auto" />
        <CharacterSheetSkills />
      </div>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-3">
        <CharacterSheetTriats class="mb-auto sm:col-start-2 2xl:col-span-2 2xl:col-start-2" />
      </div>
    </div>
  </div>
</template>
