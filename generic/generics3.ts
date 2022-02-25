function helloArray<T>(msg: T[]): T {
  return msg[0]
}

// T 는 string 으로 추론이 될 것
helloArray(['Hello', 'World'])
// T 는 <string | number>
// return 되는 타입은 string | number 가 될 것
// 그러나 리턴되는 값은 string 뿐임.
helloArray(['Hello', 5])

function helloTuple<T, K>(msg: [T, K]): T {
  return msg[0]
}

helloTuple(['Hello', 'World'])
// 이렇게 하면 return 되는 값이 정확하게 string 으로 추론이 된다. 
helloTuple(['Hello', 5 ])
