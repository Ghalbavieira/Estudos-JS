const { gets, print } = require('./funcoes-auxiliares-3');

const valoresSalarios = gets();
let adicionalBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function percentualComBaseSalario(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const valorATrasferir = valoresSalarios - (calcularPorcentagem(valoresSalarios, percentualComBaseSalario(valoresSalarios))) + adicionalBeneficios;

print(valorATrasferir);


