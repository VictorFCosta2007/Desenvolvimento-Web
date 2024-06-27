import { somar, subtrair, multiplicar, dividir } from "./operacoes_web";

document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('n1');
    const input2 = document.getElementById('n2');
    const resultado = document.getElementById('resultado');

    document.getElementById('somar').addEventListener('click', () => {
        const n1 = parseFloat(input1.value);
        const n2 = parseFloat(input2.value);
        resultado.textContent = `Resultado: ${somar(n1, n2)}`;
    });

    document.getElementById('subtrair').addEventListener('click', () => {
        const n1 = parseFloat(input1.value);
        const n2 = parseFloat(input2.value);
        resultado.textContent = `Resultado: ${subtrair(n1, n2)}`;
    });

    document.getElementById('multiplicar').addEventListener('click', () => {
        const n1 = parseFloat(input1.value);
        const n2 = parseFloat(input2.value);
        resultado.textContent = `Resultado: ${multiplicar(n1, n2)}`;
    });

    document.getElementById('dividir').addEventListener('click', () => {
        const n1 = parseFloat(input1.value);
        const n2 = parseFloat(input2.value);
        resultado.textContent = `Resultado: ${dividir(n1, n1)}`;
    });
})