class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amt) {
        this.balance += amt;
    }
    withdraw(amt) {
        if (amt <= this.balance) this.balance -= amt;
    }
    getBalance() {
        return this.balance;
    }
}
let account = new BankAccount(15000);
account.deposit(25000);
account.withdraw(5000);
console.log(account.getBalance());
