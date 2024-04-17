

function valor_pedagio(categoria){
  valor=0;
   switch(categoria){

        case '1':
            valor= 11.22;
            console.log("O valor a pagar é "+ valor);
            break;
            
        case '2':
            valor= 22.45;
            
            console.log("O valor a pagar é "+ valor);
            break;
        case '3':
            valor= 16.88;
            console.log("O valor a pagar é "+ valor);
            break;
        case '4':
            valor= 33.65;
            console.log("O valor a pagar é R$ "+ valor);
            break;

            default:
            console.log('Por favor digite um numero de 1 ha 4 ');

   }
     
};






function valor_aPagar(){
    var valor_pagar = document.getElementById("categoria").value;
    valor_pedagio(valor_pagar)
   
}




