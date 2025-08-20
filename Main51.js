function greetUser(info) {
    console.log("welcome\t" + info);
}
let name1 = "Mahi";
let name2 = "Nani";
console.log(name1);
greetUser(name2);

function sumThree(a, b, c) {
    return a + b + c;
}
console.log(sumThree(1, 2, 3));

function showDetails(person, years, place = "Japan") {
    console.log(person);
    console.log(years);
    console.log(place);
}
showDetails("Mahi", 21, "Paris");

let addNumbers = (m, n) => m + n;
console.log(addNumbers(10, 65));

let convertUpper = word => word.toUpperCase();
console.log(convertUpper("Mahi"));
console.log(addNumbers(10, 43));
