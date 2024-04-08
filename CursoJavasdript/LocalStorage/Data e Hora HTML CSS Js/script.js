
window.setInterval(function(){

    var hora_atual = new Date();
    var dia_atual =  hora_atual.getDate();
    var mes_atual = hora_atual.getMonth()+1;
    var ano_atual = hora_atual.getFullYear();   
    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();

    console.log(mes_atual);
    

   
    
    function formant_time(time){
        if(time>=0 && time<=9){
            var formant_time = time.toString();
            formant_time = "0"+ formant_time;
        }else if(dia_atual>=1 && dia_atual <=9){
            var dia_atual = dia_atual.toString();
            dia_atual = "0"+ dia_atual;
        }else if(mes_atual>=1 && mes_atual<=9){
            var mes_atual = mes_atual.toString();
            mes_atual = "0" + mes_atual;
        }
        else{
            var formant_time = time.toString();
        }
        return formant_time;
        

      
    }
    
    
    document.getElementById("relogio").innerHTML= formant_time(horas) + ":" + formant_time(minutos)+":" + formant_time(segundos);
    document.getElementById("ano_atual").innerHTML=formant_time(dia_atual)+ "/"+ formant_time(mes_atual)+ "/" +(ano_atual)
        
    },1000)

    
  
    
    
    