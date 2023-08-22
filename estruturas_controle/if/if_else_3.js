const hora = 23;
let saudacao;

if(hora < 12) {
    saudacao = "Bom dia";
} else {
    if (hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }
}

console.log(saudacao);
//nao esquecer a porra a merda do console.log pra porra do bloco de codigo funcionar.