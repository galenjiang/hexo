/**
 * Created by Galen on 2017/3/4.
 */
import * as _ from 'lodash'

function existy(x: any): boolean {
  return x != null
}

function truthy(x: any) {
  return existy(x) && x !== false
}

function complement(pred: () => any) {
  return (...args: any[]) => {
    return !pred.apply(null, args)
  }
}

function cat(...rest: any[]) {
  const head = _.head(rest)
  if (existy(head)) {
    return Array.prototype.concat.apply(head, _.tail(rest)) // remove apply eg: head.concat.apply(head, _.tail(rest))
  }
  return []
}

function construct(head: any, tail: any) {
  return cat([head], _.toArray(tail))
}

function doWhen(cond: any, action: () => any) {
  if (truthy(cond)) {
    return action()
  }
  return undefined
}

function invoker<T>(name: keyof T, method: any) {
  return (target: T, ...args: any[]) => {
    const targetMethod: any = target[name]
    return doWhen(existy(targetMethod) && method === targetMethod, targetMethod.bind(target, ...args))
  }
}
// function invoker(name: string, method: any) {
//   return (target: { [key: string]: Function }, ...args: any[]) => {
//     const targetMethod = target[name]
//     return doWhen(existy(targetMethod) && method === targetMethod, targetMethod.bind(target, ...args))
//   }
// }


function dispatch(...funs: any[]) {
  return (...args: any[]) => {
    let ret
    for (const i of funs) {
      ret = funs[i].apply(null, args)
      if (existy(ret)) {
        return ret
      }
    }
    return ret
  }
}

interface InterfaceHasType {
  type: string
}
interface InterfaceAction extends InterfaceHasType {
  [key: string]: string
}

// const doWhenChunk = (type, action) => (obj) => doWhen(obj.type === type, () => console.log(obj.message))
function isa<T extends InterfaceHasType, K extends T['type']>(type: K, action: (obj: InterfaceAction) => any) {
  return (o: InterfaceAction) => {
    if (type === o.type) {
      return action(o)
    }
  }
}

// 代替isa 与 dispatch配合用法
// const doWhenChunk = (type, action) => (obj) => doWhen(obj.type === type, () => action(obj))

// dispatch(
//   doWhenChunk('a', (obj) => console.log(obj.message)),
//   doWhenChunk('b', (obj) => console.log(obj.message)),
// )({ type: 'a', message: 'this is type a'})

export default { existy, truthy, complement, cat, construct, doWhen, invoker, dispatch, isa }
