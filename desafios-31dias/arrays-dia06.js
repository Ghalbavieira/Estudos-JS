/*
1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.
2. Use um loop para exibir todos os itens de um array de compras.
3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.
4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.
5. Use `splice` para substituir o terceiro item de um array por "Substituído".
6. Transforme um array de palavras em uma frase completa usando `join`.


*/

let color = ['azul', 'preto', 'laranja'];
color.push('cinza');

console.log(color)


//  Use um loop para exibir todos os itens de um array de compras.

let compras = ['maça', 'banana', 'uva'];

for (let i = 0; i < compras.length; i++) {
    console.log(compras[i]);
  }


// Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.

let number = [10, 20, 30, 40, 50];
let numberTwo = number.slice(3, 5);
console.log(numberTwo);


// Crie um array de tarefas e remova a primeira tarefa usando `shift`.

let tarefa = ['apagar', 'deletar']
tarefa.shift();
console.log(tarefa)


// Transforme um array de palavras em uma frase completa usando `join`.

let letras = ['um', 'cara', 'legal']
letras.join('', '');
console.log(letras);