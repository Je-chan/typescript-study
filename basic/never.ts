function error(msg: string) : never {
  throw new Error(msg)
}

// never 라는 타입이 주어진다.
function fail() {
  return error('failed')
}

function infiniteLoop() : never {
  while(true) {}
} 

let hello: string ='hello'

if(typeof hello !== 'string') {
  // a 의 타입은 string 인데, string 이 아닌 경우라면 never 가 된다
  // 이제 여기에서는 a 에 어떤 값도 할당할 수 없다
  hello
}

declare const hi: string | number

if(typeof hi !== "string") {
  // 타입 추론으로 number 가 된다
  hi
}

// 조건부 타입

type Indexable<T> = T extends string ? T & {[index: string]: any} : never

type ObjectIndexable = Indexable<{}>

/**
 * 해설 
 * T = {}
 * T 가 만약 string 이라면 T &{[index: string]: any} 가 나오게 하고
 * 아니라면 never 가 나오게 하라
 * 
 * 이렇게 해주는 이유는 잘못된 타입을 방지하기 위해 사용하는 방법이다.
 */