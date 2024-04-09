<script setup lang="ts">
import { store } from '../data/store'

import { ref } from 'vue'

const diceResult = ref<number | null>(null)
const selectedDice = ref<string>('D6')
const diceTypes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']

const Visibility = ref(true)

const rollDice = () => {
  const maxNumber = parseInt(selectedDice.value.slice(1), 10) || 6
  diceResult.value = Math.floor(Math.random() * maxNumber) + 1
  store.state.diceRollHistory.unshift({ dice: selectedDice.value, roll: diceResult.value })
  if (store.state.diceRollHistory.length > 5) store.state.diceRollHistory.length = 5
}

const toggleVisibility = () => {
  Visibility.value = !Visibility.value
}

const selectDice = (diceType: string) => {
  selectedDice.value = diceType
}
</script>
<template>
  <div class="fixed bottom-0 flex h-auto items-center">
    <div v-if="Visibility" class="rounded bg-white p-2 text-center dark:bg-gray-700">
      <h2>Dice Simulator</h2>

      <div class="dice-options flex">
        <img
          v-for="diceType in diceTypes"
          :key="diceType"
          class="h-10 hover:cursor-pointer"
          :src="`src/assets/${diceType}.png`"
          :alt="diceType"
          :style="{
            filter:
              selectedDice === diceType
                ? 'invert(37%) sepia(27%) saturate(5993%) hue-rotate(342deg) brightness(98%) contrast(85%)'
                : 'none',
          }"
          @click="selectDice(diceType)"
        />
      </div>

      <button
        class="mt-2 w-32 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
        @click="rollDice"
      >
        Roll
      </button>

      <p>
        Result: <span class="font-semibold text-primary-600">{{ diceResult }}</span>
      </p>
    </div>
    <div class="mt-auto">
      <button
        class="rounded bg-green-500 p-2 text-white hover:bg-green-700"
        @click="toggleVisibility"
      >
        <span v-if="Visibility">🡸</span>
        <span v-else>🡺</span>
      </button>
    </div>
  </div>

  <div
    v-if="Visibility && store.state.diceRollHistory.length > 0"
    class="fixed bottom-0 right-0 rounded bg-white p-2 text-center dark:bg-gray-700"
  >
    <h3>Roll History</h3>
    <div>
      <ul>
        <li v-for="(roll, index) in store.state.diceRollHistory" :key="index">
          {{ roll.dice }}:
          <span class="font-semibold text-primary-600">{{ roll?.roll }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
