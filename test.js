/**
 * Created by Galen on 2017/3/5.
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function (...args) {
    const ctx = args[0];
    const argument = args.slice(1, args.length - 1);
    const self = this;
    return function (...restArgs) {
      return self.apply(ctx, [...argument, ...restArgs])
    }
  }
}


function a(x, y, z) {
  return this.value + x + y + z;
}
const b = a.bind({ value: 10 })
console.log(b(1, 2, 3));

import Event from './src/event'
// import Event from 'events'
const e = new Event()
const listener = (...args) => console.log(args[0], args[1])
e.on('click', listener)
e.emit('click', 'hello', 'world')

e.removeListener('click', listener)
e.emit('click', 'hello', 'world')

