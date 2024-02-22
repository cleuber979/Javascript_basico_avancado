//               01234567
let umaString = 'Um texto ';
let outraString = "UM\ outro texto \""; //serve para escapar caracteres
let terceiraString = 'O rato roeu a roupa do rei de roma';

console.log(umaString);
console.log(outraString);
console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.concat('em um lindo dia.'));//formas de concatenação.
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString}em um lindo dia.`);
console.log(umaString.indexOf('texto'));//onde começa o indice da string
console.log(umaString.lastIndexOf('m',3))//vai achar a string procurando de tras para frente
console.log(umaString.replace('Um','Outra'));// substituição do texto
console.log(umaString.match(/[a-z]/g));//exemplo de expresão regulares em java script
console.log(terceiraString.replace(/r/,'#'));
console.log(terceiraString.replace(/r/g, '#'));// aqui vou repetir em toda string
console.log(terceiraString.length);
console.log(terceiraString.slice(2,6));// entro na string e pelo o indice pego do inicio ao final
console.log(terceiraString.split(' '));// quero divir um string
console.log(terceiraString.toLocaleUpperCase());//passo toda a string para maiuscula
console.log(terceiraString.toLocaleLowerCase());//passo toda string para minuscula
//site ecmastript

