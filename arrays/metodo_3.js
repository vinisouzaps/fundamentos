const numeros = [1, 2, 3, 4, 5, 6];

function praCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function (){
    console.log(forEach); 
});

/*numeros.forEach(function() {
    console.log("Dentro do forEach!")
});*/



/*for(let n of numeros) {
    console.log(n);
}*/


function