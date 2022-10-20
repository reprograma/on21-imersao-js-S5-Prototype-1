function Account(number, agency, initial) {
  const account = Object.create(Account.prototype);

  account.number = number;
  account.agency = agency;
  account.initial = initial;

  return account;
}

console.log(Account.number);