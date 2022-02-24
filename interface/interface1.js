"use strict";
// 아래와 같이 작성하면 동일한 코드를 반복해서 사용한다
// 이를 효율적으로 사용하기 위해서 인터페이스를 사용
// function hello1(person: {name: string, age: number}): void {
//   console.log(`안녕하세요! ${person.name} 입니다.`)
// }
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: "JE",
    age: 39
};
hello1(p1);
