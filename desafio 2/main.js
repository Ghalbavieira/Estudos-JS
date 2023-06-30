const { gets, print } = require('./funcoes-auxiliares-2');

const numero = gets();
let maior = 0;
let menor = 0;
for (let i = 0; i < numero; i++){
    var um = gets();
    if (um % 2 === 0) {
        if (um > maior) {
            maior = um;
        }
    } else {
        if (menor === 0) {
            menor = um;
        } else if(um < menor){
            menor = um;
        }
    }
    
}

print(maior);
print(menor);