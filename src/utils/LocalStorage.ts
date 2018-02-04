import { TodoAppState } from "./../modules/Todo"

export const getStateFromStorage = () => {
  const parsed = JSON.parse(window.localStorage.getItem("todoapp") || "")
  if ((parsed as TodoAppState).todos !== null) {
    return parsed
  } else {
    return undefined
  }
}
export const storeStateInStorage = (state: any) => window.localStorage.setItem("todoapp", JSON.stringify(state))

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "")
    if (parsed !== null && (parsed as T) !== null) {
      return parsed
    } else {
      return defaultValue
    }
  } catch (e) {
    return defaultValue
  }
}

export function saveToStorage<T>(key: string, value: T): T {
  window.localStorage.setItem("todoapp", JSON.stringify(value))
  return value
}
