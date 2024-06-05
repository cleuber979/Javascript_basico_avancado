
function pegar_usuario(){

    window.setTimeout(function(){
        var u = {
            'nome': 'João'
        };
        return u;
    }, 1000);
    
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

// ter muita atenção quando está usando funcionabilidades com javascript

var user = {
    'nome':""
};

try{
     
    if(user.nome == ''){
        //throw e sempre erro
        throw 'Precisar preencher o nome do usuário ';
    }

    saudar_usuario(user);
} catch(erro){
    console.log(erro)
}