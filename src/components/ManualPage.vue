<script setup lang="ts">
import { ref } from 'vue'
import {
  M_MAIN_HEADER,
  M_MAIN_INTRODUCTION,
  M_ATTRIBUTES_HEADER,
  M_ATTRIBUTES_INTRODUCTION,
} from '../data/manual.ts'

import { M_STRENGTH, M_STRENGTH_DESC } from '../data/manual.ts'
import { M_DEXTERITY, M_DEXTERITY_DESC } from '../data/manual.ts'
import { M_CONSTITUTION, M_CONSTITUTION_DESC } from '../data/manual.ts'
import { M_INTELLIGENCE, M_INTELLIGENCE_DESC } from '../data/manual.ts'
import { M_WISDOM, M_WISDOM_DESC } from '../data/manual.ts'
import { M_CHARISMA, M_CHARISMA_DESC } from '../data/manual.ts'
import { M_RULES_HEADER, M_RULES } from '../data/manual.ts'
import {
  M_CORE_MECHANICS_HEADER,
  M_DICE_ROLLING,
  M_DICE_ROLLING_DESC,
  M_CHARACTER_CREATION,
  M_CHARACTER_CREATION_DESC,
  M_ABILITY_CHECKS,
  M_ABILITY_CHECKS_DESC,
  M_COMBAT_SYSTEM,
  M_COMBAT_SYSTEM_DESC,
  M_SPELLCASTING,
  M_SPELLCASTING_DESC,
  M_EXPERIENCE_AND_LEVELING,
  M_EXPERIENCE_AND_LEVELING_DESC,
} from '../data/manual.ts'

interface ElementItem {
  text: string
  content: string
}

const heroAttributes: ElementItem[] = [
  { text: M_STRENGTH, content: M_STRENGTH_DESC },
  { text: M_DEXTERITY, content: M_DEXTERITY_DESC },
  { text: M_CONSTITUTION, content: M_CONSTITUTION_DESC },
  { text: M_INTELLIGENCE, content: M_INTELLIGENCE_DESC },
  { text: M_WISDOM, content: M_WISDOM_DESC },
  { text: M_CHARISMA, content: M_CHARISMA_DESC },
]

const isModalOpen = ref(false)
const modalContent = ref({ text: '', content: '' })

const openModal = (item: ElementItem) => {
  modalContent.value = { ...item }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="flex flex-wrap p-3 text-justify font-medium">
    <div class="w-full">
      <div class="flex">
        <div class="m-3 w-1/2 rounded-3xl border-4 border-black p-8 dark:border-yellow-200">
          <h1 class="mb-2 text-4xl font-bold uppercase">{{ M_MAIN_HEADER }}</h1>
          <div class="mb-4 border-b-4 border-solid border-black dark:border-yellow-200"></div>
          <p class="text-lg">{{ M_MAIN_INTRODUCTION }}</p>
        </div>
        <div class="m-3 w-1/2 rounded-3xl border-4 border-black p-8 dark:border-yellow-200">
          <h2 class="mb-2 text-4xl font-bold uppercase">{{ M_ATTRIBUTES_HEADER }}</h2>
          <div class="mb-4 border-b-4 border-solid border-black dark:border-yellow-200"></div>
          <p class="text-lg">{{ M_ATTRIBUTES_INTRODUCTION }}</p>
          <ul class="m-4 list-disc">
            <li v-for="item in heroAttributes" :key="item.text">
              <a
                href="#"
                class="font-extrabold uppercase text-primary-700 no-underline hover:text-primary-800"
                @click.prevent="openModal(item)"
                >{{ item.text }}</a
              >
            </li>
          </ul>

          <div
            v-if="isModalOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
            :onclick="() => closeModal()"
          >
            <div
              class="w-1/2 rounded-lg border-2 border-zinc-950 bg-white p-8 dark:border-yellow-200 dark:bg-black"
              :onclick="(e: any) => e.stopPropagation()"
            >
              <h2 class="text-2xl font-bold uppercase">{{ modalContent.text }}</h2>
              <div
                class="mb-6 border-b-4 border-solid border-black dark:border-yellow-200 dark:bg-black"
              ></div>
              <p>{{ modalContent.content }}</p>
              <button
                class="mt-4 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                @click="closeModal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full p-4">
        <h1 class="mb-2 text-4xl font-bold uppercase">{{ M_RULES_HEADER }}</h1>
        <div class="mb-4 border-b-4 border-solid border-black dark:border-yellow-200"></div>
        <p class="text-lg">{{ M_RULES }}</p>
      </div>
      <div class="w-full p-4">
        <h1 class="mb-2 text-4xl font-bold uppercase">{{ M_CORE_MECHANICS_HEADER }}</h1>
        <div class="mb-4 border-b-4 border-solid border-black dark:border-yellow-200"></div>
        <p class="text-lg">
          <span class="font-bold capitalize">{{ M_DICE_ROLLING }}</span> {{ M_DICE_ROLLING_DESC }}
        </p>
        <p class="pt-4 text-lg">
          <span class="font-bold capitalize">{{ M_CHARACTER_CREATION }}</span>
          {{ M_CHARACTER_CREATION_DESC }}
        </p>
        <p class="pt-4 text-lg">
          <span class="font-bold capitalize">{{ M_ABILITY_CHECKS }}</span>
          {{ M_ABILITY_CHECKS_DESC }}
        </p>
        <p class="pt-4 text-lg">
          <span class="font-bold capitalize">{{ M_COMBAT_SYSTEM }}</span> {{ M_COMBAT_SYSTEM_DESC }}
        </p>
        <p class="pt-4 text-lg">
          <span class="font-bold capitalize">{{ M_SPELLCASTING }}</span> {{ M_SPELLCASTING_DESC }}
        </p>
        <p class="pt-10 text-lg">
          <span class="font-bold capitalize">{{ M_EXPERIENCE_AND_LEVELING }}</span>
          {{ M_EXPERIENCE_AND_LEVELING_DESC }}
        </p>
      </div>
    </div>
  </div>
</template>
