class PersonExtends<T extends string | number> {
  // T는 string 아니면 number 둘 중 하나만 되는 것  
  private _name: T;

  constructor(name: T) {
    this._name = name
  }
}

new PersonExtends('Je')
new PersonExtends(123)
// 타입은 항상 작은 범위로 제한을 해줘야 한다.
// 사용자 입장에서 T 만 본다면 아무거나 넣어도 되겠다는 생각을 할 수 있다
// 하지만 extends 를 사용한다면 사용할 수 있는 범위가 제한된다는 것을 알 수 있다.
// new PersonExtends(true)