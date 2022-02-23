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