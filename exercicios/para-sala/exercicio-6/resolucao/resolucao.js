function Account(accountNumber, agency, amount){
    const account = Object.create(Account.prototype)

    account.accountNumber = accountNumber
    account.agency = agency
    account.amount = amount

    return account
}

Account.prototype.credit  = function credit(amount) {
    return this.amount += amount
}

Account.prototype.debit  = function debit(amount) {
    return this.amount -= amount
}

Account.prototype.transferTo = function transferTo(anotherAccount, amountToTransfer) {
    if(this.amount < amountToTransfer ) {
        throw new Error(`Insufficient funds to transfer! \nYour balance: $${this.amount} / Amount you want to transfer: $${amountToTransfer}`)
    } else {
        this.debit(amountToTransfer)
        return anotherAccount.credit(amountToTransfer)
    }
}

const account1 = Account('123', '03', 2500)
const account2 = Account('321', '10', 3000)

// console.log(account1.credit(500));
// console.log(account1);
console.log('BeforeTransfer: ', account1, account2);
account1.transferTo(account2, 100);
console.log('After Transfer: ', account1,  account2);
