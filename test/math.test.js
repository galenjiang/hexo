import { assert } from 'chai'
import _ from 'lodash'
import utils from '../src/'
const { math: { Matrix3 } } = utils

describe('test math.js', () => {
  it('Matrix3 test', () => {
    const m3 = new Matrix3()
    assert.isOk(m3 instanceof Matrix3)
    assert.isFunction(m3.set)
    assert.isFunction(m3.toArray)
    assert.isFunction(m3.multiply)
    m3.set([
      1, 1, 1,
      2, 2, 2,
      3, 3, 3,
    ])
    assert.deepEqual(m3.toArray(), [
      1, 1, 1,
      2, 2, 2,
      3, 3, 3,
    ])
    const otherM3 = new Matrix3()
    otherM3.set([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ])
    const newM3 = m3.multiply(otherM3)

    assert.deepEqual(newM3.toArray(), m3.toArray())
  })
})
