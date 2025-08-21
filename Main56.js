let account = {
    id: 170,
    name: "Mahi",
    balance: 170000,
    info() {
        console.log(`Account: ${this.id} Holder: ${this.name} Balance: ${this.balance}`);
    },
    addMoney(amount) {
        return this.balance + amount;
    }
};

account.info();
console.log(account.addMoney(1000));
