import { Ref, readonly, ref } from 'vue'
import type { Alert } from './types'

const promptAlert: Ref<Alert | undefined> = ref(undefined)

export function triggerAlert(alert: Alert): void {
  promptAlert.value = alert
}

export function clearAlert(): void {
  promptAlert.value = undefined
}

export function useAlert(): Readonly<Ref<Alert | undefined>> {
  return readonly(promptAlert)
}
