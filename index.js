import { Cliente } from "./models/Cliente.js";
import { Conta } from "./models/Conta.js";

const cliente = new Cliente("Ricardo", 11122233311, 131231231); 
const cliente1 = new Cliente("Alice", 465631364461, 1132132123132); 


const conta = new Conta(cliente, 100);
const conta1 = new Conta(cliente1, 100);

console.log(cliente1);
console.log(conta);
console.log(conta1);
console.log(Conta.numeroContas);


