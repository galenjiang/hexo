import { assert } from 'chai';
import _ from 'lodash';
import utils from '../src/';
const { base: { existy, truthy, complement, cat, construct, doWhen, invoker, dispatch, isa, add } } = utils;

// const reverse = invoker('reverse', array.prototype.reverse);
// console.log(reverse([1, 2, 3]));
// const str = dispatch(
//   invoker('tostring', array.prototype.tostring),
//   invoker('tostring', string.prototype.tostring),
// );
// console.log(str(true));

describe('test base.js', () => {
  it('existy test', () => {
    assert.isNotOk(existy(undefined));
    assert.isNotOk(existy(null));
    assert.isOk(existy(1));
    assert.isOk(existy(false));
  });

  it('truthy test', () => {
    assert.isNotOk(truthy(undefined));
    assert.isNotOk(truthy(null));
    assert.isOk(truthy(1));
    assert.isOk(truthy({}));
    assert.isNotOk(truthy(false));
  });

  it('complement test', () => {
    assert.isFunction(complement(() => {}));
    const isNotArray = complement(_.isArray);
    assert.isNotOk(isNotArray([]));
    assert.isOk(isNotArray(1));
    const isNotString = complement(_.isString);
    assert.isNotOk(isNotString(''));
    assert.isOk(isNotString(1));
  });

  it('cat test', () => {
    assert.deepEqual(cat([1, 2], [3, 4], [5, 6]), [1, 2, 3, 4, 5, 6]);
  });

  it('construct test', () => {
    assert.deepEqual(construct(1, [2, 3]), [1, 2, 3]);
  });

 it('doWhen test', () => {
    assert.equal(doWhen(true, () => 'result'), 'result');
    assert.equal(doWhen(false, () => 'result'), undefined);
  });


});

// const doWhenChunk = (type, action) => (obj) => doWhen(obj.type === type, () => action(obj))

// dispatch(
//   doWhenChunk('a', (obj) => console.log(obj.message)),
//   doWhenChunk('b', (obj) => console.log(obj.message)),
// )({ type: 'a', message: 'this is type a'})

