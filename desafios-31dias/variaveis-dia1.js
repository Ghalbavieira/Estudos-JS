/*
1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".
2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.
3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".
6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

*/

// 1
let nome = "Ghalba";
let idade = 35;

console.log("Meu nome é " + nome + " e minha idade é " + idade + " anos");



// 2 
let productPrice = 340;
let discountPrice = 5;
let subTotal = productPrice - discountPrice;

console.log("O produto com desconto é " + subTotal + " reais");


// 3
let favoriteFood = ["Pizza", "lasanha", "batata"];
console.log("segunda opção de comida favorita é " + favoriteFood[1])

// 4
let books = {
    titulo: "Ola mundo",
    autor: "Emily Dickison",
    ano: 1865
}

console.log("O nome do livro é " + books.titulo + " e o autor é " + books.autor);


// 5
let estaLogado = false;
estaLogado = true;

console.log('Status de login: ' + estaLogado);