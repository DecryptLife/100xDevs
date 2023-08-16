"use strict";
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Mul"] = 2] = "Mul";
    Arithmetic[Arithmetic["Div"] = 3] = "Div";
})(Arithmetic || (Arithmetic = {}));
function calc(a, b, type) {
    //body
}
let x = calc(1, 2, Arithmetic.Add);
console.log(x);
