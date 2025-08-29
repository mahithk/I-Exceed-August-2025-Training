const cart = {
    items: [],
    addItem: function (name, price) {
        this.items.push({ name, price });
        console.log(`${name} added to cart`);
    },
    removeItem: function (name) {
        this.items = this.items.filter(item => item.name !== name);
        console.log(`${name} removed from cart`);
    },
    calculateTotal: function () {
        return this.items.reduce((total, item) => total + item.price, 0);
    },
    displayCart: function () {
        console.log("Cart Items:");
        this.items.forEach(item => console.log(`${item.name} - ₹${item.price}`));
        console.log(`Total: ₹${this.calculateTotal()}`);
    }
};

cart.addItem("Laptop", 60000);
cart.addItem("Mouse", 1500);
cart.displayCart();
cart.removeItem("Mouse");
cart.displayCart();
