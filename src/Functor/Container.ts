class Container {

  constructor(v) {
    this.__value = v
  }
  static of(v) {
    return new Container(v)
  }
  map(f) {
    return Container.of(f(this.__value))
  }
}

