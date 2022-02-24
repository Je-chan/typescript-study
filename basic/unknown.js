"use strict";
// unknown 은 number 타입인 것에 바로 할당할 수 없다.
// 아래의 코드만 작성했다면 빨간 줄이 그어질 것
// const numberA: number = dontknow;
if (dontknow === true) {
    // 만약 dontknow 가 boolean 값을 가지는 조건이 붙는다면, dontknow 는 boolean type 이 주어질 것
    const booleanA = dontknow;
    // string 타입이 주어진 것은 아니기에 아래의 코드는 빨간 줄이 그어진다
    // const stringA: string = dontknow
}
if (typeof dontknow === 'string') {
    // const booleanB: boolean = dontknow 
    const stringB = dontknow;
}
