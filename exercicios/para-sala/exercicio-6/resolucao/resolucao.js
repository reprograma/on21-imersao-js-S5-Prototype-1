function Account(accountNumber, agencyNumber, amount){
    const account = Object.create(Account.prototype); 

    account.accountNumber = accountNumber;
    account.agencyNumber = agencyNumber;
    account.amount = amount;

    return account;
}

Account.prototype.credit = function credit(amount){
    this.amount += amount
    console.log(`O saldo atual é de R$ ${this.amount}`)
}

Account.prototype.debit = function debit(amount){
    this.amount -= amount;
    console.log(`O saldo atual é de R$ ${this.amount}`)
}

Account.prototype.transferTo = function transferTo(anotherAccount, amountToTransfer){
    if(this.amount < amountToTransfer){
       throw 'ERROR: Você não possui saldo suficiente para realizar essa operação'
    }

    this.debit(amountToTransfer);
    console.log(`O saldo da conta de origem ${this.accountNumber} é de R$ ${this.amount}`);
    anotherAccount.credit(amountToTransfer);
    console.log(`O saldo da conta de destino ${this.accountNumber} é de R$ ${this.amount}`);
}

const contaDaMaria = Account(2569, 1598, 1000);
const contaDaJoana = Account(2159, 8756, 800);

// console.log(contaDaMaria);
// console.log(contaDaJoana);

contaDaMaria.transferTo(contaDaJoana, 300);
