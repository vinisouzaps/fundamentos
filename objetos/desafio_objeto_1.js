//data (dia/mes/ano)

/*const data = {
    dia: 13,
    mes: 6,
    ano: 2023,

}

console.log(`${data.dia}/${data.mes}/${data.ano}`);
*/

const nascimento = {
    dia: 13,
    mes: 6,
    ano: 2023,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 12;

console.log(nascimento.exibir());