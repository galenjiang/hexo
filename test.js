/**
 * Created by Galen on 2017/3/6.
 */
const a = (callback) => {
    callback(callback => {
        callback(callback => {
            callback(callback => {
                callback({a: 1})
            })
        })
    })
}
const b = (callback) => {
    callback(callback => {
        callback(callback => {
            callback(callback => {
                console.log(callback)
            })
        })
    })
}
a(b);