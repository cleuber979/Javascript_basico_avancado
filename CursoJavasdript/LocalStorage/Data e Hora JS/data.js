
var data_hoje = new Date();

console.log(data_hoje.getDate() );

var data_de_nascimento = '1979-01-09';

var ano_de_nascimento = new Date ("1979-01-09").getFullYear();
var ano_atual = new Date().getFullyear();
var idade = ano_atual - ano_de_nascimento;

console.log(idade );

// Exercicio calculo de dias entrega

var data_envio = new Date("2018-03-20");
data_envio=data_envio.getTime();


var data_recebimento = new Date("2018-04-06");
data_recebimento=data_recebimento.getTime();

var dias = (data_recebimento-data_envio)/86400000
console.log(dias);
