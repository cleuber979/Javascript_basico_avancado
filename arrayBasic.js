const car = ['vw','fiat','gm','ford','mercedes'];
console.log(car)
 console.log(car.length) // array size

 car.push('Alfa Romeo');// add an item to the end of the array

 car.unshift('cherry'); // add an item to the beginning of the array

 const removido = car.pop();// remove an item at the end of my array, the last element

 const removido2 = car.shift();// removes the first element from the array

 console.log("o ultimo  item removido foi "+ removido);

 console.log("o primeiro item removido foi "+ removido2);
 
 delete car [2];// delete or delete the item by index 

 console.log(car.slice(0, 3));// I'm slicing my array

 console.log(typeof car);// it returns me not an array but an object because array js is an object

 console.log(car instanceof Array);// I'm asking if the car instance is an array if true ok
 
 console.log(car)

 console.log(car[2]);





