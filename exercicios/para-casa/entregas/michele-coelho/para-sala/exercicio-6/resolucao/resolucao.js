/**
 Exercício 6

Defina uma função construtora Prototypal para um objeto `Account`.

A conta deve ser instanciada com:
- [ ] Seu número
- [ ] Número da agência
- [ ] Um montante inicial que deve ser diferente de zero

Os métodos de `Account` são:
- [ ] `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
- [ ] `debit(amount)`, que subtrai o valor especificado do montante
- [ ] `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.

Teste tudo o que foi criado.
 */

function Account(numeroConta, numAgencia, montante) {
    let account = Object.create(Account.prototype);

    account.numeroConta = numeroConta;
    account.numAgencia = numAgencia;
    account.montante = montante;

    return account;

}

Account.prototype.credit = function credit(amount) {
    if (amount != 0) {
        this.montante += amount;
    } else {
        console.log(" O montante inicial que deve ser diferente de zero!")
    }
}

Account.prototype.debit = function debit(amount) {
    this.montante -= amount;
}
Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
    if (this.montante >= amount) {
        this.debit(amount);
        anotherAccount.credit(amount)
        console.log(`Transferencia de R$=${amount} realizada para conta:${anotherAccount.numeroConta}  agencia:${anotherAccount.numAgencia} realizada com sucesso!`);
    } else {

        console.log("Saldo insuficiente para realizar a transferencia!!")
    }

}

const conta1 = Account(1, 232, 400);
const conta2 = Account(2, 13, 400);

conta1.credit(1000);
conta1.transferTo(conta2, 500);