
window.setInterval(function(){

    var hora_atual = new Date();
    var dia_atual =  hora_atual.getDate();
    var mes_atual = hora_atual.getMonth();
    var ano_atual = hora_atual.getFullYear();   
    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();

    console.log(dia_atual);
    console.log(mes_atual);
    console.log(ano_atual);
    
    function formant_time(time){
        if(time>=0 && time<=9){
            var formant_time = time.toString();
            formant_time = "0"+ formant_time;
        }else{
            var formant_time = time.toString();
        }
        return formant_time;
    }
    
    
    document.getElementById("relogio").innerHTML= formant_time(horas) + ":" + formant_time(minutos)+":" + formant_time(segundos);
    
        
    },1000)

    
  
    
    
    