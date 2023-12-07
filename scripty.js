const car = ['vw','fiat','gm','ford','mercedes'];
console.log(car)
 console.log(car.length) // tamanho do array

 car.push('Alfa Romeo');// adiciona no fim do array 

 car.unshift('cherry'); // adiciona no inicio do array 

 const removido = car.pop();// retira no final do meu array o ultimo elemento

 const removido2 = car.shift();// romove o primeiro elemento do array  

 console.log("o primeiro item removido foi "+ removido2);

 console.log("o ultimo  item removido foi "+ removido);

 delete car [2];// deleto ou apago o item por indice 

 console.log(car.slice(0, 3));// estou fatiando meu array

 console.log(typeof car);// me retorna não um array mais sim um objeto pois array js e um objeto

 console.log(car instanceof Array);// estou perguntando se a instacia car e um array se true ok
 
 console.log(car)

 console.log(car[2]);





