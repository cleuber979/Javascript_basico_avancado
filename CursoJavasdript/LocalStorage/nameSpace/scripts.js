

var meuWebApp ={

    'nome' : 'cleuber',

    'ver_nome': function(){
    console.log(meuWebApp.nome)
}
}

meuWebApp.ver_nome()

var meuWebApp = (function(){
    var nome ='cleuber';
    return{
        'ver_nome':function (){
            return nome;
        },
        'mudar_nome':function(novo_nome){
            nome = novo_nome;
        },
        'apagar_nome':function (){
            nome = null;
        }
    }
})();

meuWebApp.mudar_nome("joão");
console.log(meuWebApp.ver_nome());

meuWebApp.apagar_nome();
console.log(meuWebApp.ver_nome());