/**
 * Created by Galen on 2017/3/5.
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (...args) {
        const ctx = args[0];
        const argument = args.slice(1, args.length - 1);
        const self = this;
        return function(...restArgs) {
            return self.apply(ctx, [...argument, ...restArgs])
        }
    }
}


function a(x, y, z) {
    return this.value + x + y + z;
}
const b = a.bind({value: 10})
console.log(b(1, 2, 3));