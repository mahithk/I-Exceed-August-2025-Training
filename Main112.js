function setOperations() {
    let s = new Set([1, 2, 3, 4]);
    s.add(5);
    s.add(2);
    s.delete(3);
    let hasFour = s.has(4);
    let size = s.size;
    let union = new Set([...s, ...[6, 7, 8]]);
    let intersection = new Set([...s].filter(x => [2, 5, 7].includes(x)));
    let difference = new Set([...s].filter(x => ![2, 5, 7].includes(x)));
    let values = [...s.values()];
    let keys = [...s.keys()];
    let entries = [...s.entries()];
    for (let val of s) {
        console.log("Value:", val);
    }
    s.clear();
    let newSet = new Set();
    newSet.add("apple");
    newSet.add("banana");
    newSet.add("cherry");
    let hasBanana = newSet.has("banana");
    let setSize = newSet.size;
    console.log(hasFour, size, union, intersection, difference, values, keys, entries);
    console.log(hasBanana, setSize, [...newSet]);
}
setOperations();
