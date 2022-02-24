"use strict";
// 타입을 추가할 때 이 msg 에 무엇이 들어갈지를 적어주지 않았다.
// 개발자가 직접 any 라고 적어주면 사라진다.
// any 인 것 같을 때는 any 를 적어줘야 한다. 안 그러면 가이드라도 적어줘야 한다.
function anyType(msg) {
    console.log(msg);
}
const anyEg = anyType('리턴은 아무거나 된다.');
// any 는 어떤 것이든 할 수 있다의 의미. 
// 그렇기 때문에 어떤 타입이 오더라도 상관이 없는지라 웬만하면 사용하지 않는 것이 좋다
anyEg.toString();
// 아래의 코드로 쭉 진행하다 보면 개체에서 개체로 전달되며 결국 c 는 any 타입이 부여된다.
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// 이걸 막기 위해서는 아래의 코드처럼 작성하면 된다
function preventLeakingAny(obj) {
    // 여기 a 코드에서 any 코드가 전파되는 것을 한 번 차단한다.
    const a = obj.number;
    const b = a + 1;
    return b;
}
const newC = preventLeakingAny({ num: 0 });
