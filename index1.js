import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";
import { ContaPoupanca } from "./models/ContaPoupanca.js";

const cliente = new Cliente("Ricardo", 11122233311, 131231231); 
const cliente1 = new Cliente("Alice", 465631364461, 1132132123132); 


const contaCorrente = new ContaCorrente(500,cliente, 1001);
const contaPoupanca = new ContaPoupanca(cliente1, 1002);

console.log(cliente1);
console.log(contaCorrente);
console.log(contaPoupanca);
    