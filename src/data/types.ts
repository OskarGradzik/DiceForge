import { AlertTypes, NoteTypes } from '../utils/enums'

export type Note = {
  title: string
  type: NoteTypes
  description: string
}
export type DiceHistory = {
  dice: string
  roll: number
}

export type Alert = {
  type: AlertTypes
  message: string
}
