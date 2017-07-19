class Matrix3 {
  constructor(value) {
    this.elements = value || [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
  }

  set([n11 = 1, n12 = 0, n13 = 0, n21 = 0, n22 = 1, n23 = 0, n31 = 0, n32 = 0, n33 = 1]) {
    this.elements = [
      n11, n12, n13,
      n21, n22, n23,
      n31, n32, n33,
    ]
    return this
  }

  toArray() {
    return this.elements
  }

  multiply(m) {
    if (!(m instanceof Matrix3)) {
      throw new Error('this paramter is not an instance of Matrix3')
    }

    const [
      n11, n12, n13,
      n21, n22, n23,
      n31, n32, n33,
    ] = this.elements
    const [
      m11, m12, m13,
      m21, m22, m23,
      m31, m32, m33,
    ] = m.toArray()

    return new Matrix3().set([
      (n11 * m11) + (n12 * m21) + (n13 * m31), (n11 * m12) + (n12 * m22) + (n13 * m32), (n11 * m13) + (n12 * m23) + (n13 * m33),
      (n21 * m11) + (n22 * m21) + (n23 * m31), (n21 * m12) + (n22 * m22) + (n23 * m32), (n21 * m13) + (n22 * m23) + (n23 * m33),
      (n31 * m11) + (n32 * m21) + (n33 * m31), (n31 * m12) + (n32 * m22) + (n33 * m32), (n31 * m13) + (n32 * m23) + (n33 * m33),
    ])
  }
}

class Matrix4 {
  constructor(value) {
    this.elements = value
  }

  set(value) {
    this.elements = value
  }
}

export default {
  Matrix3,
  Matrix4,
}
