export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "")
    if (parsed !== null && (parsed as T) !== null) {
      return parsed
    } else {
      console.error("error loading from local storage", parsed)
      return defaultValue
    }
  } catch (e) {
    return defaultValue
  }
}

export function saveToStorage<T>(key: string, value: T): T {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error("error saving to local storage", e)
  }
  return value
}
