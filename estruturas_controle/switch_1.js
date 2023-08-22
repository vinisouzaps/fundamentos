let nota = 10;

switch(Math.ceil(nota)){
    
    case 10: 
    case 9: 
    case 8: 
    case 7: 
        console.log('Parabéns, Você está aprovado!');
        break;
    case 6:
    case 5:
        console.log('Recuperção, tera que fazer reforço!');
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Reprovado, cursar novamente!');
        default:
        console.log('Nota invalida!');
        break;
}  

console.log('Fim'); 