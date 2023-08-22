const cliente = {
    codigo: 150213,
    nome: "Ana",
    sobrenome: "Silva",
    vip: true,
    endereco: {
        logradouro: "Rua ABC",
        numero: 123,
        complemento: "APTO 101 Bloco B",
        pontosref: [
            {nome: "Hospital x", muitoProximo: true},
            {nome:"Shopping Y", muitoProximo: false},
        ]
    },
    nomeFilhos: ["Bia", "Carlos", "Gabriel"]
};

console.log(cliente.nome)
console.log(cliente.sobrenome)
console.log(cliente.vip)
console.log(cliente["endereco"]["logradouro"]);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosref[0].muitoProximo);