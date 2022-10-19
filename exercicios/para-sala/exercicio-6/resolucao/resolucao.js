function  Account(accountNumber, agencyNumber, amount){
    const account = Object.create(Account.prototype);

    account.accountNumber = accountNumber;
    account.agencyNumber = agencyNumber;
    account.amount = amount;

    return account;
}

Account.prototype.credit = function credit(amount){
    this.amount += amount;
    console.log(`O saldo atual é: ${this.amount}`);
};

Account.prototype.debit = function debit(amount){
    this.amount -= amount;
    if(this.amount <= 0){
        console.log("Saldo insuficiente")
    }
}

Account.prototype.transferTo = function transferTo(anotherAccount, transferAmount){
    if(this.amount < transferAmount){
        throw 'Errro! Você não possui saldo suficiente para realizar essa operação'
    }

    this.debit(transferAmount);
    anotherAccount.credit(transferAmount)
}

const contaEvelin = Account(1234, 21, 2000);
const contaFulana = Account(234, 111, 1000);

contaEvelin.credit(500);
contaEvelin.debit(3000);
contaEvelin.transferTo(contaFulana, 1000);