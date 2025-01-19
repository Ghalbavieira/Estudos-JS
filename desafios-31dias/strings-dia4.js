/*
1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
6. Valide se um URL começa com `https://` e termina com `.com`.
*/



// 1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nome = "Ghalba Lorranny vieira da silva"

console.log(nome.slice(0, 6));

// 2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let linguagem = "Javascript é util";
console.log(linguagem.slice(0, 4) + " é muito util");


// Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
let text = " Ola mundo ooo  ";
console.log(text.trim());


//  Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
let frase = "Houve um erro no sistema."
console.log(frase.replace("erro", "correção" ));

// Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.

let frases ="Eu amo JavaScript"
let partes = frases.split(" ");
console.log(partes);


// 6. Valide se um URL começa com `https://` e termina com `.com`.

let site = "https://www.google.com.br/";
console.log(site.startsWith("https://")); 
console.log(site.endsWith(".com"));