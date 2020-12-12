// 使用function声明函数
function foo() {
    console.log('foo bar');
}

foo();

function add(x, y = 0) {
    return x + y;
}

console.log(add(1, 2));

// 可选参数
function sum(x = 0, ...rest) {
    return rest.reduce((a, b) => a + b, x);
}

console.log(sum(1,2,3,4,5));

// 解构参数
function vectorLength({x = 0, y = 0, z = 0} = {}) {
    return Math.hypot(x, y, z);
}
const v = {x: 3, y: 4, z: 0};
console.log(vectorLength(v));

// 函数表达式
const factorial = function f(n) {
    if (typeof n === 'number') n = BigInt(n);
    if (n <= 1n) return 1n;
    return n * f(n - 1n);
}

console.log(factorial(5));

const angels = [30, 45, 60, 90, 180];
const radAngels = angels.map(
    function(angel) {
        return Math.PI * angel / 180;
    });

console.log(radAngels);

// 使用箭头函数
const radAngels2 = angels.map( angel => Math.PI * angel / 180 );
console.log(radAngels);

const arr = [1, 2, 3, 4, 5];
const sumarr = arr.reduce((x, y) => x + y);

console.log(sumarr);

// 执行上下文
function sayHelloTo(person) {
    return function() {
        console.log(`Hello ${person}!`);
    }
}

let greeting1 = sayHelloTo('Tom');
let greeting2 = sayHelloTo('Jerry');

greeting1();
greeting2();

greeting1 = null;
greeting2 = null;