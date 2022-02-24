interface HelloPerson {
  (name: string, age?:number): void
}

const helloPerson: HelloPerson = function (name: string, age?:number) {
  console.log(`${name} 입니다.`)
}