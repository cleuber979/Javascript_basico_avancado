function mostrar_temperatura(dados){
    var dados_obj = JSON.parse(dados);
    console.log ('a temperatura em londres é ' + dados_obj.main.temp + ' graus Celsius');
}

function mostrar_dados(dados){
    var dados_obj = JSON.parse(dados);
    console.log(dados_obj);
}

function tempo_londres(callback) {
    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
            
        } 
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9c118210cb4c008937b7c3826fa5057d");
    xhttp.send();
}

tempo_londres(mostrar_temperatura);


tempo_londres(mostrar_dados);
