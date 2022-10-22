function Account(accontNumber, agencyNumber, amount) {
  this.accontNumber = accontNumber;
  this.agencyNumber = agencyNumber;
  this.amount = amount;
}

Account.prototype.credit = function credit(amount) {
  this.amount += amount;
  console.log(`Saldo atual é de R$${this.amount}`);
};

Account.prototype.debit = function debit(amount) {
  this.amount -= amount;
  console.log(`Saldo atual é de R$${this.amount}`);
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  if (this.amount < amount) {
    throw "Erro!!! Você não possui saldo suficiente para realizar essa operação";
  }

  this.debit(amount);
  anotherAccount.credit(amount);
};

const Account1 = new Account(1, 123, 100_000);
const Account2 = new Account(2, 123, 1_000);

Account1.credit(50_000);
Account1.debit(50_000);
Account1.transferTo(Account2, 50);

console.log(Account1, Account2);
