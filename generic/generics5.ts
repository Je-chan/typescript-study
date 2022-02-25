class ClassPerson<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name
  }
}

new Person('Je')

new ClassPerson<string>('Liebe')
// 밑에 거는 에러가 난다.
// new ClassPerson<string>(22)

class DoubleConstructor<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name
    this._age = age
  }
}

new DoubleConstructor('Je', 12)
// 아래의 것은 에러가 난다.
// new DoubleConstructor<string, string>('Je', 12)