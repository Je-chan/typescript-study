type HelloFunctionGeneric1 = <T>(msg: T) => T

const helloFunction1: HelloFunctionGeneric1 = <T>(msg: T): T => {
  return msg
}

interface HelloFunctionGeneric2 {
  <T>(msg: T):T
}

const helloFunction2: HelloFunctionGeneric2 = <T>(msg: T): T => {
  return msg
}