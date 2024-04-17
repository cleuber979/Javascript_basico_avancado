

// Aula de Break continue 

var listas =['cleuber','alex','nicolas','heloise','renato','roberta','alice','heitor'];

for(a=0;a<listas.length;a++){
    if(listas[a]=='renato'){
        nomeLista=listas[a];
        console.log('nome encontrado ' + nomeLista);
        break;
    }
    console.log('buscando nome '+ a);
}