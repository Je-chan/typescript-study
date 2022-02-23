# Config Option
## 1. compileOnSave
- save 하면 컴파일 할 수 있도록 하는 옵션
- true / false (default 는 false)
- 별로 중요한 옵션은 아니다. 에디터가 알아서 해결해준다.

## 2. extends
- 상속할 때 사용하는 키워드
- 상속을 받아올 부모의 path 를 설정해주면 된다.
- String 값으로 가져오면 된다. 
- 깃헙 주소에 tsconfig/basis 로 가면 여러 버전의 노드에 맞춰서 사용할 tsconfig를 상속받을 수 있다
```shell
npm install --save-dev @tsconfig/deno
```
- 앞으로는 사용량이 늘어날 수 있다. 

## 3. files, include, exclude
### files
- 만약 files 나 include 속성이 없다면 모든 파일을 컴파일하려고 할 것
- files 은 타입이 배열이고 그 안에 파일을 넣으면 컴파일 한다
- exclude 에 되어 있다고 하더라도 컴파일을 하게 된다. 가장 우선순위가 높음

### exclude
- 컴파일할 때 파일을 제외시켜버리는 역할을 한다.
- 설정하지 않으면 node_modules, bower_components, jspm_packages, <outDir> 를  기본적으로 제외한다. 특히 <outDir> 은 include 에 있어도 항상 제외한다.

### include
- 매치되는 파일을 컴파일에 포함시킨다. 
- * 를 사용하면 .ts / .tsx / .d.ts 만 include 한다.

# Complie options
## 1. typeRoots, types
- typeRoots
  - 모든 모듈이 @types 로 definition 을 가졌으면 좋겠지만 항상 그렇지는 못하다
  - 또 다른 나만의 @types 로 지정
  - 
- types
  - 패키지의 name 을 쓴다

- @types
  - TypeScript 2.0 부터 사요 가능해진 내장 type definition 시스템이다
  - 아무런 설정도 하지 않으면 node_modules/@types라는 모든 경로를 찾아서 사용한다ㅏ
  - typeRoots 를 사용하면 배열 안에 들어 있는 경로들에서만 가져온다
  - types 를 사용하면 배열 안의 모듈 혹은, ./node_modules/@types 안의 모듈 이름에서 찾아온다
  - typeRoots 와 types 는 같이 사용하지 않는다.

## 2. target, lib
- target
  - JavaScript 의 버전을 세팅한다.
  - 따로 지정을 하지 않으면 ES3 
  - ES5, ES6, ES2015 ~ ES2020 등이 존재한다.
  - 즉 빌드의 결과물을 어떤 버전으로 할 것인지를 지정한다

- lib
  - 타입스크립트가 설치될 때 타겟의 런타임을 설명할 번들된 선언적 파일이 기본적으로 존재한다.
  - 타입스크립트에서는 여러 가지를 자세히 설정하기 불편해서 target 에 따라서 lib 이 자동으로 설정된다.
  - 기본 type definition 라이브러리를 지정하는 것
  - lib 를 지정하지 않았을 때
    - target 이 es3 이면 lib.d.ts
    - target 이 es5 이면 dom, es5, scripthost 
    - target 이 es6 이면 dom, es6, dom.literable, scripthost 를 사용한다
  - lib 를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
 

