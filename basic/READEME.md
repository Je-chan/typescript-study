# Primitive Type

- Object 나 Reference 의 형태가 아닌 실제 값을 저장하는 자료형
- EcmaScript 를 기준으로 6가지
  - Stirng
  - Number
  - Stirng
  - Symbol
  - Null
  - Undefined

- Literal 값으로 Primitive 타입의 서브 타입을 나타낸다.
- 모두 소문자로 작성한다.


## Number 
- javascript 와 같이 모든 숫자는 부동 소수점 값이다
- typescript 는 16진수, 10진수, 2진수, 8진수를 모두 지원한다
- NaN 도 type Number 로 나온다
- 100_000_000 과 같은 표기가 가능하며 이는 100000000 과 같다

## String
- Template String 도 사용이 가능하다

## Symbol
- new 키워드를 이용해서 사용할 수는 없다
- Symbol 을 함수로 사용해서 symbol 타입을 만들 수 있다
```javascript
console.log(Symbol('foo') === Symbol('foo'))
```
- symbol 을 사용하기 위해서는 tsconfig.json 파일을 수정해야 한다
  - "lib": ["ES2015", "DOM"]
- Prmitive 값을 사용하는데 고유하고 수정 불가능한 값으로 바꾼다
- 보통 접근을 제어하는 데 사용한다.

## Undefine & Null
- typescript 에서 undefined 와 null 은 실제로 undefined, null 타입을 갖는다
- 소문자로만 존재해야 한다
- void 와 마찬가지로 그다지 유용하지 않다

- tsconfig 로 따로 설정하지 않으면 다른 타입들의 subtypes 가 된다
- 컴파일 옵션에서 '--strictNullChecks' 를 사용하면, null 과 undefined 는 void 나 자기 자신들에게만 할당할 수 있다. 
  - void 는 유일하게 undefined 를 할당할 수 있다. 
- union type 을 사용해서 서브 타입으로 존재하지 않도록 하되, 고유한 타입으로 사용할 수 있도록 도와줄 수 있다.

- null 이라는 값으로 할당된 것을 null 이라고 한다
- null 타입은 null 이라는 값만 가질 수 있다
- 런타임에서 typeof 연산자를 이용해서 찾아보면 object 다.

- 값을 할당하지 않은 변수가 undefined 다.
- object 에 property 가 없는 경우에도 undefined 다.
- 런타임에서 typeof 연산자를 이용해서 찾아보면 undefined 다.

- undefined 와 null 에 대한 타입으로 정확하고 안전하게 코드를 작성할 수 있어야 한다.

## Object 
```javascript
const person = {name: "Je", age: 10}
const samePerson = Object.create({name: 'Je', age: 10})
```
- 첫 번째 person 은 name: string, age: number 가 나오지만
- Objct.create 는 Primitive 타입이 아닌, Object 타입이거나 Null 인 것으로 타입을 정의한다.

- object 라는 타입은 primitive 타입이 아닌 것을 나타내고 싶을 떄 사용한다
  - 즉 객체가 아니라 array 에도 적용될 수 있다. 
- non-primitive type 의 경우 number, string, boolean, bigint, symbol, null, undefined 가 아니면 된다.


## Array
- Object 의 일종이다.
- Array 에서 조금 더 개선된 타입의 형태가 튜플
  - 튜플은 순서마저 정해져 있다.

## any
- 어떤 것이든 된다는 의미.
- 웬만하면 any 는 사용하지 않는 것이 바람직하다.
  - 그러나 예외적으로 사용해야 하는 경우가 존재. (진짜 타입이 뭐가 들어오든 상관 없는 경우)
  - 어떤 타입이 오더라도 다 되는 경우에는 any 를 사용하면 된다
- 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않는다
- 컴파일 옵션 중 noImplicitAny 은 any 를 써야하는 데 쓰지 않았을 경우 내뱉는 옵션이다
- any 타입이 개체를 통해서 계속 전파된다. any 타입이 들어간 걸 사용면 그것도 any 가 된다. 
  - 편의에 의해서 any 를 지정해주는 순간 타입의 안정성을 잃을 수 있다.
  - 타입 안정성은 타입스크립트를 사용하는 주요 기능 중 하나
  - 그렇기에 any 는 정말 최소한으로만 작성할 것.
- 처음부터 어느 타입이라고 지정하지 못할 경우가 있다.
  - any를 피하기 위해 누수를 막는 지점이 존재한다.
- 이거를 사용하기 보다는 unknown 등을 사용하는 것이 좋다.

## unknown
- 응용 프로그램을 작성할 떄 모르는 변수의 타입을 묘사해야할 수가 있다.
- 변수에 정말 어떤 타입이 들어올지 모르는 경우가 있을 수 있다.
  - 이 경우 컴파일러와 이후 코드를 읽는 사람에게 이 변수가 어떤 타입이든 될 수 있음을 알려주기 위해서 unknwon 을 사용한다.
- 타입스크립트 3버전부터 지원
- any 와 같이 어떤 것이든 될 수 있지만 컴파일러가 타입을 추론할 수 있게 타입의 유형을 좁히거나 타입을 확정하지 않으면 다른 곳에서 할당할 수도, 사용할 수도 없게 한다
- unknown 타입을 사용하면 런타임 에러를 줄일 ㅜㅅ 있다.
  - 보통, 유형 검사를 해야하는 API 등에서 사용할 수 있다. 