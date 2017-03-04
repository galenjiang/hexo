/**
 * Created by Galen on 2017/3/4.
 */

promisify_func = function(func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            resolve(func.apply(null, args));
        })
    }
}

/**
 * test
 */
// const func = promisify_func((a, b, c) => {
//     return a + b + c;
// })
//
// func(1, 2, 3).then((res) => {
//     console.log(res)
// })

promisify_node = function(func) {
    return (...restArgs) => {
        return new Promise((resolve, reject) => {
            func.apply(null, [...restArgs, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            }])
        })
    }
}

/**
 * test
 */
// const func = promisify_node((...args) => {
//     console.log(args)
//     const res = args.slice(0, args.length -1).reduce((acc, item) => {return acc + item}, 0)
//     return args[args.length -1].apply(null, [null, res]);
// })
//
// func(1, 2, 3).then((res) => {
//     console.log(res)
// })


export default {
    func: promisify_func,
    node: promisify_node,
}
