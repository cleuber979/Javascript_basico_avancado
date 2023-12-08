const pessoa1={
   nome:'cleuber',
   sobrenome:'Maciel',
   idade:'43'

};

console.log(pessoa1.nome);// estou entrando dentro do obejeto pessoa1 e no atributo nome
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome,sobrenome,idade){// função construtora esta função irá criar objetos 
   return{
      nome:nome,
      sobrenome:sobrenome,
      idade:idade

 }
}

let pessoa = criaPessoa('cleuber','barbosa',45)
let pessoa1= criaPessoa('Marina','Fonseca',38)

criaPessoa('cleuber','barbosa',45)

console.log(pessoa);
console.log(pessoa1);

