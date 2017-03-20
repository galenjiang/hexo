/**
 * Created by Galen on 2017/3/4.
 */

const fbind = function(func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            resolve(func.apply(null, args));
        })
    }
}



const denodify = function(func) {
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



export default {
    fbind,
    denodify,
}
