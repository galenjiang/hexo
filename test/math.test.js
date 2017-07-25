import { assert } from 'chai'
import _ from 'lodash'
import utils from '../src/'
const { math: { Vector3, Matrix3 } } = utils
const { sin, cos, PI, round } = Math
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
  it('Vector3 test', () => {
    const v = new Vector3(1, 1, 0)
    assert.deepEqual(v.toArray(), [1, 1, 0])
    v.set(1, 2, 3)
    assert.deepEqual(v.toArray(), [1, 2, 3])
  })
  it('Matrix3 multiply Vector3 test', () => {
    const m3 = new Matrix3()
    m3.set([
      cos(PI/2), - sin(PI/2), 1,
      sin(PI/2),   cos(PI/2), 1,
              0,           0, 1,
    ])
    const v3 = new Vector3(1, 1, 0)
    const newV3 = v3.applyMatrix3(m3)
    // TODO: 浮点位不好测试，随便测了下。。。
    assert.deepEqual(newV3.toArray().map(e => round(e)), [-1, 1, 0])
  })
})
