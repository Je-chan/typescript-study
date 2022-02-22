# 환경 세팅
```shell
npm init -y
npm i -D typescript
npx tsc --init
```

# 타입스크립트의 타입 시스템, 옵션
- 타입을 명시적으로 지정하지 않으면 타입스크립트 컴파일러가 자동으로 타입을 추론한다.
  - 이럴 경우 여러 에러를 발생시킬 수 있는데 이런 것들은 옵션을 지정해줘서 해결할 수 있다.
### noimplicitAny 옵션
- 타입을 명시적으로 지정하지 않은 경우, 타입 스크립트가 추론 중 'any' 라고 판단하면 명시적으로 에러를 발생
### strictNullChecks 옵션
- 모든 타입에 자동으로 포함되어 있는 'Null' 과 'Undefined' 를 제거한다

### noimplicitReturns 옵션
- 함수 내에서 모든 코드가 값을 리턴하지 않으면 컴파일 에러를 발생시킨다
  - 명시적으로 return 을 해서 빈 값이라도 return 을 하라는 것

### strictFunctionTypes 옵션
- 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입이 아닌 경우, 에러를 내서 경고한다.

### 나만의 타입을 만들기
- interface
- type alias
- class
- 타입을 커스터마이징 해서 사용할 수 있다.


# Structural VS Nominal
### Structural
- 구조가 같으면 같은 타입이다.
- 타입스크립트
### Nominal
- 구조가 같아도 이름이 다르면 다른 타입이다
- C 나 자바같은 것

# Type Alias (타입 별칭)
- Interface 와 비슷해 보인다
- Primitive, Union Type, Tuple, Function  
  - 각각 Union, Tuple, Function
  ```jsx
  type stringOrNumber = string | number
  type PersonTuple = [string, number]
  type EatType = (food: string) => void  
  ```
- 기타 직접 작성해야 하는 타입에 다른 이름을 지정할 수 있다
- 만들어진 타입의 refer 로 사용하는 것 뿐. 타입을 직접 만드는 것은 아니다.
- 목적이나 존재 가치가 분명하면 인터페이스로, 그렇지 않은 경우에는 type alias 가 낫다.