function Account(number, agengy, value){
    const account = Object.create(Account.prototype);

    account.number = number;
    account.agency = agengy;
    account.value = value;

    return account
}

// Account.prototype.

//    console.log(this.value += value);
// };

// Account.prototype.debit(value){
//     if(this.value == 0){
//         console.log('Vocë náo possui saldo ' + this.value); 
//         };

//     if(this.value >= value){
//         console.log(`Saque no valor ${value} aprovado!\n Seu saldo atual e ` + this.value - value);
//     }
// };

// Account.prototype.transferTo(anotherAccout, value){

// };
