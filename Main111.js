function arrayOperations() {
    let arr = [5, 2, 8, 1, 3];
    arr.push(10);
    arr.unshift(0);
    arr.sort((a, b) => a - b);
    let squared = arr.map(x => x * x);
    let even = squared.filter(x => x % 2 === 0);
    let sum = squared.reduce((acc, val) => acc + val, 0);
    let index = arr.indexOf(8);
    let sub = arr.slice(2, 5);
    arr.splice(2, 1);
    let rev = arr.reverse();
    let flat = [[1, 2], [3, 4]].flat();
    let includes = arr.includes(10);
    let everyCheck = arr.every(x => x > 0);
    let someCheck = arr.some(x => x > 5);
    let concatArr = arr.concat([11, 12]);
    let joined = arr.join("-");
    let findVal = arr.find(x => x > 2);
    let findIndexVal = arr.findIndex(x => x > 2);
    let keys = Array.from(arr.keys());
    let values = Array.from(arr.values());
    let entries = Array.from(arr.entries());
    console.log(arr, squared, even, sum, index, sub, rev, flat, includes);
    console.log(everyCheck, someCheck, concatArr, joined, findVal, findIndexVal);
    console.log(keys, values, entries);
}
arrayOperations();
