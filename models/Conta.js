import { Cliente } from "./Cliente.js";

export class Conta {

    constructor(saldo, cliente, agencia){
        this._cliente = cliente;
        this._saldo = saldo;
        this._agencia = agencia;
    }
    
    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return ;
        }

        return this._saldo -= valor;
    }

    deposito(valor){
        if(valor < 0 ) return;

        this._saldo += valor;
    }
}
