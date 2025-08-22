let businessBankAccount = Object.create(bankAccount, {
    accNo: { value: "BBA100", configurable: true, writable: true, enumerable: true },
    holder: { value: "Ramesh", writable: false, configurable: true, enumerable: true },
    balance: { value: 5000, writable: true }
});

console.log(businessBankAccount.holder);
console.log(businessBankAccount.balance);
businessBankAccount.deposit(150000);
console.log(businessBankAccount.balance);
businessBankAccount.withdraw(25000);
console.log(businessBankAccount.balance);
