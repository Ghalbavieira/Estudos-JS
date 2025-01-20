/*
1. Use um loop `for` para imprimir os números de 1 a 10 no console.
2. Crie uma lista de nomes e use um `for` para exibir cada nome.
3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
5. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).

*/


//Use um loop `for` para imprimir os números de 1 a 10 no console.

for(let i = 0; i <= 10; i++){
    console.log(i);
}

//  Crie uma lista de nomes e use um `for` para exibir cada nome.

let nomes = ['julia', 'ana', 'derek'];
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}


// Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let number = [5, 3, 4, 2, 1, 10]
let choice = 10

for(let i = 0; i < number.length; i++){
    if(number[i] === choice){
        console.log(`Número ${choice} encontrado na posição ${i}!`);
        break;
    }
}


//  Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
let numbers = 0;
while(numbers <= 10 ){
    console.log(`Contando: ${numbers}`);
    numbers++;
}

