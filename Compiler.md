# 1. compileOnSave
- save 하면 컴파일 할 수 있도록 하는 옵션
- true / false (default 는 false)
- 별로 중요한 옵션은 아니다. 에디터가 알아서 해결해준다.

# 2. extends
- 상속할 때 사용하는 키워드
- 상속을 받아올 부모의 path 를 설정해주면 된다.
- String 값으로 가져오면 된다. 
- 깃헙 주소에 tsconfig/basis 로 가면 여러 버전의 노드에 맞춰서 사용할 tsconfig를 상속받을 수 있다
```shell
npm install --save-dev @tsconfig/deno
```
- 앞으로는 사용량이 늘어날 수 있다. 

# 3. files, include, exclude
## files
- 만약 files 나 include 속성이 없다면 모든 파일을 컴파일하려고 할 것
- files 은 타입이 배열이고 그 안에 파일을 넣으면 컴파일 한다
- exclude 에 되어 있다고 하더라도 컴파일을 하게 된다. 가장 우선순위가 높음

## exclude
- 컴파일할 때 파일을 제외시켜버리는 역할을 한다.
- 설정하지 않으면 node_modules, bower_components, jspm_packages, <outDir> 를  기본적으로 제외한다. 특히 <outDir> 은 include 에 있어도 항상 제외한다.

## include
- 매치되는 파일을 컴파일에 포함시킨다. 
- * 를 사용하면 .ts / .tsx / .d.ts 만 include 한다.