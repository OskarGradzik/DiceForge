import { watch, reactive } from 'vue'
import type { Note, DiceHistory } from './types'
import {
  ALL_ATTRIBUTES,
  ALL_SKILLS,
  type Hitpoints,
  type Triats,
  type Skill,
  type Attribute,
} from './attributes'

type Store = {
  editMode: boolean
  notes: Note[]
  diceRollHistory: DiceHistory[]
  character: {
    name: string
    race: string
    class: string
    level: number
    triats: Triats
    hitpoints: Hitpoints
    armor: number
    speed: number
    attributes: Attribute[]
    skills: Skill[]
  }
  isDarkMode: boolean
}

function Store() {
  const defaultState: Store = {
    editMode: true,
    notes: [] as Note[],
    diceRollHistory: [] as DiceHistory[],
    character: {
      name: 'Character',
      race: 'Human',
      class: 'Wizard',
      level: 1,
      triats: { age: 21, hair: '', eyes: '', skin: '', height: 175, weight: 75 },
      hitpoints: { current: 8, max: 8, temporary: 0 },
      armor: 10,
      speed: 9,
      attributes: ALL_ATTRIBUTES,
      skills: ALL_SKILLS,
    },
    isDarkMode: false,
  }

  const localState = localStorage.getItem('state')
  const state: Store = reactive<Store>(localState != null ? JSON.parse(localState) : defaultState)

  function initializeMissingStateKeys() {
    Object.entries(defaultState).forEach(([key, value]) => {
      // @ts-ignore
      if (state[key] === undefined) state[key] = value
    })
  }

  const importState = (file: File) => {
    if (!file) return

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = async () => {
      const content = reader.result
      if (!content) return

      try {
        const jsonObj: Store = JSON.parse(content.toString())
        Object.assign(state, jsonObj)
        initializeMissingStateKeys()
      } catch (e) {
        console.error('Failed to parse state:', e)
      }
    }
  }

  const exportState = () => {
    const data = state
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${state.character.name}.json`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const resetState = () => {
    Object.assign(state, JSON.parse(JSON.stringify(defaultState)))
  }

  watch(state, () => {
    localStorage.setItem('state', JSON.stringify(state))
  })

  initializeMissingStateKeys()
  localStorage.setItem('state', JSON.stringify(state))

  if (state.isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return { state, importState, exportState, resetState }
}

export const store = Store()
