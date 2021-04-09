import { Cliente } from "./Cliente.js";

export class Conta {

    static numeroContas = 0;

    constructor(cliente, saldo){
        this.cliente = cliente;
        this.deposito(saldo);

        Conta.numeroContas +=1;
    }
    
    _saldo = 0;
    _cliente = null;

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
