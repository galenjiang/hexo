function each(func) {
  return (obj) => {
    for ([k, v] of Object.entries(obj)) {
      func(v, k)
    }
  }
}

class ReactiveState {
  __state: any
  constructor(props = {}) {
    this.__state = {}
    this.setProperties(props)
  }

  setProperties(obj) {
    const self = this
    each((properties, key) => {
      self.__state[`__${key}`] = properties.default
      Reflect.defineProperty(self.__state, key, {
        set(value) {
          self.__state[`__${key}`] = value
          properties.reflect(value)
        },
        get() {
          return self.__state[`__${key}`]
        }
      })
    })(obj)
  }


  setState(key, value) {
    this.__state[key] = value
  }

  getState(key) {
    return this.__state[key]
  }
}

export default ReactiveState
