
//Manipulação do CSS

$("#adicionar_classe").click(function(){
    $("#adicionar_classe").addClass("styling");
});

// Remover classe:
$("#remover_classe").click(function(){
    $("#adicionar_classe").removeClass("styling");
});

  // Alternar classe:
  $("#alternar_classe").click(function(){
    $("#adicionar_classe").toggleClass("styling");
});