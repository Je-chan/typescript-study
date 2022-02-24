"use strict";
// 아래의 함수는 void 로 반환한다.
function returnVoid(msg) {
    console.log(msg);
}
// 아래의 방법은 따로 빨간 줄이 그어지지는 않지만 이런 방식은 void 가 추구하는 바가 아니다/
const r = returnVoid('리턴 없다');
// 아래와 같이 그냥 사용만 하고 따로 리턴은 없는 그런 문이 void 가 지향하는 바 
returnVoid('리턴 없음');
