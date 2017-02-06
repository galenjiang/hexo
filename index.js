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

export { existy, truthy, complement };

