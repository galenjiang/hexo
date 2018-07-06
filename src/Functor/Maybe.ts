class Maybe {

  private __value: any
  constructor(v) {

    this.__value = v
  }

  static of(v) {
    return new Maybe(v)
  }
  map(f) {
    return this.__value ? Maybe.of(f(this.__value)) : Maybe.of(null)
  }
}
