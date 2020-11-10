class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest() {
        return this.balance + (this.balance * this.interestRate);
        //increases the balance by adding the appropriate interest
    }
}

class BankAccountwithFee extends BankAccount {
    constructor(balance, interestRate, fee) {
        super(balance, interestRate);
        this.fee = fee;
    }
    applyFee() {
        return this.balance -= this.fee;
        // subtracts fee from the balance
    }
}

const account = new BankAccount(100, .05);
const account1 = new BankAccount(500, .10);
const account2 = new BankAccount(250, .025);
const account4 = new BankAccountwithFee(1000, .05, 25);
const account5 = new BankAccountwithFee(750, .10, 15);
const account6 = new BankAccountwithFee(1200, .05, 75);

console.log(account);
console.log(account.addInterest());
console.log(account4);
console.log(account4.applyFee()); 
console.log(account1); 
console.log(account1.addInterest());
console.log(account5.applyFee());

console.log(account6); 
console.log(account6.applyFee()); 
