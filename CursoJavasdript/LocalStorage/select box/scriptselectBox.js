
document.getElementById("mostrar_opcao").onclick=function(){
    
   var campo_select = document.getElementById("options");
   var indice_selecionado = campo_select.options.selectedIndex;
   console.log(indice_selecionado)
   var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
   document.getElementById("opcao_selecionada").innerHTML=valor_selecionado;
   
   

};