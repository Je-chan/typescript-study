// 아래의 두 함수는 같은 로직이지만 타입만 다른 것

function helloString(msg: string): string {
  return msg
}

function helloNumber(msg: number): number {
  return msg
}

// 만약, 이 함수들을 any 로 처리한다면?
function helloAny(msg: any): any {
  return msg
}

// 런타임 환경에서 undefined 로 나올 것
console.log(helloAny('Mark').length)

// 타입을 변수 같은 걸로 활용해서 리턴되는 타입과 연관지어 주는 것
function helloGeneric<T>(msg: T): T {
  return msg
}

// 위의 Generic 덕분에 T 는 literal 로 추적해서 'Mark' 로 지정된다. 
console.log(helloGeneric('Mark').length)
  // function helloGeneric<"Mark">(msg: "Mark"): "Mark"

// 밑의 함수는 length 를 추적하지 못한다
// console.log(helloGeneric(39).length)