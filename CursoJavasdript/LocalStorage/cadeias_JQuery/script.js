

$("#animar").click(function(){

    $("#quadrado")
        .animate({width: '+=20px'},500)
        .animate({height: '+=20px'},500, 
            function() {
                $("#quadrado").css('background-color', 'green')
            }
        )
        .animate({borderRadius: '20px'});
});