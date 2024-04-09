<script setup lang="ts">
import { store } from '../../data/store'
import { type Skill } from '../../data/attributes'
import { getSkillModifier, getProficiencyBonus, getAttributeModifier } from '../../data/attributes'

const toggleExpertise = (skill: Skill) => {
  if (skill.expertise) skill.proficiency = true
}

const toggleProficiency = (skill: Skill) => {
  if (!skill.proficiency) skill.expertise = false
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
        <th class="p-1">SKILL</th>
        <th class="p-1">BONUS</th>
      </thead>
      <tbody>
        <tr
          v-for="skill in store.state.character.skills"
          :key="skill.name"
          class="border-b border-gray-300"
        >
          <td class="p-1 text-center">
            <input
              v-model="skill.proficiency"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              @change="toggleProficiency(skill)"
            />
          </td>
          <td class="p-1 text-center">
            <input
              v-model="skill.expertise"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              @change="toggleExpertise(skill)"
            />
          </td>
          <td class="p-1 text-center text-xs">
            {{ skill.attribute.slice(0, 3).toUpperCase() }}
          </td>
          <td class="p-1 text-sm">
            {{ skill.name }}
          </td>
          <td class="p-1 text-center text-sm font-semibold">
            {{
              getSkillModifier(
                skill,
                getProficiencyBonus(store.state.character.level),
                getAttributeModifier(
                  store.state.character.attributes.find((a) => a.name === skill.attribute)?.value
                ).value
              ).string
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
