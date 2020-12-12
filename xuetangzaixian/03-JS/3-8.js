{
    let myObj = {
        name: 'momo',
        birthday: '06-07'
    };
}

{
    let myObj = new Object();
    myObj.name = 'momo';
    myObj.birthday = '06-07';
}

{
    let myObj = Object.create({
        name: 'momo',
        birthday: '06-07'
    });
}

// 函数作为构造器
{
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    const v = new Vector2D(3, 4);
    console.log(v);
}

// 类作为构造器
{
    class Vector2D {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const v = new Vector2D(3, 4);
    console.log(v);
}

// 属性定义
const data1 = {
    foo: 'foo',
    bar: 'bar',
};

const data2 = {
    'foo-bar': 'foo bar',
};

// 表达式
const foo = 'foo';
const data3 = {
    [foo + 'bar']: 'foobar',
};

console.log(data1);
console.log(data2);
console.log(data3);

const id = Symbol('id');
const obj = {
    [id]: 'message',
};

console.log(obj);
console.log(obj[id]);

const scores = {
    '张三': 80,
    '李四': 100,
    '王五': 60,
};

for(let name in scores) {
    console.log(name, scores[name]);
}

/* for(let [name, score] of Object.entries(scores)) {
    console.log(name, score);
} */

for(let name of Object.keys(scores)) {
    console.log(name);
}

// 原型
{
    const o = {foo: 'foo'};
    const a = Object.create(o);
    const b = Object.create(o);
    a.bar = 'bar1';
    b.bar = 'bar2';
    console.log(a.foo, a.bar);
    console.log(b.foo, b.bar);
}

{
    function Foo(message = 'foo') {
        this.foo = message;
    }
    Foo.prototype.bar = 'bar';
    const a = new Foo('foo1');
    const b = new Foo('foo2');
    console.log(a.foo, a.bar);
    console.log(b.foo, b.bar);
}

// 原型链，可以实现继承
/* function Animal() {}
Animal.prototype = {
    eat() {
        console.log('I am eating.');
    }
}    

function Person() {}
Person.prototype = new Animal();
Person.prototype.speak = function() {
    console.log('I can say something.');
}

function Student(name) {
    this.name = name;
}
Student.prototype = new Person();
Student.prototype.study = function() {
    console.log('I am learning ···');
}

const stu = new Student('momo');
console.log(stu.eat());
console.log(stu.speak());
console.log(stu.study()); */

// ES6通过class来实现继承
class Animal {
    eat() {
        console.log('I am eating.');
    }
}

class Person extends Animal {
    speak() {
        console.log('I can speak.');
    }
}

class Student extends Person {
    study() {
        console.log('I am learning···');
    }
}

const stu = new Student('m0m0');
console.log(stu.eat(), stu.speak(), stu.study());

// 访问器属性
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    set length(len) {
        const scale = len / this.length;
        this.x *= scale;
        this.y *= scale;
    }
}

const v1 = new Vector2D(3, 4);
console.log(v1.x, v1.y, v1.length);

v1.length *= 2;
console.log(v1.x, v1.y, v1.length);

// 解构
{
    const obj = {
        foo: 'foo',
        bar: 'bar',
    };
    const {foo, bar} = obj;
    console.log(foo, bar);
}

{
    const obj = {
        foo: 'foo', 
        bar: 'bar',
    };
    const {foo: a, bar: b} = obj;
    console.log(a, b);
}

{
    const obj = {x: {y: 1}, z: 2};
    const {x: {y}, z} = obj;
    console.log(y, z);
}

{
    const obj = {foo: 1, bar: 2};
    for(let [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}