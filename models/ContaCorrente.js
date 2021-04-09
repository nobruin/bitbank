import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    static numeroContasCorrentes = 0;
    constructor(saldo, cliente, agencia){

        ContaCorrente.numeroContasCorrentes++;
        super(saldo, cliente, agencia);
    }
}