let x = 10;
x = x + 6;  //oreração invalida (x + 6 = x);
x = x - 1;
console.log(x);

let y = 20; // y = 20; atribuição simples;
y += 10;    // atribuição aditiva //  y = 10; primeiro; //  y = y + 10;
y -= 2;     // atribuição subtrativa; //  y = y - 2;
y *= 2;     // atribuição multiplicativa;  //  y = y * 2;
y /= 4;     // atribuição divisão  //  y = y / 4;
y %= 3;     //atribuição módulo;  //  y = y % 3;

console.log(x);
console.log(y);

let w = 'texto';
w += ' , mais texto';
w += '!!!';

console.log(w);