
//Select box

document.getElementById("mostrar_opcao").onclick=function(){
    
   //var campo_select = document.getElementById("options");
   //var indice_selecionado = campo_select.options.selectedIndex;
  // console.log(indice_selecionado)
   //var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
   //document.getElementById("opcao_selecionada").innerHTML=valor_selecionado;
   
   var valor_selecionado = document.getElementById("options").value;
   document.getElementById("opcao_selecionada").innerHTML= valor_selecionado;

};

//Radio Buttons

document.getElementById("Mostrar_radio").onclick = function() {

   var radio = document.getElementsByName("genero");
   var radio_select;

   for( var a=0;a < radio.length; a++){
      if(radio[a].checked){
         radio_select=radio[a].value;
         break;
      }
   }
    document.getElementById("radio_selecionado").innerHTML=radio_select;
}