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