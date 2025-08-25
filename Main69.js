const source1 = { a: 1, b: 2 };
const source2 = { c: 3, d: 4 };
const target = {};
Object.assign(target, source1, source2);

const proto = { greet: function() { return "Hello"; } };
const obj1 = Object.create(proto);
Object.defineProperty(obj1, "name", { value: "Mahith", writable: true });
Object.defineProperties(obj1, {
    age: { value: 21, writable: false },
    country: { value: "India", enumerable: true }
});

console.log(Object.entries(target));
console.log(Object.fromEntries([["x", 10], ["y", 20]]));

Object.freeze(target);
console.log(Object.isFrozen(target));

console.log(Object.getOwnPropertyDescriptor(obj1, "name"));
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.getOwnPropertyNames(obj1));

const sym = Symbol("id");
obj1[sym] = 99;
console.log(Object.getOwnPropertySymbols(obj1));

console.log(Object.getPrototypeOf(obj1));
console.log(Object.hasOwn(obj1, "age"));
console.log(Object.is(NaN, NaN));
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

Object.seal(obj1);
console.log(Object.isSealed(obj1));
