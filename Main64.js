const account = {  
    accNo: 101,  
    name: "Bhargav",  
    balance: 150000,  
    showInfo: function() {  
        console.log(`Account: ${this.accNo} | Holder: ${this.name} | Balance: ${this.balance}`);  
    },  
    deposit: function(amount) {  
        this.balance += amount;  
        return this.balance;  
    }  
};  

account.showInfo();  
console.log(account.deposit(2000));  
