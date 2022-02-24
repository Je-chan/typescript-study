interface Person2 {
  name: string;
  // age 가 있을 수도 있고, 없을 수도 있는 경우
  // ? 를 사용해서 해결할 수 있다.
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`Hello~ I'm ${person.name}`)
}

hello2({name: "Je", age: 39})
hello2({name: "Liebe"})

interface Person3 {
  name: string;
  age? : number;
  // 아래 코드의 의미는 key 값으로 올 값이 뭐든 상관 없다는 것
  // 위의 코드들은 반드시 key 가 name, age 로 한정돼야 하지만
  // 아래의 코드는 타입이 String 이기만 하면 뭐든 다 된다는 의미다
  [key: string]: any;
}

function hello3 (person: Person3): void {
  console.log(`${person.name} 안녕~?`)
}

const p3_1 : Person3 = {
  name: "Je",
  age: 12
}

const p3_2 : Person3 = {
  name: "Liebe",
  // ["joy", "may"] 는 any 와 대응한다.
  systers: ["joy", 'may']
}

const p3_3 : Person3 = {
  name: "chan",
  friend: p3_1,
  bestFriend: p3_2
}

hello3(p3_3)