type InterfaceFunc = (...args: any[]) => void
interface InterfaceOnceFunc {
  (...args: any[]): any
  listener: InterfaceFunc
}

class EventEmitter {
  events: {
    [key: string]: any[],
  }
  constructor() {
    this.events = {}
  }

  on(eventName: string, listener: InterfaceFunc) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(listener)
  }
  once(eventName: string, listener: InterfaceFunc) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    const tempListener = (...args: any[]) => {
      listener.apply(null, args)
      this.removeListener(eventName, onceListener)
    }
    const onceListener: InterfaceOnceFunc = tempListener as InterfaceOnceFunc

    onceListener.listener = listener
    this.events[eventName].push(onceListener)
  }
  emit(eventName: string, ...args: any[]) {
    (this.events[eventName] || []).forEach((listener) => {
      listener.apply(null, args)
    })
  }
  removeListener(eventName: string, removeListener: InterfaceFunc) {
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
  removeAllListener(eventName: string) {
    this.events[eventName] = []
  }
}

// const e = new EventEmitter()
// e.on('click', (a, b) => console.log(a, b))
// e.emit('click', 'a', 'b')
export default EventEmitter
