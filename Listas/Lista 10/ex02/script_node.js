const {somar, subtrair, multiplicar, dividir} = require('./operacoes_node');

const n1 = 10;
const n2 = 5;

console.log(`Soma: ${n1} + ${n2} = ${somar(n1,n2)}`);
console.log(`Subtrair: ${n1} - ${n2} = ${subtrair(n1,n2)}`);
console.log(`Multiplicar: ${n1} * ${n2} = ${multiplicar(n1, n2)}`);
console.log(`Dividir: ${n1} / ${n2} = ${dividir(n1, n2)}`);