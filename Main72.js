let bankAccount = {};

Object.defineProperty(bankAccount, "balance", {
    get: function () {
        return this._balance;
    },
    set: function (amt) {
        if (!this._balance) {
            this._balance = 0;
        }
        this._balance += amt;
        console.log(`Deposited ${amt}, new balance: ${this._balance}`);
    }
});

bankAccount.balance = 1000;
bankAccount.balance = 5000;

Object.defineProperty(bankAccount, "withdraw", {
    set: function (amt) {
        if (!this._balance) {
            this._balance = 0;
        }
        if (amt > this._balance) {
            console.log("Insufficient balance");
        } else {
            this._balance -= amt;
            console.log(`Withdrawn ${amt}, current balance: ${this._balance}`);
        }
    }
});

bankAccount.withdraw = 2000;
bankAccount.withdraw = 5000;
bankAccount.balance = 3000;
bankAccount.withdraw = 1000;
console.log(`Final Balance: ${bankAccount.balance}`);
