function Account(numero, agencia, montante){
    const account = Object.create(Prototypal.prototype);

    account.numero = numero;
    account.agencia = agencia;
    account.montante = montante;

    account.prototype = {
        credit(amount) {}
    }

}