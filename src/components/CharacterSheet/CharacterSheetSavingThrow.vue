<script setup lang="ts">
import { store } from '../../data/store'
import { type Attribute } from '../../data/attributes'
import { getSkillModifier, getProficiencyBonus, getAttributeModifier } from '../../data/attributes'

const toggleExpertise = (attribute: Attribute) => {
  if (attribute.expertise) attribute.proficiency = true
}

const toggleProficiency = (attribute: Attribute) => {
  if (!attribute.proficiency) attribute.expertise = false
}
</script>

<template>
  <div
    class="rounded-md border-2 border-primary-600 bg-gray-100 px-2 py-3 dark:bg-black dark:text-yellow-200"
  >
    <table class="w-full text-left">
      <thead class="border-b border-gray-300 text-center text-xs">
        <th class="p-1">PROF</th>
        <th class="p-1">EXP</th>
        <th class="p-1">MOD</th>
        <th class="p-1">SAVING THROW</th>
        <th class="p-1">BONUS</th>
      </thead>
      <tbody>
        <tr
          v-for="attribute in store.state.character.attributes"
          :key="attribute.name"
          class="border-b border-gray-300"
        >
          <td class="p-1 text-center">
            <input
              v-model="attribute.proficiency"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              @change="toggleProficiency(attribute)"
            />
          </td>
          <td class="p-1 text-center">
            <input
              v-model="attribute.expertise"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              @change="toggleExpertise(attribute)"
            />
          </td>
          <td class="p-1 text-center text-xs">
            {{ attribute.name.slice(0, 3).toUpperCase() }}
          </td>
          <td class="p-1 text-sm">
            {{ attribute.name[0].toUpperCase() + attribute.name.slice(1) }}
          </td>
          <td class="p-1 text-center text-sm font-semibold">
            {{
              getSkillModifier(
                attribute,
                getProficiencyBonus(store.state.character.level),
                getAttributeModifier(attribute.value).value
              ).string
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
