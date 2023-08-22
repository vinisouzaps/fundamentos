/*let fn = function() {

};*/



const produto = {
    nome: "Ipad",
    preco: 7000,
    desconto: 0.5,
    precoComDesconto: function(){
        return this.preco * (1 - this.desconto);
        
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());  