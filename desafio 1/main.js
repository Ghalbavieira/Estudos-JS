const { gets, print } = require('./funcao-auxiliar-m1');

const media = gets();

if (media < 5) {
    console.log('Reprovado!');
} else if (media > 5 && media < 7) {
    console.log('Recuperaçao!')
} else {
    console.log('Aprovado');
}