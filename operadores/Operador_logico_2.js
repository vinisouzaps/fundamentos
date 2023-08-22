const t1 = true;
const t2 = false;

let comprarTV50 = t1 && t2;  //  AND
console.log('Vamos comprar a TV 50"? ' + comprarTV50);  
console.log('Vamos comprar a TV 50"? ', comprarTV50); 

let comprarTV32 = t1 !== t2;    // XOR
console.log('Vamos comprar a TV 32"? ', (t1 !== t2));  

let tomarSorvete = t1 || t2;   // or
console.log('Vamos comprar sorvete"? ', tomarSorvete); 

let ficarEmCasa = !tomarSorvete;  // NOT  operador unario.
console.log('Vamos ficar em casa"? ', ficarEmCasa);