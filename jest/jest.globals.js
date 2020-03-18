import 'jest-styled-components'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import 'babel-polyfill'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()
