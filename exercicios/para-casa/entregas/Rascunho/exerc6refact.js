function Account(accountNumber, agencyNumber, initialAmount) {
  const account = Object.create(Account.prototype);

  account.accountNumber = accountNumber;
  account.agencyNumber = agencyNumber;
  account.initialAmount = initialAmount;

  return account;
}

Account.prototype.credit = function credit(amount) {
  this.amount += amount;
  console.log(`O saldo atual é de ${this.amount}`);
};

Account.prototype.debit = function debit(amount) {
  this.amount -= amount;
};

Account.prototype.transferTo = function transferTo(
  anotherAccount,
  valorASerTransferido
) {
  if (this.amount < valorASerTransferido) {
    throw "Erro!!! Você não possui saldo suficiente para realizar essa operação";
  }

  this.debit(valorASerTransferido);
  anotherAccount.credit(valorASerTransferido);
};

const contaDaLaura = Account(111, 222, 1000);
const contaDaMaria = Account(444, 333, 600);

contaDaLaura.transferTo(contaDaMaria, 300);

