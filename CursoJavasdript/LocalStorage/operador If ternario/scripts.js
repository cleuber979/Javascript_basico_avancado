

// Exemplo com if normal:
var nome = "";


//if (nome) {
   // var mensagem = "Olá " + nome;
//} else {
  //  var mensagem = "Nome não informado";

  var mensagem;
nome ? mensagem =  "olá" + nome : mensagem = "Nome não informado";

console.log(mensagem)

nome = "";
idade = 45;

mostrar = (nome&&idade)? "olá " + nome + ", você tem " + idade + "anos "
:(!nome && !idade)? "Nome e idade não informados"
:(!idade)? "Idade não informada"
:"nome não informado ";

console.log(mostrar)


//}