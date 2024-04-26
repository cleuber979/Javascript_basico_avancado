

document.getElementById("mostrar_check").onclick = function(){
    
    document.getElementById("check_selecionado").innerHTML="";
    var check = document.getElementsByName("interesse");
    
   
    
    for (var b = 0; b < check.length; b++ ){
        if(check[b].checked){
          document.getElementById("check_selecionado").innerHTML +='<li>' + check[b].value + '</li>';
           
        }
    }
    
};