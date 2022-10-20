// prototypal

function Account(accountNumber, agencyNumber, balance) {
    const account = Object.create(Account.prototype);

    account.accountNumber = accountNumber;
    account.agencyNumber = agencyNumber;
    account.balance = balance;

    return account;
}

const account = Account(123, 123, 1000);

Account.prototype.deposit = function (balance) {
    this.balance += balance;
    console.log(`Depositou ${balance} na conta`);
}

Account.prototype.credit = function (balance) {
    this.balance -= balance;
    console.log(`Sacou ${balance} na conta`);
}

Account.prototype.getBalance = function () {
    console.log(`Saldo da conta ${this.accountNumber} é ${this.balance}`);
}

Account.prototype.transfer = function (balance, account) {
    if (this.amount < balance) {
        throw 'Saldo insuficiente';
    }
    this.credit(balance);
    account.deposit(balance);
}

const ContaDaLuara = Account(123, 123, 1000);
const ContaDoJoao = Account(123, 123, 1000);

ContaDaLuara.deposit(100);
ContaDaLuara.credit(50);
ContaDaLuara.getBalance();
ContaDaLuara.transfer(100, ContaDoJoao);