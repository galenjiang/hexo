/**
 * Created by Galen on 2017/3/4.
 */
import _ from 'lodash';

function existy(x) {
  return x != null;
}

function truthy(x) {
  return existy(x) && x !== false;
}

function complement(pred) {
  return function (...args) {
    return !pred.apply(null, args);
  };
}

function cat(...rest) {
  const head = _.head(rest);
  if (existy(head)) {
    return Array.prototype.concat.apply(head, _.tail(rest)); // remove apply eg: head.concat.apply(head, _.tail(rest))
  }
  return [];
}

function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

function doWhen(cond, action) {
  if (truthy(cond)) {
    return action();
  }
  return undefined;
}

function invoker(name, method) {
  return (target, ...args) => {
    const targetMethod = target[name];
    return doWhen(existy(targetMethod) && method === targetMethod, targetMethod.bind(target, ...args));
  };
}

function dispatch(...funs) {
  return (...args) => {
    let ret = undefined;
    for (let i = 0; i < funs.length; i++) {
      ret = funs[i].apply(null, args);
      if (existy(ret)) {
        return ret;
      }
    }
    return ret;
  };
}

// const doWhenChunk = (type, action) => (obj) => doWhen(obj.type === type, () => console.log(obj.message))
function isa(type, action) {
  return function(obj) {
    if (type === obj.type) return action(obj);
  };
}

// 代替isa 与 dispatch配合用法
// const doWhenChunk = (type, action) => (obj) => doWhen(obj.type === type, () => action(obj))

// dispatch(
//   doWhenChunk('a', (obj) => console.log(obj.message)),
//   doWhenChunk('b', (obj) => console.log(obj.message)),
// )({ type: 'a', message: 'this is type a'})



export default { existy, truthy, complement, cat, construct, doWhen, invoker, dispatch, isa };
