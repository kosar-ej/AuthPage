export function getStorage(key: string) {
  if (key) {
    try {
      let result: string | null = null
      if (typeof window !== 'undefined') {
        result = localStorage.getItem(key)
      }

      if (result === null) {
        return false
      }

      return JSON.parse(result)
    } catch (exception) {
      return {
        exception,
      }
    }
  }
  return false
}

export function setStorage(key: string, data: any) {
  if (key) {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data))
      }
    } catch (exception) { }
  }
}
