let inventory = {
    apple: 10,
    banana: 5,
    orange: 8
};
function updateInventory(item, count) {
    if (inventory[item]) {
        inventory[item] += count;
    } else {
        inventory[item] = count;
    }
}
updateInventory("apple", 5);
updateInventory("mango", 12);
console.log("Updated Inventory:", inventory);
