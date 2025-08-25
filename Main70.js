function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Corolla", 2022);

console.log("Constructor:", myCar.constructor);

console.log("Has make?", myCar.hasOwnProperty("make"));
console.log("Has color?", myCar.hasOwnProperty("color"));

let anotherCar = new Car("Honda", "Civic", 2021);
console.log("Is Prototype?", Car.prototype.isPrototypeOf(myCar));
console.log("Is Prototype?", Car.prototype.isPrototypeOf(anotherCar));

console.log("Is make enumerable?", myCar.propertyIsEnumerable("make"));
console.log("Is toString enumerable?", myCar.propertyIsEnumerable("toString"));

console.log("Locale String:", myCar.toLocaleString());
console.log("To String:", myCar.toString());
console.log("Value Of:", myCar.valueOf());

let obj = { a: 1, b: 2 };
console.log("Has a?", obj.hasOwnProperty("a"));
console.log("Is Prototype?", Object.prototype.isPrototypeOf(obj));
console.log("To String:", obj.toString());
console.log("Value Of:", obj.valueOf());
