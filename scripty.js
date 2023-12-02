let hero = {
  name:"Barbaro",
  life:100,
  power:10,
  defense:5
};

let orc = {
  name:"Onyx",
  life:120,
  power:20,
  defense:6
};

function Main () {
  console.log("A batalha começa: ")
  Atack()
}

function Atack() {
  console.log("O heroi atacou o mostro: ")
}

Main();

console.log(hero.name,orc.name);


