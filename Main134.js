let weakMap = new WeakMap();
class Person {
    constructor(name, age) {
        weakMap.set(this, { name, age });
    }
    getDetails() {
        return weakMap.get(this);
    }
}
let p1 = new Person("Alice", 25);
console.log(p1.getDetails());
