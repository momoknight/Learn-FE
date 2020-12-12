const id1 = Symbol('foo');
const id2 = Symbol('foo');

console.log(id1);
console.log(id1 == id2); // false

const foo = Symbol.for('foobar'),
        bar = Symbol.for('foobar');

console.log(foo == bar); // true

console.log(Symbol.keyFor(foo));

// 私有属性
const size = Symbol('size');

class Collection {
    constructor() {
        this[size] = 0;
    }

    add(item) {
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance) {
        return instance[size];
    }
}

//---------------------------------------------------------------

const a = Number.MAX_SAFE_INTEGER + 1;
const b = a + 1;
const c = BigInt(a) + 1n;

console.log(a, b, c);

const d = Number.MAX_VALUE;
const e = d * 2;
const f = BigInt(d) * 2n;

console.log(d, e, f);