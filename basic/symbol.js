"use strict";
console.log(Symbol('foo') === Symbol("foo")); // false
const me = Symbol();
const obj = {
    [me]: "je"
};
// obj["sym"]
console.log(obj[me]);
