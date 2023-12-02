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

let combate = true;

if (combate == true){
  console.log("A batalha começa: ")
}
if (hero.life < 10) {
  console.log("Nosso heroi está ferido ")
}

console.log(hero.name,orc.name);


