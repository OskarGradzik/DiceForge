import {
  A_STRENGTH,
  A_DEXTERITY,
  A_CONSTITUTION,
  A_INTELLIGENCE,
  A_WISDOM,
  A_CHARISMA,
  S_ACROBATICS,
  S_ANIMAL_HANDLING,
  S_ARCANA,
  S_ATHLETICS,
  S_DECEPTION,
  S_HISTORY,
  S_INSIGHT,
  S_INTIMIDATION,
  S_INVESTIGATION,
  S_MEDICINE,
  S_NATURE,
  S_PERCEPTION,
  S_PERFORMANCE,
  S_PERSUASION,
  S_RELIGION,
  S_SLEIGHT_OF_HAND,
  S_STEALTH,
  S_SURVIVAL,
} from './constants'

export type Hitpoints = {
  current: number
  max: number
  temporary: number
}

export type Triats = {
  age: number
  hair: string
  eyes: string
  skin: string
  height: number
  weight: number
}

export type Skill = {
  name: string
  attribute: string
  proficiency: boolean
  expertise: boolean
}

export type Attribute = {
  name: string
  value: number
  proficiency: boolean
  expertise: boolean
}

export const BASE_ATTRIBUTE_VALUE = 8
export const ALL_ATTRIBUTES: Attribute[] = [
  { name: A_STRENGTH, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
  { name: A_DEXTERITY, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
  { name: A_CONSTITUTION, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
  { name: A_INTELLIGENCE, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
  { name: A_WISDOM, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
  { name: A_CHARISMA, value: BASE_ATTRIBUTE_VALUE, proficiency: false, expertise: false },
]

export const getAttributeModifier = (attributeValue?: number) => {
  if (!attributeValue) return { value: 0, string: '' }

  const attributeModifier = Math.floor((attributeValue - 10) / 2)
  let attributeModifierString = ''

  if (attributeModifier < 0) {
    attributeModifierString = `${attributeModifier}`
  } else {
    attributeModifierString = `+${attributeModifier}`
  }

  return { value: attributeModifier, string: attributeModifierString }
}

export const getProficiencyBonus = (level: number) => {
  if (level < 5) return 2
  if (level < 9) return 3
  if (level < 13) return 4
  if (level < 17) return 5
  return 6
}

export const ALL_SKILLS: Skill[] = [
  { name: S_ACROBATICS, attribute: A_DEXTERITY, proficiency: false, expertise: false },
  { name: S_ANIMAL_HANDLING, attribute: A_WISDOM, proficiency: false, expertise: false },
  { name: S_ARCANA, attribute: A_INTELLIGENCE, proficiency: false, expertise: false },
  { name: S_ATHLETICS, attribute: A_STRENGTH, proficiency: false, expertise: false },
  { name: S_DECEPTION, attribute: A_CHARISMA, proficiency: false, expertise: false },
  { name: S_HISTORY, attribute: A_INTELLIGENCE, proficiency: false, expertise: false },
  { name: S_INSIGHT, attribute: A_WISDOM, proficiency: false, expertise: false },
  { name: S_INTIMIDATION, attribute: A_CHARISMA, proficiency: false, expertise: false },
  { name: S_INVESTIGATION, attribute: A_INTELLIGENCE, proficiency: false, expertise: false },
  { name: S_MEDICINE, attribute: A_WISDOM, proficiency: false, expertise: false },
  { name: S_NATURE, attribute: A_INTELLIGENCE, proficiency: false, expertise: false },
  { name: S_PERCEPTION, attribute: A_WISDOM, proficiency: false, expertise: false },
  { name: S_PERFORMANCE, attribute: A_CHARISMA, proficiency: false, expertise: false },
  { name: S_PERSUASION, attribute: A_CHARISMA, proficiency: false, expertise: false },
  { name: S_RELIGION, attribute: A_INTELLIGENCE, proficiency: false, expertise: false },
  { name: S_SLEIGHT_OF_HAND, attribute: A_DEXTERITY, proficiency: false, expertise: false },
  { name: S_STEALTH, attribute: A_DEXTERITY, proficiency: false, expertise: false },
  { name: S_SURVIVAL, attribute: A_WISDOM, proficiency: false, expertise: false },
]

export const getSkillModifier = (
  skill: Skill | Attribute,
  proficiencyBonus: number,
  attributeModifier: number
) => {
  let skillModifier = attributeModifier
  if (skill.proficiency) skillModifier += proficiencyBonus
  if (skill.expertise) skillModifier += proficiencyBonus

  let skillModifierString = ''
  if (skillModifier < 0) {
    skillModifierString = `${skillModifier}`
  } else {
    skillModifierString = `+${skillModifier}`
  }

  return { value: skillModifier, string: skillModifierString }
}
