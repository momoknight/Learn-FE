const person = {
    firstName: '三',
    lastName: '张',
    getFullName: function() {
        return this.lastName + ' ' + this.firstName;
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName());

person.sayToHello = function() {
    console.log(`Hello ${this.lastName}`);
}

person.sayToHello();
setTimeout(person.sayToHello, 100);   // Hello undefined