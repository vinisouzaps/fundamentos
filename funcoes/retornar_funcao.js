function retornar() {
    
    function vomDia() {
        return "Bom dia!!!";
    }

    return bomDia;
}

console.log(retornar);
console.log(retornar());

const umaFuncao = retornar();
console.log(umaFuncao());
