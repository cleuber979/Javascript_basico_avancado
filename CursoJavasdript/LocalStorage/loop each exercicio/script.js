
var interesse = $("#interrese li");
//console.log(interesse);

$.each(interesse,function( chave,valor) {
  console.log($(valor).text());
});