// 첫 번째 방법
// 이게 보통 일반적인 방식이라고 한다.
let list: number[] = [1, 2, 3]

// jsx 나 tsx 에서 사용할 때 충돌 나는 경우가 존재할 수 있다.
let listSecond: Array<number> = [1,2,3]

let listAddString: (number | string )[] = [1, 2, 3, '4']

