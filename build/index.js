"use strict";
let x = "hey class";
let a = "im a string";
let b = "im a string";
console.log(typeof (x));
b = 12345;
console.log(typeof (x));
b = false;
console.log(typeof (x));
function testMyTypeScript(num1, num2) {
    return num1 * num2;
}
console.log(testMyTypeScript(23, 45));
// Arrays in typescript
function myArrayFunction(arr1) {
    console.log(arr1);
}
myArrayFunction(["hello", "world"]);
const bird1 = { wings: 2, beak: "true", color: "red" };
const bird2 = { wings: 4, beak: "false", color: "blue", feathers: 1000 };
const bird3 = { wings: 10, beak: "true", color: "green", feathers: 2000 };
