class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
    }

    get accountNumber() {  // ciri ciri encap ada get set
        return this._accountNumber;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`${amount} deposited . New balance is ${this._balance}`);
        }}
    
    withdraw(amount) {
        if (amount > 0 && this._balance >= amount) {
            this._balance -= amount;
            console.log(`${amount} withdrawn. New balance is ${this._balance}`);
        }else {
            console.log('Insufficient balance');
        }
    }
}

const account = new BankAccount(123456, 100000);

console.log(`Account number: ${account.accountNumber}`);
console.log(`Balance: ${account.balance}`);

account.deposit(50000);
account.withdraw(1500000);