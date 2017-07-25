class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(listener)
  }
  once(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    const onceListener = (...args) => {
      listener.apply(null, args)
      this.removeListener(eventName, onceListener)
    }
    onceListener.listener = listener
    this.events[eventName].push(onceListener)
  }
  emit(eventName, ...args) {
    (this.events[eventName] || []).forEach((listener) => {
      listener.apply(null, args)
    })
  }
  removeListener(eventName, removeListener) {
    this.events[eventName] = (this.events[eventName] || []).filter((listener) => {
      if (listener.listener && (removeListener === listener.listener)) {
        return false
      }
      if (listener === removeListener) {
        return false
      }
      return true
    })
  }
  removeAllListener(eventName) {
    this.events[eventName] = []
  }
}

export default EventEmitter
