// browserStorage is not an ideal name, but we can change it later.

// Let's test to make sure that localStorage actually works. For example, in
// Safari with private browsing on, window.localStorage exists but actually
// trying to use it throws.
// Accessing window.localStorage can also immediately throw an error in IE (#1291).

let browserStorage: BrowserStorage

const testKey = `_localstorage_test_${Date.now()}`
let retrieved
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(testKey, testKey)
    retrieved = window.localStorage.getItem(testKey)
    window.localStorage.removeItem(testKey)
  }
} catch (error) {
  // ... ignore
}
if (testKey === retrieved) {
  browserStorage = {
    getAll: async function() {
      return Object.keys(window.localStorage).reduce(
        (acc, key) => ({
          ...acc,
          [key]: window.localStorage.getItem(key),
        }),
        {}
      )
    },
    getItem: async function(key) {
      return window.localStorage.getItem(key)
    },
    removeItem: async function(key) {
      window.localStorage.removeItem(key)
    },
    setItem: async function(key, value) {
      window.localStorage.setItem(key, value)
    },
  }
} else {
  const data = {}

  browserStorage = {
    getAll: async function() {
      return data
    },
    getItem: async function(key) {
      const value = data[key]
      if (value === undefined) {
        return null
      }
      return value
    },
    removeItem: async function(key) {
      delete data[key]
    },
    setItem: async function(key, val) {
      data[key] = val
    },
  }
}

export interface BrowserStorage {
  getAll(): Promise<any>
  getItem(key: string): Promise<any>
  setItem(key: string, storedValue: any): Promise<void>
  removeItem(key: string): Promise<any>
}

export default browserStorage
