const account = {
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        this.balance -= amount;
    },
    checkBalance: function() {
        return this.balance;
    }
}

let savings = Object.create(account);
savings.accNo = "SB101";
savings.holder = "Arjun";
savings.bankName = "ICICI";
savings.branchName = "Mumbai Central";

let current = Object.create(account);
current.accNo = "CB101";
current.holder = "Arjun";
current.bankName = "ICICI";
current.branchName = "Mumbai Central";

console.log(savings.holder);
savings.deposit(45000);
savings.withdraw(5000);
console.log(savings.checkBalance());
