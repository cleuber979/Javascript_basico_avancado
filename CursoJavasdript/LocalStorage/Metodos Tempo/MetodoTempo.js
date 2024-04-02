
// Aula |Metodos de Tempo

//console.log('Mensagem 1');

//window.setTimeout(function(){
//    console.log('Mensagem 2'); 
//},3000);





document.getElementById("Button_enviar").onclick = function mostar(){
    document.getElementById("carroImg").style.display="none";
    window.setTimeout(function(){
        document.getElementById("carroImg").style.display="initial";
    },5000)
};

var count =0;

var interval= window.setInterval(function(){
    console.log(count);
    count++;
    if (count >= 10){
        window.clearInterval(interval);
    }
},1000);

