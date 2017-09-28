type InterfaceFunction = (...args: any[]) => any

const fbind = (func: InterfaceFunction) => {
  return (...args: any[]) => {
    return new Promise((resolve, reject) => {
      resolve(func.apply(null, args))
    })
  }
}

const denodify = (func: InterfaceFunction) => {
  return (...restArgs: any[]) => {
    return new Promise((resolve, reject) => {
      func.apply(null, [...restArgs, (err: Error, res: any) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }])
    })
  }
}

export default {
  fbind,
  denodify,
}
