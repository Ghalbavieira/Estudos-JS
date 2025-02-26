/**
 *  1. Crie uma função que calcule o dobro de um número.
    2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
    3. Crie uma função que receba dois números e retorne o maior deles.
    4. Implemente uma função que calcule a média de três números.
    5. Crie uma função que receba um array de números e retorne a soma deles.
    6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.
 * 
 */

function calculeDobroNumeros(number1){
    return number1 * 2

}
console.log(calculeDobroNumeros(6))


function receiveName(nome){
    return `Olá ${nome} seja bem vindo!`
}

console.log(receiveName('Carlos'))

// 3. Crie uma função que receba dois números e retorne o maior deles.
function receiveTwoNumber(number1, number2){
    if(number1 > number2 ){
        return number1
    }else if(number2 > number1)
        return number2
    else{
        return 'Algo de errado, não está certo!'
    }
}

console.log(receiveTwoNumber(5,9))

// dois modelos

function receiveTwoNumber(number1, number2) {
    if (number1 === number2) {
        return 'Os números são iguais!';
    }
    return number1 > number2 ? number1 : number2;
}

console.log(receiveTwoNumber(10, 9)); 

// 4 Implemente uma função que calcule a média de três números.

function ImplementaCalcMedia(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3

    return media
}

console.log(ImplementaCalcMedia(4,9,5))



// 5 Crie uma função que receba um array de números e retorne a soma deles.

function receiveArrayNumbers(array){
    return array.reduce((acc, numero) => acc + numero, 0);
}   

console.log(receiveArrayNumbers([5, 7, 9, 2, 6]))


// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function receiveWordReturnNumber(nome){
    return nome.length
} 

console.log(receiveWordReturnNumber('Ghalba'))