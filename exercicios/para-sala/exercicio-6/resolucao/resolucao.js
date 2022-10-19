function Account(number, agency, inicialValue){
    let account = Object.create(Account.prototype);

    account.number = number;
    account.agency = agency;
    account.inicialValue = inicialValue;

    if(inicialValue <= 0){
        return console.log('Valor precisa ser maior que 0')
    }
    return account;
}

Account.prototype.credit = function credit(amount){
    this.inicialValue += amount
    return `Você adc R$ ${amount} na conta. Seu novo saldo é R$ ${this.inicialValue}`
}

Account.prototype.debit = function debit(amount){
    if(this.inicialValue < amount){
       return console.log( 'Saldo insuficiente');
    } else{
        this.inicialValue -= amount;
        return `Você removeu R$ ${amount} na conta. Seu novo saldo é R$ ${this.inicialValue}`
    }
}

Account.prototype.transferTo = function transferTo(anotherAccount, amountTransfered){
    if(this.inicialValue < amountTransfered){
        return console.log( 'Você não possui saldo suficiente para realizar essa operação');
    } 

    this.debit(amountTransfered);
    console.log(`saldo conta origem  `)
    this.credit(anotherAccount);
    
}
let barbara = Account(001, 1663, 500)
let luara =  Account(2, 222, 50);
console.log("Bárbara - ",barbara)
console.log("Luara - ",luara)
console.log(barbara.credit(200))
console.log(barbara.debit(50))
console.log(barbara.transferTo(luara, 100));