

// aula Ajax com JQuery

function apresentar_dados(data){
    $("#temp_atual").html(data.main.temp);
    $("#temp_max").html(data.main.temp_max);
    $("#temp_min").html(data.main.temp_min);
}

function pegar_dados(callback){
    $.ajax({
        url : "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9c118210cb4c008937b7c3826fa5057d",
        type: "GET",
        dataType: "json"
    }).done(function(data){
        callback(data);
        console.log(data);
    }).fail(function(){
        console.log("Erro na requisição");
    });

}


pegar_dados(apresentar_dados);

