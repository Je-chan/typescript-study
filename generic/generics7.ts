interface IPerson {
  name: string;
  age: number;
}

const person1 : IPerson = {
  name: 'Je',
  age: 12
}

// > 아래 코드의 문제점은 key 가 'name' 이면 string 만을 반환하고 'age' 면 number 만 반환하는데 이 코드는 둘 다 반환할 수 있는 것으로 타입을 추적한다.

// function getProp(obj: IPerson, key: 'name' | 'age') : string | number {
//   return obj[key]
// }

// > 아래의 코드의 문제점은 value 는 'name' 이면 string, 'age' 면 number 여야 하는데 둘 다 된다고 한다.

// function setProp(obj: IPerson, key: 'name' | 'age', value: string | number) :void {
//   obj[key] = value
// }

// type Keys = keyof IPerson
// 어떤 interface 에 keyof 를 붙이면 그 결과물로 타입이 나오는데 interface의 key 값이 Union 타입으로 나온다

// IPerson[keyof IPerson] 
// => IPerson['name' | 'age']
// => IPerson['name] | IPerson['age']
// => string | number


function getProp<T, K extends keyof T>(obj: T, key: K) : T[K] {
  return obj[key]
}

getProp(person1, 'age')

function setProp<T, K extends keyof T>(obj: T, key: keyof T, value: T[keyof T]) :void {
  obj[key] = value
}