function Account(accountNumber, agencyNumber, saldo) {
    const account = Object.create(Account.prototype)

    account.accountNumber = accountNumber
    account.agencyNumber = agencyNumber
    account.saldo =  saldo

    return account

}


Account.prototype.credit = function credit(amount) {
    this.saldo += amount;
    console.log(`Valor creditado: ${amount} `)

}

Account.prototype.debit = function debit(amount) {
    if (this.saldo >= amount) {
        this.saldo -= amount
        console.log(`Valor debitado: ${amount}`)
    } else {
        throw 'Não foi possível realizar a operação'
    }

}

Account.prototype.transferTo = function transferTo(anotherAcc, amount) {
    if (this.saldo >= amount) {
        this.debit(amount)
        anotherAcc.credit(amount)
        console.log(`Transferência realizada no valor de ${amount}`)
    } else {
        throw 'Não foi possível realizar a operação'
    }
}


const newAccount = Account(111, 222, 100)
const newAccount2 = Account(333, 444, 100)


newAccount.credit(100)
newAccount.debit(50)
newAccount.transferTo(newAccount2, 50)
