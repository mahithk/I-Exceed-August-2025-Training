class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item, quantity) {
        try {
            if (!item || quantity <= 0) throw new Error("Invalid item or quantity");
            this.items.push({ item, quantity });
            return "Added " + quantity + " " + item + "(s)";
        } catch (error) {
            return error.message;
        }
    }
    checkout() {
        try {
            if (this.items.length === 0) throw new Error("Cart is empty");
            return "Order placed with " + this.items.length + " items";
        } catch (error) {
            return error.message;
        }
    }
}
const cart = new ShoppingCart();
console.log(cart.addItem("Laptop", 1));
console.log(cart.addItem("Phone", 0));
console.log(cart.checkout());
