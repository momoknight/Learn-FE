// 变量提升
console.log(a === undefined); // true
var a = 10;

function foo() {
    // var无块级作用域，但是有函数作用域，此时的a和i还没有声明
    console.log(a, i); // undefined, undefined
    var a = 20;
    for (var i = 0; i < a; i++) {
        // do sth
    }
    console.log(a, i); // 20, 10
}

foo();

// --------------------------------------------------------------

{
    let x = 10;
    console.log('x is ' + x); // 10
}

//console.log(typeof x); // error

let x = 10;

function foo2() {
    console.log(x); // undefined
    var x = 20;
    return x * x;
}

console.log(foo2()); // 400