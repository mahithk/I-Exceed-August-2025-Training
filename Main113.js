function mapOperations() {
    let m = new Map();
    m.set("a", 1);
    m.set("b", 2);
    m.set("c", 3);
    let valA = m.get("a");
    let hasB = m.has("b");
    let size = m.size;
    m.delete("b");
    let keys = [...m.keys()];
    let values = [...m.values()];
    let entries = [...m.entries()];
    for (let [key, value] of m) {
        console.log(key, value);
    }
    m.clear();
    let m2 = new Map([
        ["x", 10],
        ["y", 20],
        ["z", 30]
    ]);
    m2.set("y", 50);
    let getY = m2.get("y");
    let spreadKeys = [...m2.keys()];
    let spreadValues = [...m2.values()];
    let spreadEntries = [...m2.entries()];
    console.log(valA, hasB, size, keys, values, entries);
    console.log(getY, spreadKeys, spreadValues, spreadEntries);
}
mapOperations();
