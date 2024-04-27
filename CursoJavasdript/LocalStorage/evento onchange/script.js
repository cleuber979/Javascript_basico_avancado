

document.getElementById("options").onchange = function(){

    var campo_select = document.getElementById("options");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("informacao").innerHTML = valor_selecionado 
    


}