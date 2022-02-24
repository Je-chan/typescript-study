interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name
  }

  hello(): void {
    console.log(`${this.name} 입니다`)
  }  
}

const personClass: IPerson1 = new Person('Je')
personClass.hello()

