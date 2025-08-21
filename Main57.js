const customer = {};
customer["name"] = "Bhargav";
customer["id"] = 54321;
customer["status"] = "Active";

const customer1 = {
    name: "Bhargav",
    id: 99999,
    city: "Hyderabad",
    account: {
        accno: 8765432,
        type: "current",
        balance: 200000,
        deposit(amt) {
            this.balance += amt;
            return this.balance;
        },
        withdraw(amt) {
            this.balance -= amt;
            return this.balance;
        }
    }
};

console.log(customer1.account.deposit(15000));
console.log(customer1.account.withdraw(5000));
