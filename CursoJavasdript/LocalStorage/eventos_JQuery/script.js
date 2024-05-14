//garanti que o pagina esta 100% carregada smpre usar assim.

$(document).ready(function(){


$("#nome").keyup(function(){
   var conteudo = $("#nome").val();

   if(conteudo!=""){
     $("#confirmar").css("display","initial");
   }else{
     $("#confirmar").css("display","none");
   }
})

































});