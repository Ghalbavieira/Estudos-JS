/*
1. Verifique se um número é maior que 10 e menor que 20.
2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
3. Implemente um sistema de notas onde:
    - Notas >= 90: "Aprovado com A"
    - Notas >= 70 e < 90: "Aprovado com B"
    - Notas < 70: "Reprovado".
4. Crie uma variável `saldo` e verifique:
    - Se `saldo > 0`: Mostre "Saldo positivo".
    - Se `saldo === 0`: Mostre "Sem saldo".
    - Caso contrário, mostre "Saldo negativo".
5. Use o operador `!` para verificar se uma luz está apagada e ligue-a.
*/

//1. Verifique se um número é maior que 10 e menor que 20

let number = 12;

if(number > 10 && number < 20){
    console.log("Numero está entre os dois " + number);
}else {
    console.log(number);
}



// Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
let idade = 12;
if(idade >= 16 && idade <= 60){
    console.log("Pode votar com a idade " + idade + " anos");
}else {
    console.log("Não pode votar com a idade " + idade + " anos");
}


//Implemente um sistema de notas onde:
let nota = 94;

if(nota >= 90){
console.log("Aprovado com A")
}else if(nota >= 70 && nota < 90){
    console.log("Aprovado com B")
}else{
console.log("Reprovado")
}


//Use o operador `!` para verificar se uma luz está apagada e ligue-a.

let energiaLigada = true;

if(!energiaLigada ){
    console.log("Desligada")
}else {
    console.log("Ligada")
}