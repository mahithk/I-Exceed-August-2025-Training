const bankAccount = {
    owner: "Neha",
    balance: 5000,
    deposit: function (amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    },
    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    },
    checkBalance: function () {
        console.log(`Current Balance: ${this.balance}`);
    }
};

bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.withdraw(1500);
bankAccount.checkBalance();
bankAccount.withdraw(7000);
