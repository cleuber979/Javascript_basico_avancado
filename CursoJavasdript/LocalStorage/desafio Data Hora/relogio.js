
window.setInterval(function(){

var hora_atual = new Date();


var horas = hora_atual.getHours();
var minutos = hora_atual.getMinutes();
var segundos = hora_atual.getSeconds();

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



