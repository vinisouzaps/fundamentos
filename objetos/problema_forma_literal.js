const d1 = {
    dia: 13,
    mes: 6,
    ano: 2023,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 11,
    mes: 5,
    ano: 2020,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};


const d3 = {
    dia: 4,
    mes: 8,
    ano: 2021,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());