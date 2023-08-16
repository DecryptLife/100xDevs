"use strict";
function swap(a, b) {
    console.log(`Before swapping a = ${a} b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`Before swapping a = ${a} b = ${b}`);
}
swap(12, 15);
swap("Benson", "Thomas");
