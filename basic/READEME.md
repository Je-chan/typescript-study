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