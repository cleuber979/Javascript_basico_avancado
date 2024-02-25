let canvas = document.getElementById('canvas');
let container = canvas.getContext("2d");

 container.fillStyle='#8b8b8b'
 let jogador1 = {
     px: 100,
     py:100,
     tx:30,
     ty:200
      }
 

 let jogador2 ={
     px:900,
     py:100,
     tx:30,
     ty:200
 }
 
 let ball={
     px:960/2-15,
     py:420/2-15,
     tx:30,
     ty:30
 }

container.font="20px Arial"
 let pts1 = 0;
 let pts2 = 0;
 
 function Move_Ball(){
    ball.px +=2;
 }
 
 function Draw(){
  container.fillRect(jogador1.px,jogador1.py,jogador1.tx,jogador1.ty)
  container.fillRect(jogador2.px,jogador1.py,jogador1.tx,jogador1.ty)
  container.fillRect(ball.px,ball.py,ball.tx,ball.ty)
  container.fillText("Score 1: " + pts1, 200,50)
  container.fillText("Score 2: " + pts2, 750,50)
 }
 
function Main(){
    container.clearRect(0,0,1020,420)
    Draw()
    console.log("estou vendo");
    Move_Ball()
}



 setInterval(Main,20)
     
 

