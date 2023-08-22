// Criar duas Expressões que resultem em TRUE (aritiméticos/relacionais/logicos)
//Expressão sobre trabalho!
const t1 = true;
const t2 = false;


let pedirDemissao = t1 || t2;
console.log('Sou mal tratado no  trabalho. Devo procurar emprego?', pedirDemissao);
let procurarEmprego = t1 || t2;
console.log('Estou desempregado, devo procurar emprego?', procurarEmprego );


//Criar duas Expressões que resultem em FALSE (aritiméticos/relacionais/logicos)
let Odeia = t1 && t2;
let naoOdeia = t1 && t2;


console.log('Não fiz o que minha esposa queria ela me odeia?', Odeia);
console.log('Fiz o que ela queria, mas não do jeito dela, ainda me odeia?', naoOdeia); 
