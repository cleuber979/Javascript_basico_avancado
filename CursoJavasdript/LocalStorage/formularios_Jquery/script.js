 var campo_nome = $("#campo_nome").val();
 console.log(campo_nome);
 var campo = $("#campo_nome").val("Heloise Henrique Dias");
  
// como selecionar o valor dos select box 

console.log($("#options").val());

// esse codigo retorna o valor selecionado na select box 

// segundo metodo e o find esse vai retorna o texto selecionado no select box
console.log($("#options").find(":selected").text());

// agora vamos monitora a seleção pelo evento change

$("#options_01").change(function(){
    var novo_selecionado = $("#options_01").find(":selected").text();
    console.log(novo_selecionado)
})

// pegar o valores pelo Radio Buttons 
$("input[name='genero']:checked").val();
console.log($("input[name='genero']:checked").val())
// esse metodo pegar o valor selecionado

//pegar o texto do radio Buttons 
$("input[name='genero']:checked").parent('span').text();
// esse codigo pega o texo selecionado no radio buttons

// pegar os valores contidos em checkboxes nonitorando os valores 

$("input[name='interesse']").change(function(){
    var checkboxes_selecionado = $("input[name='interesse']:checked");
    var textos = [];

    $.each(checkboxes_selecionado,function(index,value){
      textos.push($(value).parent("span").text());
    });
    console.log(textos)
})