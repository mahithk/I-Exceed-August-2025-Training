class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(amount) {
        try {
            if (amount <= 0) throw new Error("Invalid withdrawal amount");
            if (amount > this.balance) throw new Error("Insufficient funds");
            this.balance -= amount;
            return "Withdrawal successful. Balance: " + this.balance;
        } catch (error) {
            return error.message;
        }
    }
}
const account = new BankAccount(500);
console.log(account.withdraw(200));
console.log(account.withdraw(0));
console.log(account.withdraw(400));
