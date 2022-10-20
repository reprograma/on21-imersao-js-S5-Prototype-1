function Account(accountNumber, agencyNumber, saldo, bankNumber) {
    this.accountNumber = accountNumber
    this.agencyNumber = agencyNumber
    this.saldo = saldo
    this.bankNumber = bankNumber
}


Account.prototype.credit = function credit(amount) {
    this.saldo += amount;
    console.log(`Valor creditado: ${amount} na conta ${this.accountNumber}`)

}

Account.prototype.debit = function debit(amount) {
    if (this.saldo >= amount) {
        this.saldo -= amount
        console.log(`Valor debitado: ${amount} na conta ${this.accountNumber}`)
    } else {
        throw 'Não foi possível realizar a operação'
    }

}

Account.prototype.transferTo = function transferTo(anotherAcc, amount, bankNumber) {
    if (this.bankNumber === anotherAcc.bankNumber) {
        if (this.saldo >= amount) {
            this.debit(amount)
            anotherAcc.credit(amount)
            console.log(`Transferência realizada no valor de ${amount} para conta ${anotherAcc.accountNumber}`)
        } else {
            throw 'Não foi possível realizar a operação'
        }
    } else {
        if (this.saldo >= amount) {
            this.debit(amount + 2)                  //taxa de 2 reais
            anotherAcc.credit(amount)
            console.log(`Transferência realizada no valor de ${amount} para conta ${anotherAcc.accountNumber}`)
        } else {
            throw 'Não foi possível realizar a operação'
        }
    }
}


const newAccount = new Account(111, 111, 100, 1)
const newAccount2 = new Account(222, 222, 100, 2)
const newAccount3 = new Account(333, 333, 100, 1)

// console.log(newAccount.saldo)
// newAccount.credit(100)
// newAccount.debit(50)
// console.log(newAccount.saldo)


// newAccount.transferTo(newAccount2, 10)
// console.log(newAccount.saldo)
// newAccount.transferTo(newAccount3, 20)
// console.log(newAccount.saldo)