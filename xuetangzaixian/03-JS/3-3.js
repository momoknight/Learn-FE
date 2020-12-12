let foo;
console.log(foo);               // undefined

function bar(a, b) {
    return [a, b];
}

console.log(bar(1));            // [1, undefined]

let sum = 0;
function addSum(num) {
    sum += num;
}

console.log(addSum(10));        // undefined 函数没有返回值

let p = {x: 1, y: 2};
console.log(p.z);               // undefined

let n = null;
console.log(n);                 // null