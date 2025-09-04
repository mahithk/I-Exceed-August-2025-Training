function BankAccount(name, balance) {
    this.name = name
    this.balance = balance
    this.deposit = function(amount) {
        this.balance += amount
        return this.balance
    }
    this.withdraw = function(amount) {
        if(amount > this.balance) throw new Error("Insufficient balance")
        this.balance -= amount
        return this.balance
    }
}

let account = new BankAccount("Mahesh", 10000)
console.log("Account Holder:", account.name)

console.log("Deposited 5000, New Balance:", account.deposit(5000))

try {
    console.log("Withdraw 12000, New Balance:", account.withdraw(12000))
} catch(err) {
    console.log("Error:", err.message)
}

console.log("Withdraw 3000, New Balance:", account.withdraw(3000))

let statement = `Final balance for ${account.name} is ${account.balance}`
console.log(statement)
