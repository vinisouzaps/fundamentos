// #1: Função com parâmetro e com retorno
function somar(a, b){
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é:" ${somar(30, 56)}`);

// #2: Função com mais de um parâmetro e Sem retorno
function exibirMultiplicação (a, b){
    console.log(a * b);
}

exibirMultiplicação(10, 21);
exibirMultiplicação(9, 9);

// #3: Sem parametro e com retorno
function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual());

// #4; sem parametro e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
}

exibirHoraAtual();
