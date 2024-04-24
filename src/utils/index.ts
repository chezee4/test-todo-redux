export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = <T>(key: string): T => {
  const item = localStorage.getItem(key)
  if (!item) return [] as T
  return JSON.parse(item)
}
