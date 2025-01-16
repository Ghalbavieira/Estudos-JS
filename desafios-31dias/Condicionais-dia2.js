/*
1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

*/


// 1

let hora = 15;

if(hora <= 12){
    console.log("Bom dia");
}else if (hora > 12 && hora <= 18){
    console.log("Boa tarde");
}else {
    console.log("Boa noite");
}


// 2

let mes = 3;

switch (mes) {
    case 1:
        console.log("Janeiro");
    break
    case 2:
        console.log("Fevereiro");
    break
    case 3:
        console.log("Março");
    break
    case 4:
        console.log("Abril");
    break
    case 5:
        console.log("Maio");
    break
    case 6:
        console.log("Junho");
    break
    case 7:
        console.log("Julho");
    break
    case 8:
        console.log("Agosto");
    break
    case 9:
        console.log("Setembro");
    break
    case 10:
        console.log("Outubro");
    break
    case 11:
        console.log("Novembro");
    break
    case 12:
        console.log("Dezembro");
    break
    default:
        console.log("Nenhum mês");
    break
}


// 3

let idade = 13;

if (idade <= 18) {
    console.log("não pode dirigir");
} else {
    console.log("Pode dirigir")
}


// 4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = 340
let total = saldo >= 10 ? "saldo positivo" : " saldo negativo"; 

console.log(total);

// 5 = Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

let numero = 0;

if (numero < 0) {
    console.log("Negativo");
}else if(numero > 0) {
    console.log("Positivo");
}else {
    console.log("Zero");
}


// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

let caixa = 3

switch (caixa) {
    case 1:
        console.log("Sacar")
    break
    case 2:
        console.log("Depositar")
    break
    case 3:
        console.log("Saldo")
    break
    default:
        console.log("Sem opções")
    break
}