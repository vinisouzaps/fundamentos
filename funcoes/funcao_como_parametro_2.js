 function executar(fn) {
   if(typeof fn === "function"){
      console.log(fn(90, 50));
   
   }
 }
    
 function somar(a, b){
   return a + b;
 }
 
 function subtrair(a, b) {
   return a - b
 }

 function mutiplicar(a, b) {
   return a * b;
 }

 function bomDia() {
   return "Bom dia!";
 }

 executar(somar);
 executar(subtrair);
 executar(mutiplicar);
 executar(bomDia);
