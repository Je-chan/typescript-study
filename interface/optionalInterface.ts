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
  name: string,
  age? : number,
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