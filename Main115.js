function weakSetOperations() {
    let ws = new WeakSet();
    let obj1 = { id: 1 };
    let obj2 = { id: 2 };
    let obj3 = { id: 3 };
    ws.add(obj1);
    ws.add(obj2);
    ws.add(obj3);
    let hasObj2 = ws.has(obj2);
    ws.delete(obj1);
    let exists = ws.has(obj1);
    let obj4 = { id: 4 };
    ws.add(obj4);
    let obj5 = { id: 5 };
    ws.add(obj5);
    let obj6 = { id: 6 };
    ws.add(obj6);
    let stillExists = ws.has(obj4);
    let ws2 = new WeakSet();
    let a = { name: "alpha" };
    let b = { name: "beta" };
    ws2.add(a);
    ws2.add(b);
    let checkA = ws2.has(a);
    ws2.delete(a);
    let checkDeleted = ws2.has(a);
    console.log(hasObj2, exists, stillExists, checkA, checkDeleted);
}
weakSetOperations();
