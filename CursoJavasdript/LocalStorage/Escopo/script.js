
// escopo e que defini a acessebilidade de uma variavel



function criar_nome() {
     nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

criar_nome();

console.log(window.nome); // Este comando gerará um erro, 
// pois aqui não temos acesso às variáveis de escopo local da função criar_nome.

var x = 0;

if(x==0){
    let nome1 = 'cleuber'
}
 
console.log(nome1)

for(let a= 0; a < 5; a++){
    console.log(a)
}

const PI ='3,14159';
//não posso reatribuir valor ao PI
