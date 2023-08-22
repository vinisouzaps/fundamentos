 function executar(funcao) {
    if(typeof executar === "function"){
        console.log(funcao()); // fucao com parametro; 
    }
 }
 
 function bomDia() {
    return"Bom dia";
 }
 
 executar(3);
 executar(bomDia);  //funcao com parametro;

  const x = bomDia;
  const y = bomDia();

console.log(x());
console.log(y);