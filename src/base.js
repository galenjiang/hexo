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
    return function (args) {
        return !pred.apply(null, _.toArray(args));
    };
}

function cat(...rest) {
    const head = _.head(rest);
    if (existy(head)) {
        return head.concat(_.tail(rest)); // remove apply eg: head.concat.apply(head, _.tail(rest))
    }
    return [];
}

function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

export default { existy, truthy, complement, cat, construct };

