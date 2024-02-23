let canvas = document.getElementById('canvas');
let container = canvas.getContext("2d");

 container.fillStyle='#8b8b8b'
 let jogador1 = container.fillRect(100,100,30,200);
 let jogador2 = container.fillRect(900,100,30,200);
 let ball = container.fillRect(960/2-15,420/2-15,30,30);

 container.font = '20px Ariel';
 let Score = container.fillText("Score 1: " + 0, 200,50);
