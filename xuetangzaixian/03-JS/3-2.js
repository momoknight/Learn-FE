console.log(
    typeof null,            // object
    typeof undefined,       // undefined
    typeof 123,             // number
    typeof 'abc',           // string
    typeof true,            // boolean
    typeof Symbol(),        // symbol
    typeof 2n,              // bigint
    typeof Object(),        // object
)

function add(x, y) {
    return x + y;
}

console.log(typeof add);     // function

//------------------------------------------------------
/**
 * 字符串与数值相加时，数值转换成字符串
 * 字符串参与非加法运算时，字符串转换成数值
 * 布尔值与数值进行运算时，被当成1和0
 * 布尔值与字符串相加时，被转换成字符串
 * */ 

let a = 10, b = 'abc', c = 1;     
console.log(a + b + c);               // 10abc1

a = 123, b = '456', c = 1;
console.log(a + b - 1);               // 123455

a = 123, b = 'abc', c = 1;
console.log(a + b - 1);               // NaN

a = true, b = false;
console.log(a + 1, b * 3);            // 2, 0

a = true, b = false;
console.log(a + '', b + 'foobar');     // 'true', 'falsefoobar'

console.log(100 == '1e2');             // 将‘1e2’转换成数值

// 值类型和引用类型
let x = 20, y = 30;

function foo(a, b) {
    a++;
    b++;
    console.log([a, b]);
}

foo(x, y);
console.log([x, y]);

let obj = {x: 20, y: 30};

function foo2(obj) {
    obj.x++;
    obj.y++;
    console.log(obj);
}

foo2(obj);
console.log(obj);