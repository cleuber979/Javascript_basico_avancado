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
  console.log("A batalha começa!: ");
  console.log("Um orc gigante apareceu!");
  console.log("Qual a sua escolha?");
  console.log("1 - Atacacar:");
  console.log("2 - defender:");
  console.log("3- Fugir!");

let escolha = 1;

if (escolha ==1 ) {
  Atacar()
}

}

function Atacar() {
  console.log("O heroi ataca!");
  console.log("O Orc predeu " + (hero.power-orc.defense));
}
 Main()



