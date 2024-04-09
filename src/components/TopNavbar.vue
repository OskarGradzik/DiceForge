<script setup lang="ts">
import { ref, PropType } from 'vue'
import { UserComponent } from '../utils/enums'

const props = defineProps({
  activeElement: {
    type: String as PropType<UserComponent>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'setActiveComponent', component: UserComponent): void
}>()

const navbarComponents = [
  UserComponent.Character,
  UserComponent.Notes,
  UserComponent.ManualPage,
  UserComponent.Settings,
]
const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-gray-800 dark:bg-gray-950 dark:text-yellow-200">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-yellow-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="[isMenuOpen ? 'hidden' : 'block']"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="[isMenuOpen ? 'block' : 'hidden']"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="items-around flex flex-1 justify-between sm:items-stretch">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="mx-3 h-8 w-auto cursor-pointer sm:mx-0"
              src="../assets/logo.png"
              alt="DiceForge"
              @click="emit('setActiveComponent', navbarComponents[0])"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="component in navbarComponents"
                :key="component"
                :href="'#' + component"
                class="rounded-md px-3 py-2 text-sm font-medium"
                :class="[
                  props.activeElement == component
                    ? 'bg-gray-900 text-white dark:text-yellow-200'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                ]"
                :aria-current="props.activeElement == component ? 'page' : undefined"
                @click="emit('setActiveComponent', component)"
                >{{ component[0].toUpperCase() + component.slice(1) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="sm:hidden" :class="[isMenuOpen ? 'block' : 'hidden']">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          v-for="component in navbarComponents"
          :key="component"
          :href="'#' + component"
          class="block rounded-md px-3 py-2 text-base font-medium"
          :class="[
            props.activeElement == component
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          ]"
          :aria-current="props.activeElement == component ? 'page' : undefined"
          @click="emit('setActiveComponent', component)"
          >{{ component[0].toUpperCase() + component.slice(1) }}
        </a>
      </div>
    </div>
  </nav>
</template>
