interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p4_1: Person4 = {
  name: 'Je',
  age: 12,
  hello: function() : void {
    console.log(`Hello~ I'm ${this.name}`)
  }
}

const p4_2: Person4 = {
  name: 'Je',
  age: 12,
  hello() : void {
    console.log(`Hello~ I'm ${this.name}`)
  }
}


const p4_3: Person4 = {
  name: 'Je',
  age: 12,
  hello: () : void => {
    // arrow function 인 경우에는 this 를 사용할 수 없다.
    // console.log(`Hello~ I'm ${this.name}`)
  }
}

p4_1.hello()
p4_2.hello()