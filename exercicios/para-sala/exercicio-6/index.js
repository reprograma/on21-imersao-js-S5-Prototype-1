//exercicios feitos pela profa aqui

function Account(accountNumber, agencyNumber, amount){
    const account = Object.create(Account.prototype);

    account.accountNumber = accountNumber;
    account.agencyNumber =  agencyNumber;
    account.amount = amount;

    return account;
}

Account.prototype.credit = function credit(amount){
    this.amount += amount;
    console.log(`O saldo atual é de R$ ${this.amount}`);
};

Account.prototype.debit = function debit(amount){
    this.amount -= amount;
    console.log(`O saldo atual é de R$ ${this.amount}`);
};

Account.prototype.transferTo = function transfer(anotherAccount, valueTransfer){
    if(this.amount < valueTransfer) {
        throw 'Erro!! Você não possui saldo suficiente'
    }
    //  lanca um erro e para a execução

    this.debit(valueTransfer);
    // this é referente a conta chamada
    anotherAccount.credit(valueTransfer)
};


const accountMaria = Account(123,456, 5000);
const accountJoana = Account(789,1011, 7000);

console.log(accountMaria)
console.log(accountJoana)

accountMaria.debit(200)
accountJoana.transferTo(accountMaria, 200)