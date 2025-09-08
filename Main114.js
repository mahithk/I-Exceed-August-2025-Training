function weakMapOperations() {
    let wm = new WeakMap();
    let obj1 = {};
    let obj2 = {};
    let obj3 = {};
    wm.set(obj1, "first");
    wm.set(obj2, "second");
    wm.set(obj3, "third");
    let hasObj2 = wm.has(obj2);
    let valObj1 = wm.get(obj1);
    wm.delete(obj3);
    let anotherObj = {};
    wm.set(anotherObj, "extra");
    let wm2 = new WeakMap();
    let a = {};
    let b = {};
    wm2.set(a, 100);
    wm2.set(b, 200);
    let valA = wm2.get(a);
    let valB = wm2.get(b);
    let hasB = wm2.has(b);
    wm2.delete(a);
    let exists = wm2.has(a);
    console.log(hasObj2, valObj1, wm.has(obj3));
    console.log(valA, valB, hasB, exists);
}
weakMapOperations();
