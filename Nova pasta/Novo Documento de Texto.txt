const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuário normal';

if (pontuacaoUsuario >=1000){
    console.log(' saida If else Usuario Vip')
}else{
   console.log('saida If else  Usuário normal') 
}

console.log("Saida operação ternaria  mesma saida com menos codigo "+ nivelUsuario);