/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:

1 - Preço do combustivel;
2 - Gasto médio de combustível do carro por KM;
3 - Distancia em KM da viagem;

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 480;

let calcularViagem = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log(calcularViagem.toFixed(2));
